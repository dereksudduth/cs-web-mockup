'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ROLE_PERMISSIONS = {
  'location-manager': [
    { id: 'approve_requests', name: 'Approve Service Requests', description: 'Can approve or deny service requests' },
    { id: 'modify_settings', name: 'Modify Location Settings', description: 'Can modify location-specific settings' },
    { id: 'view_analytics', name: 'View Analytics', description: 'Can view location analytics and reports' },
    { id: 'manage_contacts', name: 'Manage Contacts', description: 'Can manage location contacts' },
  ],
  'vendor': [
    { id: 'view_requests', name: 'View Assigned Requests', description: 'Can view assigned service requests' },
    { id: 'update_status', name: 'Update Request Status', description: 'Can update request status and add notes' },
    { id: 'manage_schedule', name: 'Manage Schedule', description: 'Can manage availability and schedule' },
  ],
  'staff': [
    { id: 'create_requests', name: 'Create Requests', description: 'Can create new service requests' },
    { id: 'view_requests', name: 'View Requests', description: 'Can view service requests' },
    { id: 'basic_reports', name: 'Basic Reports', description: 'Can view basic reports' },
  ],
};

export function UserPermissions() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="location-manager" className="space-y-6">
        <TabsList>
          <TabsTrigger value="location-manager">Location Managers</TabsTrigger>
          <TabsTrigger value="vendor">Vendors</TabsTrigger>
          <TabsTrigger value="staff">Staff</TabsTrigger>
        </TabsList>

        {Object.entries(ROLE_PERMISSIONS).map(([role, permissions]) => (
          <TabsContent key={role} value={role}>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {permissions.map((permission) => (
                    <div key={permission.id} className="flex items-start justify-between space-x-4">
                      <div>
                        <Label className="text-base">{permission.name}</Label>
                        <p className="text-sm text-neutral-500">{permission.description}</p>
                      </div>
                      <Switch />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}