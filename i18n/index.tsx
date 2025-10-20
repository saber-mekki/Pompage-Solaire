import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          appTitle: 'Solar Pumping Calculator',
          formTitle: 'Sizing Calculator',
          locationLabel: 'Location',
          monthLabel: 'Sizing Month (least sunny)',
          pumpPowerLabel: 'Pump Power',
          operatingHoursLabel: 'Daily Operating Hours',
          calculateButton: 'Calculate',
          resultsTitle: 'Calculation Results',
          dailyEnergyNeed: 'Daily Energy Need',
          requiredPower: 'Required Panel Power',
          solarIrradiance: 'Solar Irradiance',
          monthlyBreakdownTitle: 'Monthly Production Breakdown',
          month: 'Month',
          solarIrradianceKWh: 'Solar Irradiance (kWh/m²/day)',
          estimatedProduction: 'Est. Daily Production (kWh)',
          energyBalance: 'Energy Balance (kWh)',
          welcomeTitle: 'Welcome to the Solar Pumping Calculator!',
          welcomeMessage: 'Enter your pump details on the left to get started and see the required solar panel sizing.',
          footerText: 'All rights reserved.',
          locationOnMap: 'Location on Map',
          dailyEnergyNeedTooltip: 'Total energy required by the pump per day.',
          requiredPowerTooltip: 'Peak power of the solar panel array needed to meet the energy demand (kW-peak). Assuming a 75% performance ratio.',
          solarIrradianceTooltip: 'Average daily solar energy received per square meter for the selected month and location.',
          months: {
            'January': 'January', 'February': 'February', 'March': 'March', 'April': 'April',
            'May': 'May', 'June': 'June', 'July': 'July', 'August': 'August', 'September': 'September',
            'October': 'October', 'November': 'November', 'December': 'December'
          }
        }
      },
      fr: {
        translation: {
          appTitle: 'Calculateur de Pompage Solaire',
          formTitle: 'Calculateur de dimensionnement',
          locationLabel: 'Localisation',
          monthLabel: 'Mois de dimensionnement (le moins ensoleillé)',
          pumpPowerLabel: 'Puissance de la pompe',
          operatingHoursLabel: 'Heures de fonctionnement journalier',
          calculateButton: 'Calculer',
          resultsTitle: 'Résultats du calcul',
          dailyEnergyNeed: 'Besoin énergétique journalier',
          requiredPower: 'Puissance panneau requise',
          solarIrradiance: 'Ensoleillement',
          monthlyBreakdownTitle: 'Répartition de la production mensuelle',
          month: 'Mois',
          solarIrradianceKWh: 'Ensoleillement (kWh/m²/jour)',
          estimatedProduction: 'Prod. journalière estimée (kWh)',
          energyBalance: 'Bilan énergétique (kWh)',
          welcomeTitle: 'Bienvenue sur le Calculateur de Pompage Solaire !',
          welcomeMessage: 'Entrez les détails de votre pompe à gauche pour commencer et voir le dimensionnement de panneau solaire requis.',
          footerText: 'Tous droits réservés.',
          locationOnMap: 'Localisation sur la carte',
          dailyEnergyNeedTooltip: 'Énergie totale requise par la pompe par jour.',
          requiredPowerTooltip: 'Puissance crête du champ de panneaux solaires nécessaire pour répondre à la demande énergétique (kW-crête). En supposant un ratio de performance de 75%.',
          solarIrradianceTooltip: 'Énergie solaire moyenne journalière reçue par mètre carré pour le mois et le lieu sélectionnés.',
          months: {
            'January': 'Janvier', 'February': 'Février', 'March': 'Mars', 'April': 'Avril',
            'May': 'Mai', 'June': 'Juin', 'July': 'Juillet', 'August': 'Août', 'September': 'Septembre',
            'October': 'Octobre', 'November': 'Novembre', 'December': 'Décembre'
          }
        }
      },
      de: {
        translation: {
          appTitle: 'Solar Pumpen Rechner',
          formTitle: 'Größenrechner',
          locationLabel: 'Standort',
          monthLabel: 'Monat (am wenigsten sonnig)',
          pumpPowerLabel: 'Pumpenleistung',
          operatingHoursLabel: 'Tägliche Betriebsstunden',
          calculateButton: 'Berechnen',
          resultsTitle: 'Berechnungsergebnisse',
          dailyEnergyNeed: 'Täglicher Energiebedarf',
          requiredPower: 'Benötigte Panelleistung',
          solarIrradiance: 'Sonneneinstrahlung',
          monthlyBreakdownTitle: 'Monatliche Produktionsübersicht',
          month: 'Monat',
          solarIrradianceKWh: 'Sonneneinstrahlung (kWh/m²/Tag)',
          estimatedProduction: 'Gesch. tägliche Produktion (kWh)',
          energyBalance: 'Energiebilanz (kWh)',
          welcomeTitle: 'Willkommen beim Solar Pumpen Rechner!',
          welcomeMessage: 'Geben Sie links Ihre Pumpendetails ein, um die erforderliche Größe der Solarmodule zu ermitteln.',
          footerText: 'Alle Rechte vorbehalten.',
          locationOnMap: 'Standort auf der Karte',
          dailyEnergyNeedTooltip: 'Gesamtenergie, die die Pumpe pro Tag benötigt.',
          requiredPowerTooltip: 'Spitzenleistung der Solaranlage, die zur Deckung des Energiebedarfs benötigt wird (kW-Peak). Angenommen wird ein Leistungsverhältnis von 75%.',
          solarIrradianceTooltip: 'Durchschnittliche tägliche Sonnenenergie pro Quadratmeter für den ausgewählten Monat und Standort.',
          months: {
            'January': 'Januar', 'February': 'Februar', 'March': 'März', 'April': 'April',
            'May': 'Mai', 'June': 'Juni', 'July': 'Juli', 'August': 'August', 'September': 'September',
            'October': 'Oktober', 'November': 'November', 'December': 'Dezember'
          }
        }
      },
      ar: {
        translation: {
          appTitle: 'حاسبة الضخ الشمسي',
          formTitle: 'حاسبة التحجيم',
          locationLabel: 'الموقع',
          monthLabel: 'شهر التحجيم (الأقل شمسًا)',
          pumpPowerLabel: 'قوة المضخة',
          operatingHoursLabel: 'ساعات التشغيل اليومية',
          calculateButton: 'احسب',
          resultsTitle: 'نتائج الحساب',
          dailyEnergyNeed: 'الحاجة اليومية من الطاقة',
          requiredPower: 'طاقة الألواح المطلوبة',
          solarIrradiance: 'الإشعاع الشمسي',
          monthlyBreakdownTitle: 'تفصيل الإنتاج الشهري',
          month: 'الشهر',
          solarIrradianceKWh: 'الإشعاع الشمسي (كيلوواط ساعة/م²/يوم)',
          estimatedProduction: 'الإنتاج اليومي المقدر (كيلوواط ساعة)',
          energyBalance: 'ميزان الطاقة (كيلوواط ساعة)',
          welcomeTitle: 'أهلاً بك في حاسبة الضخ الشمسي!',
          welcomeMessage: 'أدخل تفاصيل المضخة على اليسار للبدء ومعرفة حجم الألواح الشمسية المطلوب.',
          footerText: 'جميع الحقوق محفوظة.',
          locationOnMap: 'الموقع على الخريطة',
          dailyEnergyNeedTooltip: 'إجمالي الطاقة التي تحتاجها المضخة يوميًا.',
          requiredPowerTooltip: 'الطاقة القصوى لمصفوفة الألواح الشمسية اللازمة لتلبية الطلب على الطاقة (كيلوواط-ذروة). بافتراض نسبة أداء 75٪.',
          solarIrradianceTooltip: 'متوسط الطاقة الشمسية اليومية المستلمة لكل متر مربع للشهر والموقع المختار.',
          months: {
            'January': 'يناير', 'February': 'فبراير', 'March': 'مارس', 'April': 'أبريل',
            'May': 'مايو', 'June': 'يونيو', 'July': 'يوليو', 'August': 'أغسطس', 'September': 'سبتمبر',
            'October': 'أكتوبر', 'November': 'نوفمبر', 'December': 'ديسمبر'
          }
        }
      }
    }
  });

export default i18n;