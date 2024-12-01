'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Plus, CaretRight } from '@phosphor-icons/react';

export function QuickActions() {
  const router = useRouter();

  return (
    <div className="flex items-center gap-3">
      <Button 
        className="new-request-button gap-2 rounded-full"
        onClick={() => router.push('/dashboard/requests/new')}
      >
        <Plus className="h-4 w-4" />
        New Request <CaretRight className="h-4 w-4" weight="bold" />
      </Button>
    </div>
  );
}