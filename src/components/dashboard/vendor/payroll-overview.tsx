'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, CurrencyDollar, Clock, Calendar } from '@phosphor-icons/react';

const PAYROLL_ENTRIES = [
  {
    id: 1,
    period: 'February 1-15, 2024',
    hours: 80,
    amount: 2400,
    status: 'Paid',
    date: '2024-02-15',
  },
  {
    id: 2,
    period: 'January 16-31, 2024',
    hours: 84,
    amount: 2520,
    status: 'Paid',
    date: '2024-01-31',
  },
  {
    id: 3,
    period: 'January 1-15, 2024',
    hours: 76,
    amount: 2280,
    status: 'Paid',
    date: '2024-01-15',
  },
];

export function PayrollOverview() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0">
            <div className="flex-1">
              <CardTitle className="text-sm font-medium">Current Period</CardTitle>
              <div className="text-2xl font-bold">82 hrs</div>
            </div>
            <Clock className="h-6 w-6 text-neutral-500" />
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-y-0">
            <div className="flex-1">
              <CardTitle className="text-sm font-medium">Next Payday</CardTitle>
              <div className="text-2xl font-bold">Feb 29</div>
            </div>
            <Calendar className="h-6 w-6 text-neutral-500" />
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-y-0">
            <div className="flex-1">
              <CardTitle className="text-sm font-medium">YTD Earnings</CardTitle>
              <div className="text-2xl font-bold">$7,200</div>
            </div>
            <CurrencyDollar className="h-6 w-6 text-neutral-500" />
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payroll History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-neutral-200">
            {PAYROLL_ENTRIES.map((entry) => (
              <div
                key={entry.id}
                className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
              >
                <div className="space-y-1">
                  <div className="font-medium">{entry.period}</div>
                  <div className="flex items-center gap-4 text-sm text-neutral-500">
                    <span>{entry.hours} hours</span>
                    <span>${entry.amount.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-green-600">{entry.status}</span>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}