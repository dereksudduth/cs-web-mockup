'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProfileTab } from '@/components/settings/tabs/profile-tab';
import { SecurityTab } from '@/components/settings/tabs/security-tab';
import { NotificationsTab } from '@/components/settings/tabs/notifications-tab';
import { IntegrationsTab } from '@/components/settings/tabs/integrations-tab';
import { AdminTab } from '@/components/settings/tabs/admin-tab';
import { useAuthStore } from '@/lib/store/auth';

export default function SettingsPage() {
  const { user } = useAuthStore();
  const [selectedTab, setSelectedTab] = useState('profile');
  const isAdmin = user?.role === 'enterprise' || user?.permissions?.includes('manage_settings');

  return (
    <div className="container mx-auto p-8 max-w-7xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-neutral-500">Manage your account settings and preferences</p>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
        <TabsList className="bg-neutral-100 p-1 rounded-full">
          <TabsTrigger value="profile" className="rounded-full">Profile</TabsTrigger>
          <TabsTrigger value="security" className="rounded-full">Security</TabsTrigger>
          <TabsTrigger value="notifications" className="rounded-full">Notifications</TabsTrigger>
          <TabsTrigger value="integrations" className="rounded-full">Integrations</TabsTrigger>
          {isAdmin && (
            <TabsTrigger value="admin" className="rounded-full">Admin</TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="profile">
          <ProfileTab />
        </TabsContent>

        <TabsContent value="security">
          <SecurityTab />
        </TabsContent>

        <TabsContent value="notifications">
          <NotificationsTab />
        </TabsContent>

        <TabsContent value="integrations">
          <IntegrationsTab />
        </TabsContent>

        {isAdmin && (
          <TabsContent value="admin">
            <AdminTab />
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}