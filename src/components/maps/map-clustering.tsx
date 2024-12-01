'use client';

import { useState, useEffect } from 'react';
import { MarkerClusterer } from '@react-google-maps/api';
import { MapMarkers } from './map-markers';
import type { Location } from '@/lib/types/maps';

interface MapClusteringProps {
  locations: Location[];
  selectedLocation?: number | null;
  hoveredLocation?: number | null;
  onLocationSelect?: (location: Location) => void;
  showQuickActions?: boolean;
}

export function MapClustering({
  locations,
  selectedLocation,
  hoveredLocation,
  onLocationSelect,
  showQuickActions,
}: MapClusteringProps) {
  const [selectedMarker, setSelectedMarker] = useState<Location | null>(null);

  useEffect(() => {
    if (selectedLocation) {
      const location = locations.find(loc => loc.id === selectedLocation);
      if (location) {
        setSelectedMarker(location);
      }
    }
  }, [selectedLocation, locations]);

  return (
    <MarkerClusterer
      options={{
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
        gridSize: 50,
        minimumClusterSize: 2,
        styles: [
          {
            textColor: 'white',
            url: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
            height: 53,
            width: 53,
          },
        ],
      }}
    >
      {(clusterer) => (
        <MapMarkers
          locations={locations}
          selectedLocation={selectedLocation}
          hoveredLocation={hoveredLocation}
          selectedMarker={selectedMarker}
          setSelectedMarker={setSelectedMarker}
          onLocationSelect={onLocationSelect}
          showQuickActions={showQuickActions}
          clusterer={clusterer}
        />
      )}
    </MarkerClusterer>
  );
}