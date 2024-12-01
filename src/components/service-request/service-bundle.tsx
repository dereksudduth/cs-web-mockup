'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Package, Plus } from '@phosphor-icons/react';
import { SERVICE_TYPES } from '@/lib/data/service-types';

interface ServiceBundleProps {
  selectedServices: string[];
  onServicesChange: (services: string[]) => void;
}

const BUNDLES = [
  {
    id: 'basic',
    name: 'Basic Bundle',
    services: ['waste', 'recycling'],
    discount: 10,
  },
  {
    id: 'complete',
    name: 'Complete Bundle',
    services: ['waste', 'recycling', 'bulk'],
    discount: 15,
  },
  {
    id: 'enterprise',
    name: 'Enterprise Bundle',
    services: ['waste', 'recycling', 'hazardous', 'bulk'],
    discount: 20,
  },
];

export function ServiceBundle({
  selectedServices,
  onServicesChange,
}: ServiceBundleProps) {
  const [selectedBundle, setSelectedBundle] = useState<string | null>(null);

  const handleBundleSelect = (bundleId: string) => {
    const bundle = BUNDLES.find((b) => b.id === bundleId);
    if (bundle) {
      setSelectedBundle(bundleId);
      onServicesChange(bundle.services);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {BUNDLES.map((bundle) => (
          <Card
            key={bundle.id}
            className={`relative p-6 cursor-pointer transition-all ${
              selectedBundle === bundle.id
                ? 'ring-2 ring-black ring-offset-2'
                : 'hover:border-neutral-300'
            }`}
            onClick={() => handleBundleSelect(bundle.id)}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{bundle.name}</h3>
                <span className="text-sm text-green-600">
                  {bundle.discount}% off
                </span>
              </div>
              
              <div className="space-y-2">
                {bundle.services.map((serviceId) => {
                  const service = SERVICE_TYPES.find((s) => s.id === serviceId);
                  return (
                    <div key={serviceId} className="flex items-center gap-2 text-sm">
                      <Package className="h-4 w-4 text-neutral-500" />
                      {service?.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm text-neutral-600">
        <Plus className="h-4 w-4" />
        <span>Or select individual services below</span>
      </div>
    </div>
  );
}