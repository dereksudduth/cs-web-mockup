'use client';

import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Note, Key, Warning } from '@phosphor-icons/react';

interface LocationNotesProps {
  value: {
    accessNotes: string;
    specialInstructions: string;
    safetyNotes: string;
  };
  onChange: (notes: {
    accessNotes: string;
    specialInstructions: string;
    safetyNotes: string;
  }) => void;
}

export function LocationNotes({ value, onChange }: LocationNotesProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label className="flex items-center gap-2">
          <Key className="h-4 w-4" />
          Access Instructions
        </Label>
        <Textarea
          placeholder="Enter gate codes, access hours, parking instructions..."
          value={value.accessNotes}
          onChange={(e) => onChange({ ...value, accessNotes: e.target.value })}
          className="min-h-[80px]"
        />
      </div>

      <div className="space-y-2">
        <Label className="flex items-center gap-2">
          <Note className="h-4 w-4" />
          Special Instructions
        </Label>
        <Textarea
          placeholder="Enter any special handling instructions or requirements..."
          value={value.specialInstructions}
          onChange={(e) => onChange({ ...value, specialInstructions: e.target.value })}
          className="min-h-[80px]"
        />
      </div>

      <div className="space-y-2">
        <Label className="flex items-center gap-2">
          <Warning className="h-4 w-4" />
          Safety Notes
        </Label>
        <Textarea
          placeholder="Enter any safety considerations or hazards..."
          value={value.safetyNotes}
          onChange={(e) => onChange({ ...value, safetyNotes: e.target.value })}
          className="min-h-[80px]"
        />
      </div>
    </div>
  );
}