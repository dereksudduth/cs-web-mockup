'use client';

import { useLoadScript } from '@react-google-maps/api';
import { GOOGLE_MAPS_CONFIG } from '@/lib/google-maps/config';

interface GoogleMapsWrapperProps {
  children: React.ReactNode;
}

export function GoogleMapsWrapper({ children }: GoogleMapsWrapperProps) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_CONFIG.apiKey,
    libraries: GOOGLE_MAPS_CONFIG.libraries,
    version: GOOGLE_MAPS_CONFIG.version,
    language: GOOGLE_MAPS_CONFIG.language,
    region: GOOGLE_MAPS_CONFIG.region,
  });

  if (loadError) {
    return (
      <div className="flex items-center justify-center h-[400px] bg-neutral-50 rounded-lg">
        <div className="text-neutral-500">Error loading maps</div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-[400px] bg-neutral-50 rounded-lg">
        <div className="text-neutral-500 animate-pulse">Loading maps...</div>
      </div>
    );
  }

  return <>{children}</>;
}