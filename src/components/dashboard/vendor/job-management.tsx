'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, ClipboardText, Calendar, MapPin } from '@phosphor-icons/react';

const JOBS = [
  {
    id: 1,
    title: 'Waste Collection - Downtown Office',
    location: '123 Business Ave, City, State',
    status: 'In Progress',
    date: '2024-02-25',
    time: '09:00 AM',
    priority: 'High',
  },
  {
    id: 2,
    title: 'Recycling Pickup - West Side Mall',
    location: '456 Shopping Blvd, City, State',
    status: 'Scheduled',
    date: '2024-02-26',
    time: '10:30 AM',
    priority: 'Normal',
  },
  {
    id: 3,
    title: 'Hazardous Waste - Industrial Park',
    location: '789 Factory Rd, City, State',
    status: 'Pending',
    date: '2024-02-26',
    time: '02:00 PM',
    priority: 'High',
  },
];

const STATUS_COLORS = {
  'In Progress': 'text-blue-600',
  Scheduled: 'text-green-600',
  Pending: 'text-yellow-600',
  Completed: 'text-neutral-600',
};

export function JobManagement() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Active Jobs</CardTitle>
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          New Job
        </Button>
      </CardHeader>
      <CardContent>
        <div className="divide-y divide-neutral-200">
          {JOBS.map((job) => (
            <div
              key={job.id}
              className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <ClipboardText className="h-4 w-4 text-neutral-500" />
                  <span className="font-medium">{job.title}</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-neutral-500">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1 text-neutral-500">
                    <Calendar className="h-4 w-4" />
                    {job.time} - {job.date}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`text-sm font-medium ${
                    STATUS_COLORS[job.status as keyof typeof STATUS_COLORS]
                  }`}
                >
                  {job.status}
                </span>
                <span
                  className={`rounded-full px-2 py-1 text-xs ${
                    job.priority === 'High'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {job.priority}
                </span>
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}