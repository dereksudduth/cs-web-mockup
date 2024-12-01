'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Clock, CheckCircle, XCircle, Lightning } from '@phosphor-icons/react';

const SERVICE_STATUS = [
  {
    id: 1,
    type: 'Emergency',
    total: 12,
    inProgress: 8,
    icon: Lightning,
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  {
    id: 2,
    type: 'Standard',
    total: 156,
    inProgress: 89,
    icon: Clock,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    id: 3,
    type: 'Completed Today',
    total: 47,
    icon: CheckCircle,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    id: 4,
    type: 'Delayed',
    total: 3,
    icon: XCircle,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
  },
];

export function ServiceStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Service Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          {SERVICE_STATUS.map((status) => (
            <div
              key={status.id}
              className="flex items-center gap-4 p-4 rounded-lg border border-neutral-200"
            >
              <div className={`rounded-full p-2 ${status.bgColor}`}>
                <status.icon className={`h-5 w-5 ${status.color}`} />
              </div>
              <div className="flex-1">
                <div className="text-sm text-neutral-500">{status.type}</div>
                <div className="text-2xl font-bold">{status.total}</div>
                {status.inProgress && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-neutral-500">In Progress</span>
                      <span className="font-medium">{status.inProgress}/{status.total}</span>
                    </div>
                    <Progress 
                      value={(status.inProgress / status.total) * 100} 
                      className="h-1.5" 
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}