"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BillingProfiles } from "@/components/billing/billing-profiles";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Receipt, Download } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

const INVOICES = [
  {
    id: 1,
    date: "2024-02-01",
    amount: 12500,
    status: "Paid",
    description: "Monthly Service - All Locations",
  },
  {
    id: 2,
    date: "2024-01-01",
    amount: 12500,
    status: "Paid",
    description: "Monthly Service - All Locations",
  },
  {
    id: 3,
    date: "2023-12-01",
    amount: 12500,
    status: "Paid",
    description: "Monthly Service - All Locations",
  },
];

export default function BillingPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Billing</h1>
          <p className="text-neutral-500">
            Manage billing profiles and view invoices
          </p>
        </div>
        <Button variant="outline" className="gap-2 rounded-full">
          <Download className="h-4 w-4" />
          Export Invoices
        </Button>
      </div>

      <Tabs defaultValue="profiles" className="space-y-6">
        <TabsList className="bg-muted rounded-full">
          <TabsTrigger value="profiles" className="rounded-full">
            Billing Profiles
          </TabsTrigger>
          <TabsTrigger value="invoices" className="rounded-full">
            Invoices
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profiles">
          <BillingProfiles />
        </TabsContent>

        <TabsContent value="invoices">
          <div className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center space-y-0">
                  <div className="flex-1">
                    <CardTitle className="text-sm font-medium">
                      Current Balance
                    </CardTitle>
                    <div className="text-2xl font-bold">$12,500.00</div>
                  </div>
                  <CreditCard className="h-6 w-6 text-neutral-500" />
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center space-y-0">
                  <div className="flex-1">
                    <CardTitle className="text-sm font-medium">
                      Last Payment
                    </CardTitle>
                    <div className="text-2xl font-bold">$12,500.00</div>
                  </div>
                  <Receipt className="h-6 w-6 text-neutral-500" />
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center space-y-0">
                  <div className="flex-1">
                    <CardTitle className="text-sm font-medium">
                      Next Invoice
                    </CardTitle>
                    <div className="text-2xl font-bold">Mar 1, 2024</div>
                  </div>
                  <Receipt className="h-6 w-6 text-neutral-500" />
                </CardHeader>
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
                        <div className="text-sm text-green-600 rounded-full px-2 py-1 bg-green-100">
                          {invoice.status}
                        </div>
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
