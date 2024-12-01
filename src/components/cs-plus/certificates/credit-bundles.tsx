'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TreeEvergreen, Leaf, Recycle, Star, Package } from '@phosphor-icons/react';

const BUNDLES = [
  {
    id: 'starter',
    name: 'Starter Bundle',
    description: 'Perfect for small businesses starting their sustainability journey',
    price: 499,
    savings: 15,
    credits: {
      carbon: 100,
      recycling: 50,
      reforestation: 25,
    },
    features: [
      'Carbon offset certificates',
      'Monthly impact reports',
      'Basic analytics dashboard',
      'Email support',
    ],
  },
  {
    id: 'business',
    name: 'Business Bundle',
    description: 'Comprehensive solution for medium-sized businesses',
    price: 999,
    savings: 25,
    credits: {
      carbon: 250,
      recycling: 150,
      reforestation: 100,
    },
    features: [
      'All Starter features',
      'ESG reporting tools',
      'API access',
      'Priority support',
      'Custom certificate branding',
    ],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise Bundle',
    description: 'Custom solution for large organizations',
    price: 2499,
    savings: 35,
    credits: {
      carbon: 1000,
      recycling: 500,
      reforestation: 250,
    },
    features: [
      'All Business features',
      'Dedicated account manager',
      'Custom analytics',
      'Regulatory compliance reports',
      'Integration support',
    ],
  },
];

export function CreditBundles() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Credit Bundles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            {BUNDLES.map((bundle) => (
              <Card key={bundle.id} className={`relative ${bundle.popular ? 'border-2 border-black' : ''}`}>
                {bundle.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-black text-white">
                      <Star className="h-3 w-3 mr-1" weight="fill" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold">{bundle.name}</h3>
                      <p className="text-sm text-neutral-500 mt-1">{bundle.description}</p>
                    </div>

                    <div>
                      <div className="text-3xl font-bold">${bundle.price}</div>
                      <div className="text-sm text-green-600">{bundle.savings}% savings</div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Leaf className="h-4 w-4 text-green-500" />
                        <span>{bundle.credits.carbon} Carbon Credits</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Recycle className="h-4 w-4 text-blue-500" />
                        <span>{bundle.credits.recycling} Recycling Credits</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TreeEvergreen className="h-4 w-4 text-emerald-500" />
                        <span>{bundle.credits.reforestation} Reforestation Credits</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-sm font-medium">Features</div>
                      {bundle.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <Package className="h-4 w-4 text-neutral-500" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button className="w-full">Get Started</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}