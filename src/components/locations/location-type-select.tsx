'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Buildings } from '@phosphor-icons/react';

const LOCATION_TYPES = [
  'Commercial',
  'Industrial',
  'Retail',
  'Hospitality',
  'Healthcare',
  'Educational',
  'Government',
  'Residential',
];

interface LocationTypeSelectProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function LocationTypeSelect({ value, onValueChange }: LocationTypeSelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full">
        <div className="flex items-center gap-2">
          <Buildings className="h-4 w-4 text-neutral-500" />
          <SelectValue placeholder="Select location type" />
        </div>
      </SelectTrigger>
      <SelectContent>
        {LOCATION_TYPES.map((type) => (
          <SelectItem key={type} value={type.toLowerCase()}>
            {type}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}