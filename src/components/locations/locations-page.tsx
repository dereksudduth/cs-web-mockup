'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { LocationMap } from '@/components/maps/location-map';
import { AddLocationDialog } from './add-location-dialog';
import { LocationsList } from './locations-list';
import { NATIONWIDE_LOCATIONS } from '@/lib/data/mock-locations';
import { MagnifyingGlass } from '@phosphor-icons/react';

export function LocationsPage() {
  const [locations, setLocations] = useState(NATIONWIDE_LOCATIONS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);

  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddLocation = (newLocation: any) => {
    setLocations(prev => [...prev, newLocation]);
  };

  return (
    <div className="container mx-auto p-8 max-w-7xl space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Locations</h1>
          <p className="text-neutral-500">View and manage your service locations</p>
        </div>
        <AddLocationDialog onLocationAdd={handleAddLocation} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="lg:row-span-2">
          <CardHeader>
            <CardTitle>Location Map</CardTitle>
          </CardHeader>
          <CardContent>
            <LocationMap
              locations={filteredLocations.map(loc => ({
                id: loc.id,
                name: loc.name,
                position: loc.position,
                status: 'Active'
              }))}
              selectedLocation={selectedLocation}
              hoveredLocation={hoveredLocation}
              className="w-full h-[600px]"
              showQuickActions={true}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="space-y-4">
              <CardTitle>Active Locations</CardTitle>
              <div className="relative">
                <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <Input
                  placeholder="Search locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 rounded-full"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <LocationsList
              locations={filteredLocations}
              selectedLocation={selectedLocation}
              onLocationSelect={setSelectedLocation}
              onLocationHover={setHoveredLocation}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Location Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Total Locations</span>
                <span className="font-medium">{locations.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Active Routes</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Average Response Time</span>
                <span className="font-medium">28 mins</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}