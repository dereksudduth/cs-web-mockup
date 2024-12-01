'use client';

import { RequestTracker } from '@/components/service-request/request-tracker';

export default function ServiceRequestPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-8 max-w-7xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Service Request Details</h1>
        <p className="text-neutral-500">Track your service request in real-time</p>
      </div>

      <RequestTracker requestId={params.id} />
    </div>
  );
}