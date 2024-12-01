'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, MapPin, Star, Phone } from '@phosphor-icons/react';

interface Vendor {
  id: string;
  name: string;
  location: string;
  rating: number;
  completedJobs: number;
  phone: string;
}

const MOCK_VENDORS: Vendor[] = [
  {
    id: 'V1',
    name: 'ABC Waste Solutions',
    location: 'New York, NY',
    rating: 4.8,
    completedJobs: 156,
    phone: '(555) 123-4567',
  },
  {
    id: 'V2',
    name: 'Green Disposal Inc',
    location: 'Boston, MA',
    rating: 4.7,
    completedJobs: 98,
    phone: '(555) 234-5678',
  },
  {
    id: 'V3',
    name: 'EcoWaste Management',
    location: 'Chicago, IL',
    rating: 4.9,
    completedJobs: 243,
    phone: '(555) 345-6789',
  },
];

interface ProjectVendorsProps {
  projectId: string;
}

export function ProjectVendors({ projectId }: ProjectVendorsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Assigned Vendors</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="divide-y divide-neutral-200">
          {MOCK_VENDORS.map((vendor) => (
            <div
              key={vendor.id}
              className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-neutral-500" />
                  <span className="font-medium">{vendor.name}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {vendor.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400" weight="fill" />
                    {vendor.rating}
                  </div>
                  <div>{vendor.completedJobs} jobs completed</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <Phone className="h-4 w-4" />
                  {vendor.phone}
                </div>
                <Button variant="ghost" size="sm">
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}