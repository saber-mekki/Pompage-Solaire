import React, { useState, useCallback } from 'react';
import CalculatorForm from './components/CalculatorForm';
import ResultsDisplay from './components/ResultsDisplay';
import MapComponent from './components/MapComponent';
import LanguageSwitcher from './components/LanguageSwitcher';
import { FormData, CalculationResult } from './types';
import { SOLAR_IRRADIANCE_DATA } from './constants';
import { useTranslation } from 'react-i18next';
import { InfoIcon } from './components/IconComponents';

const App: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData | null>(null);
  const [results, setResults] = useState<CalculationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculate = useCallback((data: FormData) => {
    setError(null);
    setFormData(data);

    try {
      const { location, month, pumpPower, pumpPowerUnit, operatingHours } = data;

      const locationData = SOLAR_IRRADIANCE_DATA[location];
      if (!locationData) {
        throw new Error('Location data not found.');
      }

      const pumpPowerInWatts = pumpPowerUnit === 'CV' ? pumpPower * 735.5 : pumpPower;
      const dailyEnergyNeedWh = pumpPowerInWatts * operatingHours;
      const dailyEnergyNeedKWh = dailyEnergyNeedWh / 1000;

      const solarIrradianceWh = locationData.irradiance[month];
      if (solarIrradianceWh === undefined) {
        throw new Error('Irradiance data for the selected month not found.');
      }
      const solarIrradianceKWh = solarIrradianceWh / 1000;

      // Assuming performance ratio (PR) of 0.75 for the solar system
      const performanceRatio = 0.75;
      const requiredPowerKWp = dailyEnergyNeedKWh / (solarIrradianceKWh * performanceRatio);

      const monthlyBreakdown = Object.entries(locationData.irradiance)
        .map(([m, irradianceWh]) => {
          const irradianceKWh = irradianceWh / 1000;
          const estimatedDailyProductionKWh = requiredPowerKWp * irradianceKWh * performanceRatio;
          const energyBalanceKWh = estimatedDailyProductionKWh - dailyEnergyNeedKWh;
          return {
            month: m,
            solarIrradianceKWh: irradianceKWh.toFixed(2),
            estimatedDailyProductionKWh: estimatedDailyProductionKWh.toFixed(2),
            energyBalanceKWh: parseFloat(energyBalanceKWh.toFixed(2)),
          };
        })
        .sort((a, b) => {
          const monthOrder = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          return monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month);
        });

      setResults({
        dailyEnergyNeedKWh: dailyEnergyNeedKWh.toFixed(2),
        solarIrradianceKWh: solarIrradianceKWh.toFixed(2),
        requiredPowerKWp: requiredPowerKWp.toFixed(2),
        monthlyBreakdown,
      });
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unknown error occurred.');
      }
      setResults(null);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">{t('appTitle')}</h1>
          <LanguageSwitcher />
        </nav>
      </header>
      <main className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <CalculatorForm onSubmit={calculate} />
          </div>
          <div className="lg:col-span-2">
            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</div>}
            {results && formData && (
              <>
                <ResultsDisplay results={results} />
                <div className="mt-8">
                   <MapComponent locationData={SOLAR_IRRADIANCE_DATA[formData.location]} />
                </div>
              </>
            )}
            {!results && !error && (
              <div className="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md" role="alert">
                <div className="flex">
                  <div className="py-1"><InfoIcon className="h-6 w-6 text-blue-500 mr-4"/></div>
                  <div>
                    <p className="font-bold">{t('welcomeTitle')}</p>
                    <p className="text-sm">{t('welcomeMessage')}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
       <footer className="bg-white mt-8 py-4 px-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {t('appTitle')}. {t('footerText')}</p>
      </footer>
    </div>
  );
};

export default App;
