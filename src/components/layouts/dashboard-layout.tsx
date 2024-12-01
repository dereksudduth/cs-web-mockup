'use client';

import { Suspense } from 'react';
import { DashboardHeader } from './dashboard-header';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#edece5]">
      <DashboardHeader />
      <main className="w-full">
        <div className="container mx-auto max-w-[1400px] px-4 py-8">
          <Suspense fallback={
            <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
              <div className="animate-pulse text-neutral-400">Loading...</div>
            </div>
          }>
            {children}
          </Suspense>
        </div>
      </main>
    </div>
  );
}