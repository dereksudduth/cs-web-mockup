'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download } from '@phosphor-icons/react';
import { RecyclingDashboard } from '@/components/cs-plus/recycling-dashboard';
import { CarbonDashboard } from '@/components/cs-plus/carbon-dashboard';
import { WaterDashboard } from '@/components/cs-plus/water-dashboard';
import { ImpactMetrics } from '@/components/cs-plus/metrics/impact-metrics';
import { SustainabilityChart } from '@/components/cs-plus/charts/sustainability-chart';
import { CertificateDashboard } from '@/components/cs-plus/certificates/certificate-dashboard';
import { CreditMarketplace } from '@/components/cs-plus/certificates/credit-marketplace';
import { CreditBundles } from '@/components/cs-plus/certificates/credit-bundles';
import { ESGDashboard } from '@/components/cs-plus/esg/esg-dashboard';

export default function CSPlusPage() {
  return (
    <div className="container mx-auto p-8 max-w-7xl space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">CS+</h1>
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
          <TabsTrigger value="certificates" className="rounded-full">Certificates</TabsTrigger>
          <TabsTrigger value="marketplace" className="rounded-full">Marketplace</TabsTrigger>
          <TabsTrigger value="bundles" className="rounded-full">Bundles</TabsTrigger>
          <TabsTrigger value="esg" className="rounded-full">ESG</TabsTrigger>
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

        <TabsContent value="certificates">
          <CertificateDashboard />
        </TabsContent>

        <TabsContent value="marketplace">
          <CreditMarketplace />
        </TabsContent>

        <TabsContent value="bundles">
          <CreditBundles />
        </TabsContent>

        <TabsContent value="esg">
          <ESGDashboard />
        </TabsContent>
      </Tabs>
    </div>
  );
}