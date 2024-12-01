'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plug, ArrowSquareOut } from '@phosphor-icons/react';

interface CustomIntegrationCardProps {
  onSave: (data: { name: string; webhookUrl: string }) => void;
}

export function CustomIntegrationCard({ onSave }: CustomIntegrationCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plug className="h-5 w-5" />
          Custom Integration
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Integration Name</Label>
            <Input placeholder="Enter a name for your integration" />
          </div>

          <div className="space-y-2">
            <Label>Webhook URL</Label>
            <Input placeholder="https://your-domain.com/webhook" />
          </div>

          <div className="space-y-2">
            <Label>Event Types</Label>
            <div className="grid grid-cols-2 gap-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-neutral-300" />
                <span className="text-sm">Service Requests</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-neutral-300" />
                <span className="text-sm">Location Updates</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-neutral-300" />
                <span className="text-sm">Billing Events</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-neutral-300" />
                <span className="text-sm">System Alerts</span>
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <Button variant="outline" className="gap-2">
              View Documentation
              <ArrowSquareOut className="h-4 w-4" />
            </Button>
            <Button>Save Integration</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}