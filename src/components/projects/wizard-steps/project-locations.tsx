'use client';

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { LocationMap } from '@/components/maps/location-map';
import { Card } from '@/components/ui/card';
import { Buildings, MapPin, Trash } from '@phosphor-icons/react';
import { LocationSelector } from '@/components/locations/location-selector';

interface ProjectLocationsProps {
  data: any[];
  onUpdate: (locations: any[]) => void;
}

export function ProjectLocations({ data, onUpdate }: ProjectLocationsProps) {
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  const handleLocationAdd = (location: any) => {
    if (!data.find(loc => loc.id === location.id)) {
      onUpdate([...data, location]);
    }
    setSelectedLocation(null);
  };

  const handleLocationRemove = (locationId: number) => {
    onUpdate(data.filter(loc => loc.id !== locationId));
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Project Locations</h3>
        <p className="text-sm text-neutral-500">
          Select the locations where this project will be implemented
        </p>
      </div>

      <div className="space-y-4">
        <LocationSelector
          selectedLocation={selectedLocation}
          onSelect={handleLocationAdd}
          multiSelect
        />

        {data.length > 0 && (
          <>
            <div className="mt-8">
              <Label>Selected Locations ({data.length})</Label>
              <LocationMap
                locations={data.map(loc => ({
                  id: loc.id,
                  name: loc.name,
                  position: loc.position,
                  status: 'Active'
                }))}
                className="w-full h-[300px] mt-2 rounded-lg border border-neutral-200"
              />
            </div>

            <Card className="mt-4">
              <div className="divide-y divide-neutral-200">
                {data.map((location) => (
                  <div
                    key={`selected-${location.id}`}
                    className="flex items-center justify-between p-4"
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
                      className="text-red-500 hover:text-red-600 hover:bg-red-50"
                      onClick={() => handleLocationRemove(location.id)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </>
        )}

        {data.length === 0 && (
          <div className="text-center py-12 bg-neutral-50 rounded-lg border border-neutral-200">
            <MapPin className="h-8 w-8 text-neutral-400 mx-auto mb-3" />
            <p className="text-neutral-600">No locations selected</p>
            <p className="text-sm text-neutral-500">
              Use the location selector above to add project locations
            </p>
          </div>
        )}
      </div>
    </div>
  );
}