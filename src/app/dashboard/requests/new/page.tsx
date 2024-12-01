'use client';

import { NewRequestForm } from '@/components/service-request/new-request-form';

export default function NewRequestPage() {
  return (
    <div className="container mx-auto p-8 max-w-7xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">New Service Request</h1>
        <p className="text-neutral-500">Schedule a new waste collection service</p>
      </div>

      <NewRequestForm />
    </div>
  );
}