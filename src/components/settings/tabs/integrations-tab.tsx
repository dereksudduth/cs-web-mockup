'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ServiceIntegrations } from '../integrations/service-integrations';
import { ApiKeysSection } from '../integrations/api-keys-section';
import { CustomIntegrationCard } from '../integrations/custom-integration-card';

export function IntegrationsTab() {
  const [selectedTab, setSelectedTab] = useState('integrations');

  return (
    <div className="space-y-6">
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="integrations">Service Integrations</TabsTrigger>
          <TabsTrigger value="api">API Keys</TabsTrigger>
          <TabsTrigger value="custom">Custom Integration</TabsTrigger>
        </TabsList>

        <TabsContent value="integrations">
          <ServiceIntegrations />
        </TabsContent>

        <TabsContent value="api">
          <ApiKeysSection />
        </TabsContent>

        <TabsContent value="custom">
          <CustomIntegrationCard onSave={() => {}} />
        </TabsContent>
      </Tabs>
    </div>
  );
}