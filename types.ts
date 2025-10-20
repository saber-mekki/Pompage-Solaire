export type PowerUnit = 'CV' | 'W';

export interface FormData {
  location: string;
  month: string;
  pumpPower: number;
  pumpPowerUnit: PowerUnit;
  operatingHours: number;
}

export interface MonthlyBreakdown {
  month: string;
  solarIrradianceKWh: string;
  estimatedDailyProductionKWh: string;
  energyBalanceKWh: number;
}

export interface CalculationResult {
  dailyEnergyNeedKWh: string;
  solarIrradianceKWh: string;
  requiredPowerKWp: string;
  monthlyBreakdown: MonthlyBreakdown[];
}

export interface MonthlyIrradiance {
  [month: string]: number;
}

export interface LocationData {
  coords: [number, number]; // [latitude, longitude]
  irradiance: MonthlyIrradiance;
}

export interface SolarIrradianceData {
  [location: string]: LocationData;
}
