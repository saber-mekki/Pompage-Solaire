import React from 'react';
import { LocationData } from '../types';
import { useTranslation } from 'react-i18next';

interface MapComponentProps {
  locationData: LocationData;
}

const MapComponent: React.FC<MapComponentProps> = ({ locationData }) => {
  const { t } = useTranslation();
  const [latitude, longitude] = locationData.coords;

  // Using OpenStreetMap embed
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.1},${latitude - 0.1},${longitude + 0.1},${latitude + 0.1}&layer=mapnik&marker=${latitude},${longitude}`;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-gray-700">{t('locationOnMap')}</h3>
        <div className="aspect-w-16 aspect-h-9">
             <iframe
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src={mapUrl}
                title="Location Map"
                style={{ border: 0 }}
                loading="lazy"
            ></iframe>
        </div>
    </div>
  );
};

export default MapComponent;
