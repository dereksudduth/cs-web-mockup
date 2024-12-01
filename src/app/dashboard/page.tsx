'use client';

import { Card, CardContent } from '@/components/ui/card';
import { GoogleMapsWrapper } from '@/components/maps/google-maps-wrapper';
import { LocationMap } from '@/components/maps/location-map';
import { ActiveRequests } from '@/components/dashboard/overview/active-requests';
import { RecentActivity } from '@/components/dashboard/overview/recent-activity';
import { QuickActions } from '@/components/dashboard/overview/quick-actions';
import { ServiceStatus } from '@/components/dashboard/overview/service-status';
import { NATIONWIDE_LOCATIONS } from '@/lib/data/mock-locations';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Service Dashboard</h1>
          <p className="text-neutral-500">Track and manage your service requests</p>
        </div>
        <QuickActions />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-6">
              <GoogleMapsWrapper>
                <LocationMap
                  locations={NATIONWIDE_LOCATIONS.map(loc => ({
                    id: loc.id,
                    name: loc.name,
                    position: loc.position,
                    status: 'Active'
                  }))}
                  className="w-full h-[400px]"
                />
              </GoogleMapsWrapper>
            </CardContent>
          </Card>
          <ServiceStatus />
          <ActiveRequests />
        </div>

        <div className="space-y-6">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}