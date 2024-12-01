'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LocationSelector } from '@/components/locations/location-selector';
import { DateTimePicker } from '@/components/service-request/datetime-picker';

interface NewProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewProjectDialog({ open, onOpenChange }: NewProjectDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    client: '',
    description: '',
    startDate: '',
    endDate: '',
    locations: [],
  });

  const handleSubmit = () => {
    // Handle project creation
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="details" className="space-y-4">
          <TabsList>
            <TabsTrigger value="details">Project Details</TabsTrigger>
            <TabsTrigger value="locations">Locations</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label>Project Name</Label>
                <Input
                  placeholder="Enter project name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <Label>Client</Label>
                <Input
                  placeholder="Enter client name"
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                />
              </div>

              <div>
                <Label>Description</Label>
                <Input
                  placeholder="Enter project description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="locations">
            <LocationSelector
              onSelect={() => {}}
              selectedLocation={null}
            />
          </TabsContent>

          <TabsContent value="schedule" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label>Start Date</Label>
                <DateTimePicker
                  date={formData.startDate ? new Date(formData.startDate) : undefined}
                  time=""
                  onDateChange={(date) =>
                    setFormData({ ...formData, startDate: date ? date.toISOString() : '' })
                  }
                  onTimeChange={() => {}}
                />
              </div>

              <div>
                <Label>End Date</Label>
                <DateTimePicker
                  date={formData.endDate ? new Date(formData.endDate) : undefined}
                  time=""
                  onDateChange={(date) =>
                    setFormData({ ...formData, endDate: date ? date.toISOString() : '' })
                  }
                  onTimeChange={() => {}}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-3 mt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            Create Project
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}