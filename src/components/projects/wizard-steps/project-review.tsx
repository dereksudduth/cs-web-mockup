'use client';

import { Card } from '@/components/ui/card';
import { LocationMap } from '@/components/maps/location-map';
import { Buildings, Calendar, MapPin, Package, FileText, Clock } from '@phosphor-icons/react';
import { SERVICE_TYPES } from '@/lib/data/service-types';

interface ProjectReviewProps {
  data: {
    basicInfo: {
      name: string;
      client: string;
      description: string;
      startDate?: Date;
      endDate?: Date;
    };
    locations: any[];
    requirements: {
      services: string[];
      specialInstructions: string;
      photos: File[];
    };
    quote: {
      budget: string;
      timeline: string;
      additionalNotes: string;
    };
  };
}

export function ProjectReview({ data }: ProjectReviewProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Review Project Details</h3>
        <p className="text-sm text-neutral-500">
          Review all project information before submission
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-6">
          <h4 className="text-sm font-medium flex items-center gap-2 mb-4">
            <FileText className="h-4 w-4" />
            Basic Information
          </h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <div className="text-sm text-neutral-500">Project Name</div>
              <div className="font-medium">{data.basicInfo.name}</div>
            </div>
            <div>
              <div className="text-sm text-neutral-500">Client</div>
              <div className="font-medium">{data.basicInfo.client}</div>
            </div>
            <div className="sm:col-span-2">
              <div className="text-sm text-neutral-500">Description</div>
              <div className="text-sm">{data.basicInfo.description}</div>
            </div>
            <div>
              <div className="text-sm text-neutral-500">Start Date</div>
              <div className="font-medium">
                {data.basicInfo.startDate?.toLocaleDateString()}
              </div>
            </div>
            <div>
              <div className="text-sm text-neutral-500">End Date</div>
              <div className="font-medium">
                {data.basicInfo.endDate?.toLocaleDateString()}
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h4 className="text-sm font-medium flex items-center gap-2 mb-4">
            <MapPin className="h-4 w-4" />
            Locations ({data.locations.length})
          </h4>
          <LocationMap
            locations={data.locations.map(loc => ({
              id: loc.id,
              name: loc.name,
              position: loc.position,
              status: 'Active'
            }))}
            className="w-full h-[300px] rounded-lg border border-neutral-200"
          />
        </Card>

        <Card className="p-6">
          <h4 className="text-sm font-medium flex items-center gap-2 mb-4">
            <Package className="h-4 w-4" />
            Requirements
          </h4>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-neutral-500 mb-2">Selected Services</div>
              <div className="flex flex-wrap gap-2">
                {data.requirements.services.map(serviceId => {
                  const service = SERVICE_TYPES.find(s => s.id === serviceId);
                  return service ? (
                    <span
                      key={serviceId}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800"
                    >
                      {service.name}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
            {data.requirements.specialInstructions && (
              <div>
                <div className="text-sm text-neutral-500 mb-2">Special Instructions</div>
                <div className="text-sm">{data.requirements.specialInstructions}</div>
              </div>
            )}
          </div>
        </Card>

        <Card className="p-6">
          <h4 className="text-sm font-medium flex items-center gap-2 mb-4">
            <Clock className="h-4 w-4" />
            Quote Details
          </h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <div className="text-sm text-neutral-500">Budget Range</div>
              <div className="font-medium">{data.quote.budget}</div>
            </div>
            <div>
              <div className="text-sm text-neutral-500">Timeline</div>
              <div className="font-medium">{data.quote.timeline} months</div>
            </div>
            {data.quote.additionalNotes && (
              <div className="sm:col-span-2">
                <div className="text-sm text-neutral-500">Additional Notes</div>
                <div className="text-sm">{data.quote.additionalNotes}</div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}