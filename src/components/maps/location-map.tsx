'use client';

import { useState, useCallback } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { MapClustering } from './map-clustering';
import { GOOGLE_MAPS_CONFIG, MAP_DEFAULTS } from '@/lib/google-maps/config';
import type { Location, Coordinates } from '@/lib/types/maps';

interface LocationMapProps {
  locations: Location[];
  selectedLocation?: number | null;
  hoveredLocation?: number | null;
  onLocationSelect?: (location: Location) => void;
  className?: string;
  showQuickActions?: boolean;
  driverLocation?: Coordinates;
  destination?: Coordinates;
}

export function LocationMap({
  locations = [],
  selectedLocation,
  hoveredLocation,
  onLocationSelect,
  className = "w-full h-[400px]",
  showQuickActions = true,
  driverLocation,
  destination,
}: LocationMapProps) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_CONFIG.apiKey,
    libraries: GOOGLE_MAPS_CONFIG.libraries as ["places", "geometry"],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);

    if (locations.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      locations.forEach((location) => {
        bounds.extend(location.position);
      });
      map.fitBounds(bounds, 50);
    }
  }, [locations]);

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

  return (
    <GoogleMap
      mapContainerClassName={`${className} rounded-lg`}
      center={MAP_DEFAULTS.center}
      zoom={MAP_DEFAULTS.zoom}
      options={{
        ...MAP_DEFAULTS.options,
        styles: [...MAP_DEFAULTS.styles] as google.maps.MapTypeStyle[],
      }}
      onLoad={onLoad}
    >
      <MapClustering
        locations={locations}
        selectedLocation={selectedLocation}
        hoveredLocation={hoveredLocation}
        onLocationSelect={onLocationSelect}
        showQuickActions={showQuickActions}
      />
    </GoogleMap>
  );
}