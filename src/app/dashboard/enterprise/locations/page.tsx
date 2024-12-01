'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, MapPin, Buildings, Phone } from '@phosphor-icons/react';
import { useState } from 'react';

const LOCATIONS = [
  {
    id: 1,
    name: 'Downtown Office',
    address: '123 Business Ave, City, State',
    type: 'Office',
    status: 'Active',
    contact: '(555) 123-4567',
  },
  {
    id: 2,
    name: 'West Side Warehouse',
    address: '456 Industrial Blvd, City, State',
    type: 'Warehouse',
    status: 'Active',
    contact: '(555) 234-5678',
  },
  {
    id: 3,
    name: 'South Retail Center',
    address: '789 Commerce St, City, State',
    type: 'Retail',
    status: 'Active',
    contact: '(555) 345-6789',
  },
];

export default function LocationsPage() {
  const [locations] = useState(LOCATIONS);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Locations</h1>
        <p className="text-muted-foreground">Manage your business locations</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>All Locations</CardTitle>
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            Add Location
          </Button>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-neutral-200">
            {locations.map((location) => (
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
                    {location.contact}
                  </div>
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                    {location.status}
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
    </div>
  );
}