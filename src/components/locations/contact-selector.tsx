'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Contact } from '@/lib/types/contacts';
import { MOCK_CONTACTS } from '@/lib/data/mock-contacts';
import { User, Star, Clock, CaretRight } from '@phosphor-icons/react';

interface ContactSelectorProps {
  locationId?: number;
  onSelect: (contact: Contact) => void;
  filter?: (contact: Contact) => boolean;
}

export function ContactSelector({ locationId, onSelect, filter }: ContactSelectorProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const contacts = MOCK_CONTACTS
    .filter(contact => !locationId || contact.locationIds.includes(locationId))
    .filter(filter || (() => true));

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          <div className="flex items-center gap-2 text-neutral-500">
            <User className="h-4 w-4" />
            <span>Select contact...</span>
          </div>
          <CaretRight className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput 
            placeholder="Search contacts..." 
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandEmpty>No contacts found.</CommandEmpty>
          <CommandGroup>
            {filteredContacts.map((contact) => (
              <CommandItem
                key={contact.id}
                value={contact.name}
                onSelect={() => {
                  onSelect(contact);
                  setOpen(false);
                }}
              >
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-neutral-500" />
                  <div className="flex flex-col">
                    <span>{contact.name}</span>
                    <span className="text-xs text-neutral-500">{contact.role}</span>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
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
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}