'use client';

import { Check } from '@phosphor-icons/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PLANS = [
  {
    name: 'Basic',
    price: 29,
    description: 'Perfect for single-family homes',
    features: [
      'Weekly waste collection',
      'Basic recycling service',
      'Email support',
      'Mobile app access',
    ],
  },
  {
    name: 'Premium',
    price: 49,
    description: 'Ideal for eco-conscious households',
    features: [
      'Twice-weekly waste collection',
      'Advanced recycling sorting',
      'Priority support',
      'Detailed waste analytics',
      'Sustainability reports',
    ],
  },
  {
    name: 'Ultimate',
    price: 89,
    description: 'Complete waste management solution',
    features: [
      'Custom collection schedule',
      'All recycling services',
      '24/7 premium support',
      'Advanced analytics dashboard',
      'Sustainability consulting',
      'Special waste handling',
    ],
  },
];

export function MembershipPlans() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Available Plans</h2>
        <p className="text-muted-foreground">Choose the plan that best fits your needs.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-3xl font-bold mb-6">
                ${plan.price}
                <span className="text-sm font-normal text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Select Plan</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}