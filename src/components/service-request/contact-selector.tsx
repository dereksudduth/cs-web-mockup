'use client';

import { useState } from 'react';
import { Contact, MOCK_CONTACTS } from '@/lib/data/mock-contacts';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { User, CaretRight, Star, Clock } from '@phosphor-icons/react';

interface ContactSelectorProps {
  locationId: number;
  selectedContact: Contact | null;
  onContactSelect: (contact: Contact | null) => void;
  useManagerOnDuty: boolean;
  onManagerOnDutyChange: (value: boolean) => void;
}

export function ContactSelector({
  locationId,
  selectedContact,
  onContactSelect,
  useManagerOnDuty,
  onManagerOnDutyChange
}: ContactSelectorProps) {
  const [open, setOpen] = useState(false);
  const locationContacts = MOCK_CONTACTS.filter(contact => 
    contact.locationIds.includes(locationId)
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Switch
            checked={useManagerOnDuty}
            onCheckedChange={(checked) => {
              onManagerOnDutyChange(checked);
              if (checked) {
                const mod = locationContacts.find(c => c.isManagerOnDuty);
                onContactSelect(mod || null);
              }
            }}
          />
          <Label>Use Manager on Duty</Label>
        </div>
      </div>

      {!useManagerOnDuty && (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              {selectedContact ? (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-neutral-500" />
                  <span>{selectedContact.name}</span>
                  {selectedContact.isPrimary && (
                    <span className="inline-flex items-center gap-1 text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">
                      <Star className="h-3 w-3" weight="fill" />
                      Primary
                    </span>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2 text-neutral-500">
                  <User className="h-4 w-4" />
                  <span>Select contact...</span>
                </div>
              )}
              <CaretRight className="h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0">
            <Command>
              <CommandInput placeholder="Search contacts..." />
              <CommandEmpty>No contacts found.</CommandEmpty>
              <CommandGroup>
                {locationContacts.map((contact) => (
                  <CommandItem
                    key={contact.id}
                    value={contact.name}
                    onSelect={() => {
                      onContactSelect(contact);
                      setOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-neutral-500" />
                      <span>{contact.name}</span>
                      {contact.isPrimary && (
                        <span className="inline-flex items-center gap-1 text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">
                          <Star className="h-3 w-3" weight="fill" />
                          Primary
                        </span>
                      )}
                      {contact.isManagerOnDuty && (
                        <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                          <Clock className="h-3 w-3" weight="fill" />
                          MOD
                        </span>
                      )}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      )}

      {selectedContact && (
        <div className="text-sm text-neutral-500">
          <div>{selectedContact.role}</div>
          <div>{selectedContact.phone}</div>
          <div>{selectedContact.email}</div>
        </div>
      )}
    </div>
  );
}