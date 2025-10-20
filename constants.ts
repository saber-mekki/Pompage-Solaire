import type { SolarIrradianceData } from './types';

// Data from "Etude de cas : Pompage au fil du soleil" for Tunisian locations.
// Data from "RAPPORT P50-P90 - Acteam ENR" for Rivel, France.
// New data for Toulouse, France, is inferred from the Acteam ENR report context.
// All values represent daily solar irradiance (Ensoleillement Ej) in Wh/m²/day on a horizontal plane.
export const SOLAR_IRRADIANCE_DATA: SolarIrradianceData = {
  // Tunisian Locations
  'Jendouba': {
    coords: [36.50, 8.78],
    irradiance: {
      'December': 2030, 'January': 2140, 'November': 2560, 'February': 2820,
      'October': 3460, 'March': 3990, 'September': 4850, 'April': 4960,
      'August': 5850, 'May': 5970, 'June': 6690, 'July': 6750,
    }
  },
  'Tunis': {
    coords: [36.80, 10.18],
    irradiance: {
      'January': 2280, 'December': 2400, 'November': 2620, 'February': 2900,
      'October': 3670, 'March': 4450, 'April': 4970, 'September': 5390,
      'May': 6100, 'August': 6440, 'June': 7550, 'July': 7560,
    }
  },
  'Gabes': {
    coords: [33.88, 10.11],
    irradiance: {
      'December': 2730, 'January': 2920, 'November': 3200, 'February': 3700,
      'October': 4210, 'March': 4870, 'September': 5420, 'April': 5890,
      'August': 6540, 'May': 6790, 'June': 7160, 'July': 7310,
    }
  },
  'Kairouan': {
    coords: [35.67, 10.10],
    irradiance: {
      'December': 2810, 'January': 2910, 'November': 3340, 'February': 3610,
      'October': 4230, 'March': 4950, 'September': 5420, 'April': 5780,
      'August': 6490, 'May': 6910, 'July': 7290, 'June': 7360,
    }
  },
  'Tozeur': {
    coords: [33.91, 8.13],
    irradiance: {
      'December': 2640, 'January': 2770, 'November': 3120, 'February': 3610,
      'March': 4030, 'October': 4360, 'September': 5600, 'April': 6400,
      'May': 6560, 'August': 7170, 'June': 7460, 'July': 7760,
    }
  },
  'Sfax': {
    coords: [34.74, 10.76],
    irradiance: {
      'December': 2950, 'January': 2950, 'November': 3260, 'February': 3730,
      'October': 4270, 'March': 4990, 'September': 5340, 'April': 5790,
      'August': 6860, 'May': 6860, 'June': 7350, 'July': 7580,
    }
  },
  // French Locations
  'Rivel (France)': {
    coords: [42.95, 1.98],
    irradiance: {
      'December': 1565, 'January': 1845, 'November': 1879, 'October': 2738,
      'February': 2880, 'March': 4131, 'September': 4286, 'April': 5269,
      'August': 5750, 'May': 6131, 'July': 6810, 'June': 6921,
    }
  },
  'Toulouse (France)': {
    coords: [43.60, 1.44],
    irradiance: {
      'December': 1450, 'November': 1640, 'January': 1720, 'October': 2580,
      'February': 2650, 'March': 3850, 'September': 4150, 'April': 4810,
      'August': 5610, 'May': 5590, 'June': 6250, 'July': 6530,
    }
  },
};
