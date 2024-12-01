'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TabNavigationProps {
  tabs: {
    value: string;
    label: string;
  }[];
}

export function TabNavigation({ tabs }: TabNavigationProps) {
  return (
    <TabsList className="bg-neutral-100 p-1 rounded-full">
      {tabs.map(({ value, label }) => (
        <TabsTrigger key={value} value={value} className="rounded-full">
          {label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
}