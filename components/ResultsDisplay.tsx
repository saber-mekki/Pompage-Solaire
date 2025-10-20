import React from 'react';
import { useTranslation } from 'react-i18next';
import { CalculationResult } from '../types';
import { SunIcon, PanelIcon, ChartBarIcon, InfoIcon } from './IconComponents';

interface ResultsDisplayProps {
  results: CalculationResult;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  const { t } = useTranslation();
  const { dailyEnergyNeedKWh, solarIrradianceKWh, requiredPowerKWp, monthlyBreakdown } = results;

  const ResultCard: React.FC<{ icon: React.ReactNode; title: string; value: string; unit: string; tooltip: string }> = ({ icon, title, value, unit, tooltip }) => (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-start group relative">
      <div className="bg-blue-100 text-blue-600 rounded-full p-3 mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value} <span className="text-lg font-medium">{unit}</span></p>
      </div>
      <div className="absolute top-2 right-2">
        <div className="relative flex items-center justify-center">
          <InfoIcon className="h-5 w-5 text-gray-400 cursor-pointer" />
          <div className="absolute bottom-full mb-2 w-64 bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 left-1/2 -translate-x-1/2">
            {tooltip}
            <svg className="absolute text-gray-700 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-700">{t('resultsTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ResultCard
            icon={<SunIcon className="h-6 w-6" />}
            title={t('dailyEnergyNeed')}
            value={dailyEnergyNeedKWh}
            unit="kWh"
            tooltip={t('dailyEnergyNeedTooltip')}
          />
          <ResultCard
            icon={<PanelIcon className="h-6 w-6" />}
            title={t('requiredPower')}
            value={requiredPowerKWp}
            unit="kWp"
            tooltip={t('requiredPowerTooltip')}
          />
          <ResultCard
            icon={<ChartBarIcon className="h-6 w-6" />}
            title={t('solarIrradiance')}
            value={solarIrradianceKWh}
            unit="kWh/m²"
            tooltip={t('solarIrradianceTooltip')}
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-700">{t('monthlyBreakdownTitle')}</h3>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('month')}</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('solarIrradianceKWh')}</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('estimatedProduction')}</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('energyBalance')}</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {monthlyBreakdown.map((item) => (
                            <tr key={item.month}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t(`months.${item.month}`)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.solarIrradianceKWh}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.estimatedDailyProductionKWh}</td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${item.energyBalanceKWh >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {item.energyBalanceKWh.toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
