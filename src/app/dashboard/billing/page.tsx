'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BillingProfiles } from '@/components/billing/billing-profiles';
import { Card } from '@/components/ui/card';
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
    <div className="container mx-auto p-8 max-w-7xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Billing</h1>
        <p className="text-neutral-500">Manage billing profiles and view invoices</p>
      </div>

      <Tabs defaultValue="profiles" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profiles">Billing Profiles</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
        </TabsList>

        <TabsContent value="profiles">
          <BillingProfiles />
        </TabsContent>

        <TabsContent value="invoices">
          <div className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-neutral-500">Current Balance</div>
                    <div className="text-2xl font-bold">$12,500.00</div>
                  </div>
                  <CreditCard className="h-6 w-6 text-neutral-500" />
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-neutral-500">Last Payment</div>
                    <div className="text-2xl font-bold">$12,500.00</div>
                  </div>
                  <Receipt className="h-6 w-6 text-neutral-500" />
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-neutral-500">Next Invoice</div>
                    <div className="text-2xl font-bold">Mar 1, 2024</div>
                  </div>
                  <Receipt className="h-6 w-6 text-neutral-500" />
                </div>
              </Card>
            </div>

            <Card>
              <div className="p-6 border-b border-neutral-200">
                <h3 className="font-medium">Recent Invoices</h3>
              </div>
              <div className="divide-y divide-neutral-200">
                {INVOICES.map((invoice) => (
                  <div
                    key={invoice.id}
                    className="flex items-center justify-between p-6"
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
                      <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                        <Download className="h-4 w-4 text-neutral-500" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}