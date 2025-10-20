import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormData, PowerUnit } from '../types';
import { SOLAR_IRRADIANCE_DATA } from '../constants';
import { LocationIcon, CalendarIcon, PowerIcon, ClockIcon } from './IconComponents';

interface CalculatorFormProps {
  onSubmit: (data: FormData) => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const [location, setLocation] = useState(Object.keys(SOLAR_IRRADIANCE_DATA)[0]);
  const [month, setMonth] = useState('June');
  const [pumpPower, setPumpPower] = useState(1);
  const [pumpPowerUnit, setPumpPowerUnit] = useState<PowerUnit>('CV');
  const [operatingHours, setOperatingHours] = useState(8);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ location, month, pumpPower, pumpPowerUnit, operatingHours });
  };
  
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">{t('formTitle')}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">{t('locationLabel')}</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LocationIcon className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              {Object.keys(SOLAR_IRRADIANCE_DATA).map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="month" className="block text-sm font-medium text-gray-700 mb-1">{t('monthLabel')}</label>
           <div className="relative">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CalendarIcon className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              {months.map(m => (
                <option key={m} value={m}>{t(`months.${m}`)}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="pump-power" className="block text-sm font-medium text-gray-700 mb-1">{t('pumpPowerLabel')}</label>
          <div className="flex">
             <div className="relative flex-grow">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <PowerIcon className="h-5 w-5 text-gray-400" />
               </div>
               <input
                type="number"
                id="pump-power"
                value={pumpPower}
                onChange={(e) => setPumpPower(parseFloat(e.target.value))}
                min="0.1"
                step="0.1"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select
              value={pumpPowerUnit}
              onChange={(e) => setPumpPowerUnit(e.target.value as PowerUnit)}
              className="border border-l-0 border-gray-300 rounded-r-md px-3 bg-gray-50 text-gray-600 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="CV">CV</option>
              <option value="W">W</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="operating-hours" className="block text-sm font-medium text-gray-700 mb-1">{t('operatingHoursLabel')}</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <ClockIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="operating-hours"
              value={operatingHours}
              onChange={(e) => setOperatingHours(parseInt(e.target.value, 10))}
              min="1"
              max="24"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        >
          {t('calculateButton')}
        </button>
      </form>
    </div>
  );
};

export default CalculatorForm;
