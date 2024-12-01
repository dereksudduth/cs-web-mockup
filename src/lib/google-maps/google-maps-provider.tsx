'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { GOOGLE_MAPS_CONFIG } from './config';

interface GoogleMapsContextType {
  isLoaded: boolean;
  loadError: Error | null;
}

const GoogleMapsContext = createContext<GoogleMapsContextType>({
  isLoaded: false,
  loadError: null,
});

let mapsPromise: Promise<void> | null = null;

export function GoogleMapsProvider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<Error | null>(null);

  useEffect(() => {
    if (!mapsPromise) {
      const loader = new Loader({
        apiKey: GOOGLE_MAPS_CONFIG.apiKey,
        version: GOOGLE_MAPS_CONFIG.version,
        libraries: GOOGLE_MAPS_CONFIG.libraries,
        language: GOOGLE_MAPS_CONFIG.language,
        region: GOOGLE_MAPS_CONFIG.region,
      });
      mapsPromise = loader.load();
    }

    mapsPromise
      .then(() => {
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error('Error loading Google Maps:', error);
        setLoadError(error);
      });
  }, []);

  return (
    <GoogleMapsContext.Provider value={{ isLoaded, loadError }}>
      {children}
    </GoogleMapsContext.Provider>
  );
}

export function useGoogleMaps() {
  const context = useContext(GoogleMapsContext);
  if (context === undefined) {
    throw new Error('useGoogleMaps must be used within a GoogleMapsProvider');
  }
  return context;
}