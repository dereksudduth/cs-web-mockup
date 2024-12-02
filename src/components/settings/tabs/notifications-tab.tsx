'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

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
    <div className="grid gap-4">
      {[
        {
          id: 'email',
          title: 'Email Notifications',
          description: 'Get updates and alerts via email',
          checked: notifications.email
        },
        {
          id: 'push',
          title: 'Push Notifications',
          description: 'Receive notifications in your browser',
          checked: notifications.push
        },
        {
          id: 'sms',
          title: 'SMS Notifications',
          description: 'Get important updates via text message',
          checked: notifications.sms
        },
        {
          id: 'serviceUpdates',
          title: 'Service Updates',
          description: 'Updates about your service requests and schedules',
          checked: notifications.serviceUpdates
        },
        {
          id: 'securityAlerts',
          title: 'Security Alerts',
          description: 'Important security notifications and alerts',
          checked: notifications.securityAlerts
        },
        {
          id: 'marketingEmails',
          title: 'Marketing Emails',
          description: 'Receive updates about new features and promotions',
          checked: notifications.marketingEmails
        }
      ].map((item) => (
        <Card key={item.id}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor={item.id} className="font-medium">{item.title}</Label>
                <p className="text-sm text-neutral-500">{item.description}</p>
              </div>
              <Switch
                id={item.id}
                checked={item.checked}
                onCheckedChange={(checked) =>
                  setNotifications((prev) => ({ ...prev, [item.id]: checked }))
                }
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}