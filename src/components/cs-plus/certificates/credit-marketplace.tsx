'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TreeEvergreen, Leaf, Recycle } from '@phosphor-icons/react';

const CREDIT_TYPES = [
  {
    id: 'carbon',
    name: 'Carbon Offset Credits',
    description: 'Offset your carbon footprint',
    price: 25,
    icon: Leaf,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    id: 'recycling',
    name: 'Recycling Credits',
    description: 'Support recycling initiatives',
    price: 15,
    icon: Recycle,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    id: 'reforestation',
    name: 'Reforestation Credits',
    description: 'Contribute to tree planting',
    price: 20,
    icon: TreeEvergreen,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
];

export function CreditMarketplace() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Credit Marketplace</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            {CREDIT_TYPES.map((credit) => {
              const Icon = credit.icon;
              return (
                <Card key={credit.id}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className={`rounded-full p-3 ${credit.bgColor}`}>
                          <Icon className={`h-6 w-6 ${credit.color}`} weight="fill" />
                        </div>
                        <div>
                          <div className="font-medium">{credit.name}</div>
                          <div className="text-sm text-neutral-500">{credit.description}</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Amount</Label>
                        <Input type="number" min="1" placeholder="Enter amount" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-neutral-500">Price per credit</div>
                          <div className="text-lg font-bold">${credit.price}</div>
                        </div>
                        <Button>Purchase</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}