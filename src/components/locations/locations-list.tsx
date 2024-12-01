'use client';

import { Button } from '@/components/ui/button';
import { Buildings, MapPin } from '@phosphor-icons/react';

interface Location {
  id: number;
  name: string;
  address: string;
  type: string;
}

interface LocationsListProps {
  locations: Location[];
  selectedLocation: number | null;
  onLocationSelect: (id: number) => void;
  onLocationHover: (id: number | null) => void;
}

export function LocationsList({
  locations,
  selectedLocation,
  onLocationSelect,
  onLocationHover
}: LocationsListProps) {
  return (
    <div className="divide-y divide-neutral-200 max-h-[400px] overflow-y-auto">
      {locations.map((location) => (
        <div
          key={location.id}
          className="flex items-center justify-between py-4 first:pt-0 last:pb-0 cursor-pointer hover:bg-neutral-50 -mx-6 px-6 transition-colors"
          onClick={() => onLocationSelect(location.id)}
          onMouseEnter={() => onLocationHover(location.id)}
          onMouseLeave={() => onLocationHover(null)}
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Buildings className="h-4 w-4 text-neutral-500" />
              <span className="font-medium">{location.name}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <MapPin className="h-4 w-4" />
              {location.address}
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="rounded-full"
          >
            View Details
          </Button>
        </div>
      ))}
    </div>
  );
}