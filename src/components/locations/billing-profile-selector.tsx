'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CreditCard, CaretRight } from '@phosphor-icons/react';
import type { BillingProfile } from '@/lib/types/billing';

interface BillingProfileSelectorProps {
  profiles: BillingProfile[];
  selectedProfileId?: string;
  isDefault?: boolean;
  onSelect: (profileId: string, isDefault: boolean) => void;
}

export function BillingProfileSelector({
  profiles,
  selectedProfileId,
  isDefault = false,
  onSelect,
}: BillingProfileSelectorProps) {
  const [open, setOpen] = useState(false);
  const [makeDefault, setMakeDefault] = useState(isDefault);
  const selectedProfile = profiles.find(p => p.id === selectedProfileId);

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Billing Profile</Label>
            <div className="flex items-center gap-2">
              <Switch
                checked={makeDefault}
                onCheckedChange={(checked) => {
                  setMakeDefault(checked);
                  if (selectedProfileId) {
                    onSelect(selectedProfileId, checked);
                  }
                }}
              />
              <Label>Make Default</Label>
            </div>
          </div>

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
              >
                {selectedProfile ? (
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-neutral-500" />
                    <span>{selectedProfile.name}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-neutral-500">
                    <CreditCard className="h-4 w-4" />
                    <span>Select billing profile...</span>
                  </div>
                )}
                <CaretRight className="h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[400px] p-0">
              <Command>
                <CommandInput placeholder="Search billing profiles..." />
                <CommandEmpty>No billing profiles found.</CommandEmpty>
                <CommandGroup>
                  {profiles.map((profile) => (
                    <CommandItem
                      key={profile.id}
                      value={profile.name}
                      onSelect={() => {
                        onSelect(profile.id, makeDefault);
                        setOpen(false);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-neutral-500" />
                        <div className="flex flex-col">
                          <span>{profile.name}</span>
                          <span className="text-xs text-neutral-500">
                            {profile.paymentMethod.type === 'credit_card' && profile.paymentMethod.lastFour
                              ? `•••• ${profile.paymentMethod.lastFour}`
                              : profile.paymentMethod.type}
                          </span>
                        </div>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>

          {selectedProfile && (
            <div className="text-sm text-neutral-500">
              <div>Payment Method: {selectedProfile.paymentMethod.type}</div>
              <div>Contact: {selectedProfile.billingContact.name}</div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}