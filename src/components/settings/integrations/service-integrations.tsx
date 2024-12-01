'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Database, CreditCard, Cloud, Plug } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

const INTEGRATIONS = [
  {
    id: 'api',
    name: 'API Integration',
    description: 'Direct API access and key management',
    status: 'available',
    icon: Code,
    href: '?tab=api'
  },
  {
    id: 'netsuite',
    name: 'NetSuite',
    description: 'ERP, financials, and accounting integration',
    status: 'connected',
    icon: Database,
  },
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    description: 'Financial management and accounting',
    status: 'available',
    icon: CreditCard,
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    description: 'CRM and customer management',
    status: 'available',
    icon: Cloud,
  },
  {
    id: 'servicenow',
    name: 'ServiceNow',
    description: 'IT service management',
    status: 'available',
    icon: Plug,
  },
];

export function ServiceIntegrations() {
  const router = useRouter();

  const handleIntegrationClick = (integration: typeof INTEGRATIONS[0]) => {
    if (integration.href) {
      router.push(integration.href);
    }
  };

  return (
    <div className="grid gap-4">
      {INTEGRATIONS.map((integration) => (
        <Card key={integration.id}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                  <integration.icon className="h-5 w-5 text-neutral-500" />
                </div>
                <div>
                  <div className="font-medium">{integration.name}</div>
                  <div className="text-sm text-neutral-500">{integration.description}</div>
                </div>
              </div>
              <Button
                variant={integration.status === 'connected' ? 'outline' : 'default'}
                className="rounded-full"
                onClick={() => handleIntegrationClick(integration)}
              >
                {integration.status === 'connected' ? 'Configure' : 'Connect'}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}