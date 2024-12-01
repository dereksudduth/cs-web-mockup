'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  House,
  GlobeSimple,
  Stack,
  Path,
  Invoice,
  Gear,
  Plus,
} from '@phosphor-icons/react';

const COMMANDS = [
  {
    heading: 'Pages',
    items: [
      { icon: House, name: 'Overview', shortcut: 'O', href: '/dashboard' },
      { icon: GlobeSimple, name: 'Locations', shortcut: 'L', href: '/dashboard/locations' },
      { icon: Stack, name: 'Requests', shortcut: 'R', href: '/dashboard/requests' },
      { icon: Path, name: 'CS+', shortcut: 'C', href: '/dashboard/cs-plus' },
      { icon: Invoice, name: 'Billing', shortcut: 'B', href: '/dashboard/billing' },
      { icon: Gear, name: 'Settings', shortcut: 'S', href: '/dashboard/settings' },
    ],
  },
  {
    heading: 'Actions',
    items: [
      { icon: Plus, name: 'New Request', shortcut: 'N', href: '/dashboard/requests/new' },
    ],
  },
];

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(true);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [onOpenChange]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {COMMANDS.map((group) => (
          <CommandGroup key={group.heading} heading={group.heading}>
            {group.items.map((item) => (
              <CommandItem
                key={item.name}
                onSelect={() => {
                  onOpenChange(false);
                  router.push(item.href);
                }}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.name}</span>
                <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-neutral-100 px-1.5 font-mono text-[10px] font-medium opacity-100">
                  <span className="text-xs">⌘</span>
                  {item.shortcut}
                </kbd>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
