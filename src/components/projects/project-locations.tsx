'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Buildings, MapPin, Phone } from '@phosphor-icons/react';
import { NATIONWIDE_LOCATIONS } from '@/lib/data/mock-locations';

interface ProjectLocationsProps {
  projectId: string;
}

export function ProjectLocations({ projectId }: ProjectLocationsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Locations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="divide-y divide-neutral-200">
          {NATIONWIDE_LOCATIONS.slice(0, 5).map((location) => (
            <div
              key={location.id}
              className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
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
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <Phone className="h-4 w-4" />
                  (555) 123-4567
                </div>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                  Active
                </span>
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}