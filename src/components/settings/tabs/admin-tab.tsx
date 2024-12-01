'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LocationManagerSettings } from '../admin/location-manager-settings';
import { UserPermissions } from '../admin/user-permissions';
import { SystemSettings } from '../admin/system-settings';

export function AdminTab() {
  const [selectedTab, setSelectedTab] = useState('location-managers');

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Administrative Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
            <TabsList>
              <TabsTrigger value="location-managers">Location Managers</TabsTrigger>
              <TabsTrigger value="permissions">User Permissions</TabsTrigger>
              <TabsTrigger value="system">System Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="location-managers">
              <LocationManagerSettings />
            </TabsContent>

            <TabsContent value="permissions">
              <UserPermissions />
            </TabsContent>

            <TabsContent value="system">
              <SystemSettings />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}