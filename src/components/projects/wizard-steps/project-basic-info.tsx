'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { DateTimePicker } from '@/components/service-request/datetime-picker';

interface ProjectBasicInfoProps {
  data: {
    name: string;
    client: string;
    description: string;
    startDate?: Date;
    endDate?: Date;
  };
  onUpdate: (data: Partial<ProjectBasicInfoProps['data']>) => void;
}

export function ProjectBasicInfo({ data, onUpdate }: ProjectBasicInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Basic Information</h3>
        <p className="text-sm text-neutral-500">
          Provide the basic details about your project
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Project Name *</Label>
          <Input
            placeholder="Enter project name"
            value={data.name}
            onChange={(e) => onUpdate({ name: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label>Client *</Label>
          <Input
            placeholder="Enter client name"
            value={data.client}
            onChange={(e) => onUpdate({ client: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea
            placeholder="Enter project description"
            value={data.description}
            onChange={(e) => onUpdate({ description: e.target.value })}
            className="min-h-[100px]"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Target Start Date *</Label>
            <DateTimePicker
              date={data.startDate}
              time=""
              onDateChange={(date) => onUpdate({ startDate: date })}
              onTimeChange={() => {}}
            />
          </div>

          <div className="space-y-2">
            <Label>Target End Date *</Label>
            <DateTimePicker
              date={data.endDate}
              time=""
              onDateChange={(date) => onUpdate({ endDate: date })}
              onTimeChange={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}