'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SustainabilityChart } from '@/components/impact-hub/sustainability-chart';
import { ImpactMetrics } from '@/components/impact-hub/impact-metrics';
import { RecyclingDashboard } from '@/components/impact-hub/recycling-dashboard';
import { CarbonDashboard } from '@/components/impact-hub/carbon-dashboard';
import { WaterDashboard } from '@/components/impact-hub/water-dashboard';
import { Download, Calendar } from '@phosphor-icons/react';

export default function ImpactHubPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Impact Hub</h1>
          <p className="text-neutral-500">Track your environmental impact and sustainability metrics</p>
        </div>
        <Button variant="outline" className="gap-2 rounded-full">
          <Download className="h-4 w-4" />
          Export Report
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-neutral-100 p-1 rounded-full">
          <TabsTrigger value="overview" className="rounded-full">Overview</TabsTrigger>
          <TabsTrigger value="recycling" className="rounded-full">Recycling</TabsTrigger>
          <TabsTrigger value="carbon" className="rounded-full">Carbon</TabsTrigger>
          <TabsTrigger value="water" className="rounded-full">Water</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <ImpactMetrics />
            <SustainabilityChart />
          </div>
        </TabsContent>

        <TabsContent value="recycling">
          <RecyclingDashboard />
        </TabsContent>

        <TabsContent value="carbon">
          <CarbonDashboard />
        </TabsContent>

        <TabsContent value="water">
          <WaterDashboard />
        </TabsContent>
      </Tabs>
    </div>
  );
}