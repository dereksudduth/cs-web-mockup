'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export function SystemSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Request Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-x-4">
            <div>
              <Label>Require Approval</Label>
              <p className="text-sm text-neutral-500">Require manager approval for all service requests</p>
            </div>
            <Switch />
          </div>

          <div className="space-y-2">
            <Label>Default Response Time</Label>
            <Select defaultValue="4">
              <SelectTrigger>
                <SelectValue placeholder="Select response time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2">2 hours</SelectItem>
                <SelectItem value="4">4 hours</SelectItem>
                <SelectItem value="8">8 hours</SelectItem>
                <SelectItem value="24">24 hours</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Auto-assignment Radius (miles)</Label>
            <Input type="number" defaultValue="25" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-x-4">
            <div>
              <Label>Email Notifications</Label>
              <p className="text-sm text-neutral-500">Send email notifications for important updates</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between space-x-4">
            <div>
              <Label>SMS Notifications</Label>
              <p className="text-sm text-neutral-500">Send SMS notifications for critical alerts</p>
            </div>
            <Switch />
          </div>

          <div className="space-y-2">
            <Label>Daily Report Time</Label>
            <Select defaultValue="09:00">
              <SelectTrigger>
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="06:00">6:00 AM</SelectItem>
                <SelectItem value="09:00">9:00 AM</SelectItem>
                <SelectItem value="12:00">12:00 PM</SelectItem>
                <SelectItem value="15:00">3:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}