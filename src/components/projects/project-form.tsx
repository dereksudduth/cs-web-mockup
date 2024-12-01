```typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { DateTimePicker } from '@/components/service-request/datetime-picker';
import { LocationSelector } from '@/components/locations/location-selector';
import { useToast } from '@/components/ui/use-toast';

interface ProjectFormData {
  name: string;
  client: string;
  description: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  locations: any[];
}

interface ProjectFormProps {
  onSubmit: (data: ProjectFormData) => void;
  onCancel: () => void;
  initialData?: Partial<ProjectFormData>;
}

export function ProjectForm({ onSubmit, onCancel, initialData }: ProjectFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ProjectFormData>({
    name: initialData?.name || '',
    client: initialData?.client || '',
    description: initialData?.description || '',
    startDate: initialData?.startDate,
    endDate: initialData?.endDate,
    locations: initialData?.locations || [],
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.client || !formData.startDate || !formData.endDate) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (formData.startDate > formData.endDate) {
      toast({
        title: "Invalid Dates",
        description: "End date must be after start date",
        variant: "destructive",
      });
      return;
    }

    onSubmit(formData);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Project Name *</Label>
          <Input
            placeholder="Enter project name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label>Client *</Label>
          <Input
            placeholder="Enter client name"
            value={formData.client}
            onChange={(e) => setFormData({ ...formData, client: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea
            placeholder="Enter project description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="min-h-[100px]"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Start Date *</Label>
            <DateTimePicker
              date={formData.startDate}
              time=""
              onDateChange={(date) => setFormData({ ...formData, startDate: date })}
              onTimeChange={() => {}}
            />
          </div>

          <div className="space-y-2">
            <Label>End Date *</Label>
            <DateTimePicker
              date={formData.endDate}
              time=""
              onDateChange={(date) => setFormData({ ...formData, endDate: date })}
              onTimeChange={() => {}}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Locations</Label>
          <LocationSelector
            onSelect={(location) => 
              setFormData({ 
                ...formData, 
                locations: [...formData.locations, location] 
              })
            }
            selectedLocation={null}
            multiSelect={true}
          />
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>
          {initialData ? 'Update Project' : 'Create Project'}
        </Button>
      </div>
    </div>
  );
}
```