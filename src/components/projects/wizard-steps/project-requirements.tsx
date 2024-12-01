'use client';

import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ServiceCard } from '@/components/service-request/service-card';
import { PhotoUpload } from '@/components/service-request/photo-upload';
import { SERVICE_TYPES } from '@/lib/data/service-types';

interface ProjectRequirementsProps {
  data: {
    services: string[];
    specialInstructions: string;
    photos: File[];
  };
  onUpdate: (data: Partial<ProjectRequirementsProps['data']>) => void;
}

export function ProjectRequirements({ data, onUpdate }: ProjectRequirementsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Project Requirements</h3>
        <p className="text-sm text-neutral-500">
          Define the services and requirements for this project
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <Label>Services Required</Label>
          <div className="grid gap-4 sm:grid-cols-2">
            {SERVICE_TYPES.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                selected={data.services.includes(service.id)}
                onSelect={() => {
                  const services = data.services.includes(service.id)
                    ? data.services.filter(s => s !== service.id)
                    : [...data.services, service.id];
                  onUpdate({ services });
                }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Label>Special Instructions</Label>
          <Textarea
            placeholder="Enter any special instructions or requirements..."
            value={data.specialInstructions}
            onChange={(e) => onUpdate({ specialInstructions: e.target.value })}
            className="min-h-[120px]"
          />
        </div>

        <div className="space-y-4">
          <Label>Project Photos</Label>
          <PhotoUpload
            images={data.photos}
            onChange={(files) => onUpdate({ photos: files })}
            onRemove={(index) =>
              onUpdate({
                photos: data.photos.filter((_, i) => i !== index)
              })
            }
          />
        </div>
      </div>
    </div>
  );
}