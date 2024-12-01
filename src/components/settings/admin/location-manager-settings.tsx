'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Buildings, Plus, PencilSimple, Trash } from '@phosphor-icons/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { LocationSelector } from '@/components/locations/location-selector';

interface LocationManager {
  id: string;
  name: string;
  email: string;
  locations: string[];
  canApproveRequests: boolean;
  canModifySettings: boolean;
}

const MOCK_MANAGERS: LocationManager[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    locations: ['Manhattan Office Complex', 'Boston Tech Center'],
    canApproveRequests: true,
    canModifySettings: false,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    locations: ['SF Innovation Hub'],
    canApproveRequests: true,
    canModifySettings: true,
  },
];

export function LocationManagerSettings() {
  const [managers, setManagers] = useState<LocationManager[]>(MOCK_MANAGERS);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    canApproveRequests: false,
    canModifySettings: false,
  });

  const handleSubmit = () => {
    const newManager: LocationManager = {
      id: `${Date.now()}`,
      ...formData,
      locations: selectedLocations,
    };
    setManagers([...managers, newManager]);
    setIsAddDialogOpen(false);
    setSelectedLocations([]);
    setFormData({
      name: '',
      email: '',
      canApproveRequests: false,
      canModifySettings: false,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">Location Managers</h3>
          <p className="text-sm text-neutral-500">Manage location-specific administrators</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Manager
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Location Manager</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Name</Label>
                <Input 
                  placeholder="Enter manager's name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input 
                  type="email" 
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Assigned Locations</Label>
                <LocationSelector
                  onSelect={(location) => {
                    setSelectedLocations([...selectedLocations, location.name]);
                  }}
                  selectedLocation={null}
                  multiSelect
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Can Approve Requests</Label>
                  <Switch 
                    checked={formData.canApproveRequests}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, canApproveRequests: checked })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Can Modify Settings</Label>
                  <Switch 
                    checked={formData.canModifySettings}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, canModifySettings: checked })
                    }
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit}>Add Manager</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Locations</TableHead>
              <TableHead>Permissions</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {managers.map((manager) => (
              <TableRow key={manager.id}>
                <TableCell className="font-medium">{manager.name}</TableCell>
                <TableCell>{manager.email}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {manager.locations.map((location) => (
                      <span
                        key={location}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-100 text-xs"
                      >
                        <Buildings className="h-3 w-3" />
                        {location}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    {manager.canApproveRequests && (
                      <span className="text-xs text-green-600">Can approve requests</span>
                    )}
                    {manager.canModifySettings && (
                      <span className="text-xs text-blue-600">Can modify settings</span>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <PencilSimple className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500 hover:text-red-600">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}