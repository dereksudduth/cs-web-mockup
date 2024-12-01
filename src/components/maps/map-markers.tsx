'use client';

import { Buildings, Plus } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { useRouter } from 'next/navigation';
import type { Location, Coordinates } from '@/lib/types/maps';

interface MapMarkersProps {
  locations: Location[];
  selectedLocation?: number | null;
  hoveredLocation?: number | null;
  selectedMarker: Location | null;
  setSelectedMarker: (location: Location | null) => void;
  onLocationSelect?: (location: Location) => void;
  showQuickActions?: boolean;
  driverLocation?: Coordinates;
  destination?: Coordinates;
  clusterer?: any;
}

export function MapMarkers({
  locations,
  selectedLocation,
  hoveredLocation,
  selectedMarker,
  setSelectedMarker,
  onLocationSelect,
  showQuickActions = true,
  driverLocation,
  destination,
  clusterer,
}: MapMarkersProps) {
  const router = useRouter();

  return (
    <>
      {locations.map((location) => {
        const isSelected = location.id === selectedLocation;
        const isHovered = location.id === hoveredLocation;
        
        return (
          <Marker
            key={`marker-${location.id}`}
            position={location.position}
            onClick={() => {
              setSelectedMarker(location);
              onLocationSelect?.(location);
            }}
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: isSelected ? '#000000' : '#16a34a',
              fillOpacity: 1,
              strokeWeight: 1,
              strokeColor: '#ffffff',
              scale: isSelected || isHovered ? 12 : 10,
            }}
            clusterer={clusterer}
          />
        );
      })}

      {driverLocation && (
        <Marker
          position={driverLocation}
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: '#3b82f6',
            fillOpacity: 1,
            strokeWeight: 1,
            strokeColor: '#ffffff',
            scale: 10,
          }}
        />
      )}

      {destination && (
        <Marker
          position={destination}
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: '#ef4444',
            fillOpacity: 1,
            strokeWeight: 1,
            strokeColor: '#ffffff',
            scale: 10,
          }}
        />
      )}

      {selectedMarker && (
        <InfoWindow
          position={selectedMarker.position}
          onCloseClick={() => setSelectedMarker(null)}
        >
          <div className="p-2">
            <h3 className="font-medium flex items-center gap-2">
              <Buildings className="h-4 w-4" />
              {selectedMarker.name}
            </h3>
            {showQuickActions && (
              <div className="mt-2 flex items-center gap-2">
                <Button
                  size="sm"
                  className="h-8 rounded-full gap-2"
                  onClick={() => router.push('/dashboard/requests/new')}
                >
                  <Plus className="h-3 w-3" />
                  New Request
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 rounded-full"
                  onClick={() => router.push(`/dashboard/locations/${selectedMarker.id}`)}
                >
                  View Details
                </Button>
              </div>
            )}
          </div>
        </InfoWindow>
      )}
    </>
  );
}