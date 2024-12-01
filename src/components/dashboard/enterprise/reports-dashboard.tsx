'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartLineUp, Download, Calendar } from '@phosphor-icons/react';

const REPORTS = [
  {
    id: 1,
    name: 'Monthly Waste Analysis',
    type: 'Analytics',
    date: '2024-02-01',
    size: '2.4 MB',
  },
  {
    id: 2,
    name: 'Quarterly Sustainability Report',
    type: 'Sustainability',
    date: '2024-01-15',
    size: '4.1 MB',
  },
  {
    id: 3,
    name: 'Annual Environmental Impact',
    type: 'Environmental',
    date: '2023-12-31',
    size: '8.7 MB',
  },
];

export function ReportsDashboard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Generated Reports</CardTitle>
        <Button size="sm" className="gap-2">
          <ChartLineUp className="h-4 w-4" />
          Generate Report
        </Button>
      </CardHeader>
      <CardContent>
        <div className="divide-y divide-neutral-200">
          {REPORTS.map((report) => (
            <div
              key={report.id}
              className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
            >
              <div className="space-y-1">
                <div className="font-medium">{report.name}</div>
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <Calendar className="h-4 w-4" />
                  {new Date(report.date).toLocaleDateString()}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-neutral-500">{report.size}</span>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}