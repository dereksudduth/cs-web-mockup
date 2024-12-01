'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { JobManagement } from '@/components/dashboard/vendor/job-management';
import { EquipmentManagement } from '@/components/dashboard/vendor/equipment-management';
import { PayrollOverview } from '@/components/dashboard/vendor/payroll-overview';

export default function VendorDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Vendor Dashboard</h1>
        <p className="text-muted-foreground">Manage your jobs, equipment, and payroll.</p>
      </div>

      <Tabs defaultValue="jobs" className="space-y-6">
        <TabsList>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
          <TabsTrigger value="payroll">Payroll</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs">
          <JobManagement />
        </TabsContent>

        <TabsContent value="equipment">
          <EquipmentManagement />
        </TabsContent>

        <TabsContent value="payroll">
          <PayrollOverview />
        </TabsContent>
      </Tabs>
    </div>
  );
}