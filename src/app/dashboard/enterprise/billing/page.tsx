'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Receipt, Download } from '@phosphor-icons/react';

const INVOICES = [
  {
    id: 1,
    date: '2024-02-01',
    amount: 12500,
    status: 'Paid',
    description: 'Monthly Service - All Locations',
  },
  {
    id: 2,
    date: '2024-01-01',
    amount: 12500,
    status: 'Paid',
    description: 'Monthly Service - All Locations',
  },
  {
    id: 3,
    date: '2023-12-01',
    amount: 12500,
    status: 'Paid',
    description: 'Monthly Service - All Locations',
  },
];

export default function BillingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Billing</h1>
        <p className="text-muted-foreground">Manage your billing and invoices</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0">
            <div className="flex-1">
              <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
              <div className="text-2xl font-bold">$12,500.00</div>
            </div>
            <CreditCard className="h-6 w-6 text-neutral-500" />
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-y-0">
            <div className="flex-1">
              <CardTitle className="text-sm font-medium">Last Payment</CardTitle>
              <div className="text-2xl font-bold">$12,500.00</div>
            </div>
            <Receipt className="h-6 w-6 text-neutral-500" />
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-y-0">
            <div className="flex-1">
              <CardTitle className="text-sm font-medium">Payment Method</CardTitle>
              <div className="text-sm mt-1">•••• 4242</div>
            </div>
            <Button variant="outline" size="sm">
              Update
            </Button>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Invoices</CardTitle>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-neutral-200">
            {INVOICES.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
              >
                <div className="space-y-1">
                  <div className="font-medium">{invoice.description}</div>
                  <div className="text-sm text-neutral-500">
                    {new Date(invoice.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-medium">
                      ${(invoice.amount / 100).toFixed(2)}
                    </div>
                    <div className="text-sm text-green-600">{invoice.status}</div>
                  </div>
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