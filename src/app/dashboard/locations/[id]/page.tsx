'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LocationMap } from '@/components/maps/location-map';
import { LocationContacts } from '@/components/locations/location-contacts';
import { LocationNotes } from '@/components/locations/location-notes';
import { BillingProfileSelector } from '@/components/locations/billing-profile-selector';
import { NATIONWIDE_LOCATIONS } from '@/lib/data/mock-locations';
import { Buildings, MapPin, Plus, CaretRight } from '@phosphor-icons/react';

export default function LocationDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const location = NATIONWIDE_LOCATIONS.find(loc => loc.id === parseInt(params.id));

  if (!location) {
    return null;
  }

  return (
    <div className="container mx-auto p-8 max-w-7xl space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">{location.name}</h1>
          <p className="text-neutral-500">{location.address}</p>
        </div>
        <Button 
          className="rounded-full gap-2"
          onClick={() => router.push('/dashboard/requests/new')}
        >
          <Plus className="h-4 w-4" />
          New Request <CaretRight className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="lg:row-span-2">
              <CardHeader>
                <CardTitle>Location Map</CardTitle>
              </CardHeader>
              <CardContent>
                <LocationMap
                  locations={[{
                    id: location.id,
                    name: location.name,
                    position: location.position,
                    status: 'Active'
                  }]}
                  selectedLocation={location.id}
                  className="w-full h-[400px]"
                  showQuickActions={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Location Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Buildings className="h-4 w-4 text-neutral-500" />
                    <span className="font-medium">{location.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-neutral-500" />
                    <span>{location.address}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Location Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">Total Pickups</span>
                    <span className="font-medium">247</span>
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
        </TabsContent>

        <TabsContent value="contacts">
          <LocationContacts locationId={location.id} />
        </TabsContent>

        <TabsContent value="notes">
          <LocationNotes
            value={{
              accessNotes: '',
              specialInstructions: '',
              safetyNotes: '',
            }}
            onChange={() => {}}
          />
        </TabsContent>

        <TabsContent value="billing">
          <BillingProfileSelector
            profiles={[]}
            onSelect={() => {}}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}