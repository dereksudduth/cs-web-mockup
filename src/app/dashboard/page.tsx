"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GoogleMapsWrapper } from "@/components/maps/google-maps-wrapper";
import { LocationMap } from "@/components/maps/location-map";
import { ActiveRequests } from "@/components/dashboard/overview/active-requests";
import { RecentActivity } from "@/components/dashboard/overview/recent-activity";
import { QuickActions } from "@/components/dashboard/overview/quick-actions";
import { ServiceStatus } from "@/components/dashboard/overview/service-status";
import { NATIONWIDE_LOCATIONS } from "@/lib/data/mock-locations";
import { useUser } from "@/lib/hooks/use-user";

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <header className="flex items-center justify-between bg-white p-6 shadow rounded-md">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back, {user?.name || "Guest"}
          </h1>
          <p className="text-neutral-500">
            Manage your services and track your sustainability progress.
          </p>
        </div>
        <QuickActions />
      </header>

      {/* Hero Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-6">
              <GoogleMapsWrapper>
                <LocationMap
                  locations={NATIONWIDE_LOCATIONS.map((loc) => ({
                    id: loc.id,
                    name: loc.name,
                    position: loc.position,
                    status: "Active",
                  }))}
                  className="w-full h-[400px]"
                />
              </GoogleMapsWrapper>
            </CardContent>
          </Card>
          <ServiceStatus />
          <ActiveRequests />
        </div>

        {/* Insights Section */}
        <aside className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold">Sustainability Insights</h2>
              <p className="text-sm text-neutral-500">
                You’ve diverted{" "}
                <span className="font-bold text-green-600">250 lbs</span> of
                waste this month! Great job contributing to a cleaner
                environment.
              </p>
            </CardContent>
          </Card>
          <RecentActivity />
        </aside>
      </div>

      {/* Footer Section */}
      <footer className="text-center text-sm text-neutral-400 py-6">
        © {new Date().getFullYear()} CheckSammy. All rights reserved.
      </footer>
    </div>
  );
}
