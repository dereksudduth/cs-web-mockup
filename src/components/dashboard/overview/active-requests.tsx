'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Lightning, ArrowClockwise, Clock, CheckCircle, XCircle } from '@phosphor-icons/react';

const ACTIVE_REQUESTS = [
  {
    id: 'SR-12345',
    location: 'Manhattan Office Complex',
    service: 'Waste Collection',
    status: 'In Progress',
    time: '10:30 AM',
    isEmergency: true,
  },
  {
    id: 'SR-12346',
    location: 'Boston Tech Center',
    service: 'Recycling',
    status: 'Scheduled',
    time: '2:00 PM',
    isRecurring: true,
  },
  {
    id: 'SR-12347',
    location: 'SF Innovation Hub',
    service: 'Bulk Pickup',
    status: 'Completed',
    time: '9:15 AM',
  },
];

const STATUS_COLORS = {
  'Scheduled': 'text-blue-600 bg-blue-50',
  'In Progress': 'text-amber-600 bg-amber-50',
  'Completed': 'text-green-600 bg-green-50',
  'Cancelled': 'text-red-600 bg-red-50',
};

export function ActiveRequests() {
  const router = useRouter();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {ACTIVE_REQUESTS.map((request) => (
            <div
              key={request.id}
              className="flex items-center justify-between p-4 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors cursor-pointer"
              onClick={() => router.push(`/dashboard/requests/${request.id}`)}
            >
              <div className="space-y-1">
                <div className="font-medium">{request.location}</div>
                <div className="text-sm text-neutral-500">{request.service}</div>
                <div className="flex gap-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    STATUS_COLORS[request.status as keyof typeof STATUS_COLORS]
                  }`}>
                    {request.status === 'In Progress' && <Clock className="mr-1 h-3 w-3" />}
                    {request.status === 'Completed' && <CheckCircle className="mr-1 h-3 w-3" />}
                    {request.status === 'Cancelled' && <XCircle className="mr-1 h-3 w-3" />}
                    {request.status}
                  </span>
                  {request.isEmergency && (
                    <span className="inline-flex items-center gap-1 text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                      <Lightning className="h-3 w-3" weight="fill" />
                      Emergency
                    </span>
                  )}
                  {request.isRecurring && (
                    <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                      <ArrowClockwise className="h-3 w-3" weight="fill" />
                      Recurring
                    </span>
                  )}
                </div>
              </div>
              <div className="text-sm text-neutral-500">{request.time}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}