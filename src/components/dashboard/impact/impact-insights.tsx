'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUp, Download, Leaf, Recycle, Drop } from '@phosphor-icons/react';

const INSIGHTS = [
  {
    id: 1,
    title: 'Recycling Rate Increased',
    message: 'Your recycling rate has improved by 15% this month. Keep up the great work!',
    impact: '+15%',
    trend: 'up',
    icon: Recycle,
    color: 'text-green-500 bg-green-50',
  },
  {
    id: 2,
    title: 'Water Usage Optimization',
    message: 'New water conservation measures have saved 50,000 gallons this quarter.',
    impact: '50k gal',
    trend: 'up',
    icon: Drop,
    color: 'text-blue-500 bg-blue-50',
  },
  {
    id: 3,
    title: 'Carbon Footprint Reduction',
    message: 'Your carbon emissions are down 12% compared to last quarter.',
    impact: '-12%',
    trend: 'up',
    icon: Leaf,
    color: 'text-indigo-500 bg-indigo-50',
  },
];

export function ImpactInsights() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Impact Insights</CardTitle>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          Export Report
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {INSIGHTS.map((insight) => (
            <div
              key={insight.id}
              className="flex items-start gap-4 p-4 rounded-lg border border-neutral-200"
            >
              <div className={`rounded-full p-2 ${insight.color}`}>
                <insight.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="font-medium">{insight.title}</div>
                <p className="text-sm text-neutral-500">{insight.message}</p>
              </div>
              <div className="flex items-center gap-1 text-green-500">
                <ArrowUp className="h-4 w-4" />
                {insight.impact}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}