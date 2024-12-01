'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ServiceScheduling } from '@/components/dashboard/homeowner/service-scheduling';
import { MembershipPlans } from '@/components/dashboard/homeowner/membership-plans';
import { SustainabilityReport } from '@/components/dashboard/homeowner/sustainability-report';

export default function HomeownerDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Welcome Back</h1>
        <p className="text-muted-foreground">
          Manage your waste services and view sustainability metrics.
        </p>
      </div>

      <Tabs defaultValue="schedule" className="space-y-6">
        <TabsList>
          <TabsTrigger value="schedule">Schedule Service</TabsTrigger>
          <TabsTrigger value="membership">Membership</TabsTrigger>
          <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
        </TabsList>

        <TabsContent value="schedule" className="space-y-4">
          <ServiceScheduling />
        </TabsContent>

        <TabsContent value="membership" className="space-y-4">
          <MembershipPlans />
        </TabsContent>

        <TabsContent value="sustainability" className="space-y-4">
          <SustainabilityReport />
        </TabsContent>
      </Tabs>
    </div>
  );
}