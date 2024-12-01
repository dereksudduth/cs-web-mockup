'use client';

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowClockwise } from '@phosphor-icons/react';

interface RecurringScheduleProps {
  frequency: string;
  selectedDays: string[];
  onFrequencyChange: (value: string) => void;
  onDaysChange: (days: string[]) => void;
}

const DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

export function RecurringSchedule({
  frequency,
  selectedDays,
  onFrequencyChange,
  onDaysChange,
}: RecurringScheduleProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <ArrowClockwise className="h-5 w-5 text-blue-500" weight="fill" />
        <span className="text-sm font-medium text-blue-700">
          Configure Recurring Schedule
        </span>
      </div>

      <div className="space-y-4">
        <Label>Frequency</Label>
        <RadioGroup
          value={frequency}
          onValueChange={onFrequencyChange}
          className="grid sm:grid-cols-4 gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="weekly" id="weekly" />
            <Label htmlFor="weekly">Weekly</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="biweekly" id="biweekly" />
            <Label htmlFor="biweekly">Bi-weekly</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="monthly" id="monthly" />
            <Label htmlFor="monthly">Monthly</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="custom" id="custom" />
            <Label htmlFor="custom">Custom</Label>
          </div>
        </RadioGroup>
      </div>

      {(frequency === 'weekly' || frequency === 'biweekly' || frequency === 'custom') && (
        <div className="space-y-4">
          <Label>Preferred Days</Label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {DAYS.map((day) => (
              <label
                key={day}
                className="flex items-center space-x-2"
              >
                <Checkbox
                  checked={selectedDays.includes(day)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      onDaysChange([...selectedDays, day]);
                    } else {
                      onDaysChange(selectedDays.filter((d) => d !== day));
                    }
                  }}
                />
                <span className="text-sm">{day}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}