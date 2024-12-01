'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SustainabilityChart } from '@/components/analytics/sustainability-chart';
import { ImpactMetrics } from '@/components/analytics/impact-metrics';
import { Download, Calendar } from '@phosphor-icons/react';

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto p-8 max-w-7xl space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Analytics</h1>
          <p className="text-neutral-500">Track your environmental impact and sustainability metrics</p>
        </div>
        <Button variant="outline" className="gap-2 rounded-full">
          <Download className="h-4 w-4" />
          Export Report
        </Button>
      </div>

      <ImpactMetrics />

      <div className="grid gap-6">
        <SustainabilityChart />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Carbon Footprint</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add carbon footprint visualization */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recycling Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add recycling analytics visualization */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}