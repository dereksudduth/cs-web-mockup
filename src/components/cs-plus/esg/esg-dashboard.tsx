'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EnvironmentalMetrics } from './environmental-metrics';
import { Download, FileText, Share } from '@phosphor-icons/react';

export function ESGDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Environmental Impact</h2>
          <p className="text-neutral-500">Track and report your environmental metrics</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Share className="h-4 w-4" />
            Share Report
          </Button>
          <Button variant="outline" className="gap-2">
            <FileText className="h-4 w-4" />
            Generate PDF
          </Button>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Export Data
          </Button>
        </div>
      </div>

      <EnvironmentalMetrics />
    </div>
  );
}