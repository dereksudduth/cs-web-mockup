'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightning, ArrowClockwise, Clock, CheckCircle, XCircle } from '@phosphor-icons/react';

interface ServiceRequest {
  id: string;
  location: string;
  service: string;
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled';
  date: string;
  time: string;
  isEmergency?: boolean;
  isRecurring?: boolean;
}

const MOCK_REQUESTS: ServiceRequest[] = [
  {
    id: 'SR-12345',
    location: 'Manhattan Office Complex',
    service: 'Display Case Removal',
    status: 'In Progress',
    date: '2024-02-25',
    time: '09:00 AM',
    isEmergency: false,
  },
  {
    id: 'SR-12346',
    location: 'Boston Tech Center',
    service: 'Display Case Removal',
    status: 'Scheduled',
    date: '2024-02-26',
    time: '10:30 AM',
    isEmergency: false,
  },
  {
    id: 'SR-12347',
    location: 'SF Innovation Hub',
    service: 'Display Case Removal',
    status: 'Completed',
    date: '2024-02-24',
    time: '02:00 PM',
    isEmergency: false,
  },
];

const STATUS_COLORS = {
  'Scheduled': 'text-blue-600 bg-blue-50',
  'In Progress': 'text-amber-600 bg-amber-50',
  'Completed': 'text-green-600 bg-green-50',
  'Cancelled': 'text-red-600 bg-red-50',
};

interface ProjectServiceRequestsProps {
  projectId: string;
}

export function ProjectServiceRequests({ projectId }: ProjectServiceRequestsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Service Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-neutral-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50 border-b border-neutral-200">
                <tr>
                  <th className="text-left text-sm font-medium text-neutral-500 px-4 py-3">Request ID</th>
                  <th className="text-left text-sm font-medium text-neutral-500 px-4 py-3">Location</th>
                  <th className="text-left text-sm font-medium text-neutral-500 px-4 py-3">Service</th>
                  <th className="text-left text-sm font-medium text-neutral-500 px-4 py-3">Status</th>
                  <th className="text-left text-sm font-medium text-neutral-500 px-4 py-3">Date & Time</th>
                  <th className="text-right text-sm font-medium text-neutral-500 px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {MOCK_REQUESTS.map((request) => (
                  <tr 
                    key={request.id}
                    className="hover:bg-neutral-50 transition-colors cursor-pointer"
                  >
                    <td className="px-4 py-3 text-sm font-medium">{request.id}</td>
                    <td className="px-4 py-3 text-sm">{request.location}</td>
                    <td className="px-4 py-3 text-sm">{request.service}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${STATUS_COLORS[request.status]}`}>
                        {request.status === 'In Progress' && <Clock className="mr-1 h-3 w-3" />}
                        {request.status === 'Completed' && <CheckCircle className="mr-1 h-3 w-3" />}
                        {request.status === 'Cancelled' && <XCircle className="mr-1 h-3 w-3" />}
                        {request.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {new Date(request.date).toLocaleDateString()} {request.time}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="rounded-full"
                      >
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}