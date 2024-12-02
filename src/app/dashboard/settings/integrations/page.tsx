'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ApiKeyList } from '@/components/settings/api-keys/api-key-list';
import { CustomIntegrationCard } from '@/components/settings/integrations/custom-integration-card';
import { useSearchParams, useRouter } from 'next/navigation';
import { 
  Key, 
  Plug, 
  EnvelopeSimple,
  Phone,
  Buildings,
  CreditCard,
  CaretRight,
  Cloud,
  Database,
  Book,
  Globe,
  ChartLine,
  ArrowSquareOut,
  Code
} from '@phosphor-icons/react';

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

const USAGE_METRICS = [
  { name: 'API Calls', value: '1.2M', change: '+12%' },
  { name: 'Success Rate', value: '99.9%', change: '+0.5%' },
  { name: 'Avg Response Time', value: '235ms', change: '-15%' },
  { name: 'Error Rate', value: '0.1%', change: '-0.3%' },
];

export default function IntegrationsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tab = searchParams.get('tab') || 'integrations';

  const handleTabChange = (value: string) => {
    router.push(`?tab=${value}`);
  };

  const handleIntegrationClick = (integration: typeof INTEGRATIONS[0]) => {
    if (integration.href) {
      router.push(integration.href);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">API & Integrations</h1>
        <p className="text-neutral-500">Manage your API keys and service integrations</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {USAGE_METRICS.map((metric) => (
          <Card key={metric.name}>
            <CardContent className="p-6">
              <div className="space-y-1">
                <div className="text-sm text-neutral-500">{metric.name}</div>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className={`text-sm ${
                  metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {metric.change} from last month
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs value={tab} onValueChange={handleTabChange} className="space-y-6">
        <TabsList className="bg-neutral-100 p-1 rounded-full">
          <TabsTrigger value="integrations" className="rounded-full">Service Integrations</TabsTrigger>
          <TabsTrigger value="api" className="rounded-full">API Keys</TabsTrigger>
          <TabsTrigger value="custom" className="rounded-full">Custom Integration</TabsTrigger>
        </TabsList>

        <TabsContent value="integrations">
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
        </TabsContent>

        <TabsContent value="api">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <ApiKeyList />

              <Card>
                <CardHeader>
                  <CardTitle>Documentation & Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <a
                      href="#"
                      className="flex items-center gap-4 p-4 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors"
                    >
                      <div className="h-10 w-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                        <Book className="h-5 w-5 text-neutral-500" />
                      </div>
                      <div>
                        <div className="font-medium">API Documentation</div>
                        <div className="text-sm text-neutral-500">
                          Comprehensive API reference and guides
                        </div>
                      </div>
                      <ArrowSquareOut className="h-4 w-4 ml-auto" />
                    </a>

                    <a
                      href="#"
                      className="flex items-center gap-4 p-4 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors"
                    >
                      <div className="h-10 w-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                        <Globe className="h-5 w-5 text-neutral-500" />
                      </div>
                      <div>
                        <div className="font-medium">Developer Portal</div>
                        <div className="text-sm text-neutral-500">
                          Access SDKs, tools, and examples
                        </div>
                      </div>
                      <ArrowSquareOut className="h-4 w-4 ml-auto" />
                    </a>

                    <a
                      href="#"
                      className="flex items-center gap-4 p-4 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors"
                    >
                      <div className="h-10 w-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                        <ChartLine className="h-5 w-5 text-neutral-500" />
                      </div>
                      <div>
                        <div className="font-medium">Usage Analytics</div>
                        <div className="text-sm text-neutral-500">
                          Monitor API usage and performance
                        </div>
                      </div>
                      <ArrowSquareOut className="h-4 w-4 ml-auto" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Webhook Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-neutral-500">
                    Test your webhook endpoints with sample payloads for different event types.
                  </p>
                  <Button variant="outline" className="w-full">
                    Open Webhook Tester
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="custom">
          <CustomIntegrationCard onSave={() => {}} />
        </TabsContent>
      </Tabs>
    </div>
  );
}