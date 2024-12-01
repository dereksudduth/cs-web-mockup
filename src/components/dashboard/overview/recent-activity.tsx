'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, MapPin, Buildings } from '@phosphor-icons/react';

const ACTIVITIES = [
  {
    id: 1,
    type: 'request_completed',
    message: 'Service request completed at Manhattan Office',
    timestamp: '10 minutes ago',
    icon: CheckCircle,
    color: 'text-green-500 bg-green-50',
  },
  {
    id: 2,
    type: 'location_added',
    message: 'New location added: Boston Tech Center',
    timestamp: '1 hour ago',
    icon: MapPin,
    color: 'text-blue-500 bg-blue-50',
  },
  {
    id: 3,
    type: 'request_scheduled',
    message: 'Scheduled pickup for SF Innovation Hub',
    timestamp: '2 hours ago',
    icon: Clock,
    color: 'text-amber-500 bg-amber-50',
  },
  {
    id: 4,
    type: 'vendor_assigned',
    message: 'Vendor assigned to Chicago Loop Offices',
    timestamp: '3 hours ago',
    icon: Buildings,
    color: 'text-purple-500 bg-purple-50',
  },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative space-y-4">
          <div className="absolute top-0 bottom-0 left-[21px] w-px bg-neutral-100" />
          {ACTIVITIES.map((activity) => (
            <div key={activity.id} className="relative flex items-start gap-3 pl-2">
              <div className={`rounded-full p-1.5 ${activity.color} relative z-10`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm">{activity.message}</p>
                <p className="text-xs text-neutral-500">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}