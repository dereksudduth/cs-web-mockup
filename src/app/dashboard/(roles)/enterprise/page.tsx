'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LocationManagement } from '@/components/dashboard/enterprise/location-management';
import { ReportsDashboard } from '@/components/dashboard/enterprise/reports-dashboard';
import { BillingOverview } from '@/components/dashboard/enterprise/billing-overview';

export default function EnterpriseDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Enterprise Dashboard</h1>
        <p className="text-muted-foreground">Manage your locations and view analytics.</p>
      </div>

      <Tabs defaultValue="locations" className="space-y-6">
        <TabsList>
          <TabsTrigger value="locations">Locations</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="locations">
          <LocationManagement />
        </TabsContent>

        <TabsContent value="reports">
          <ReportsDashboard />
        </TabsContent>

        <TabsContent value="billing">
          <BillingOverview />
        </TabsContent>
      </Tabs>
    </div>
  );
}