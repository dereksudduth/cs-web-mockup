'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar as CalendarIcon, Clock } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

interface DateTimePickerProps {
  date: Date | undefined;
  time: string;
  onDateChange: (date: Date | undefined) => void;
  onTimeChange: (time: string) => void;
}

const TIME_SLOTS = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30'
];

export function DateTimePicker({
  date,
  time,
  onDateChange,
  onTimeChange
}: DateTimePickerProps) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'justify-start text-left font-normal',
                !date && 'text-neutral-500'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, 'PPP') : 'Select date'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => {
                onDateChange(date);
                setIsCalendarOpen(false);
              }}
              disabled={(date) => date < new Date()}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-col gap-2">
        <Popover open={isTimeOpen} onOpenChange={setIsTimeOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'justify-start text-left font-normal',
                !time && 'text-neutral-500'
              )}
            >
              <Clock className="mr-2 h-4 w-4" />
              {time ? format(new Date(`2000/01/01 ${time}`), 'h:mm a') : 'Select time'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-0" align="start">
            <div className="h-64 overflow-y-auto p-1">
              {TIME_SLOTS.map((slot) => (
                <Button
                  key={slot}
                  variant="ghost"
                  className={cn(
                    'w-full justify-start font-normal',
                    time === slot && 'bg-neutral-100'
                  )}
                  onClick={() => {
                    onTimeChange(slot);
                    setIsTimeOpen(false);
                  }}
                >
                  {format(new Date(`2000/01/01 ${slot}`), 'h:mm a')}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}