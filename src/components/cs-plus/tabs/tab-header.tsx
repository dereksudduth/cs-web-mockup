'use client';

import { Button } from '@/components/ui/button';
import { Download } from '@phosphor-icons/react';

interface TabHeaderProps {
  title: string;
  description: string;
}

export function TabHeader({ title, description }: TabHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-neutral-500">{description}</p>
      </div>
      <Button variant="outline" className="gap-2 rounded-full">
        <Download className="h-4 w-4" />
        Export Report
      </Button>
    </div>
  );
}