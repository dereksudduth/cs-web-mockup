'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

export function NotificationsTab() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    serviceUpdates: true,
    securityAlerts: true,
    marketingEmails: false,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="font-medium">Email Notifications</div>
              <div className="text-sm text-neutral-500">Receive email updates</div>
            </div>
            <Switch
              checked={notifications.email}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({ ...prev, email: checked }))
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="font-medium">Push Notifications</div>
              <div className="text-sm text-neutral-500">Receive push notifications</div>
            </div>
            <Switch
              checked={notifications.push}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({ ...prev, push: checked }))
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="font-medium">SMS Notifications</div>
              <div className="text-sm text-neutral-500">Receive text messages</div>
            </div>
            <Switch
              checked={notifications.sms}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({ ...prev, sms: checked }))
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}