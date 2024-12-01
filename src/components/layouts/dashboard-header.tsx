'use client';

import { useState } from 'react';
import { useAuthStore } from '@/lib/store/auth';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/common/logo';
import { TopNav } from '@/components/navigation/top-nav';
import { NotificationDropdown } from '@/components/notifications/notification-dropdown';
import { CommandPalette } from '@/components/command-palette';
import { useLocale } from '@/lib/i18n/hooks';
import {
  SignOut,
  User,
  Command,
  UserCircle,
  Key,
  Globe,
} from '@phosphor-icons/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SUPPORTED_LOCALES, type SupportedLocale } from '@/lib/i18n/config';

export function DashboardHeader() {
  const { user, logout } = useAuthStore();
  const { locale, changeLocale } = useLocale();
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto px-4 py-2">
        <div className="rounded-full bg-neutral-900/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/80">
          <div className="container mx-auto max-w-[1400px] flex h-12 items-center justify-between px-4">
            <div className="flex items-center gap-8">
              <Logo />
              <TopNav />
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="relative h-9 w-64 justify-start rounded-full text-sm text-neutral-400 hover:text-white hover:bg-white/10 border border-white/10"
                onClick={() => setIsCommandPaletteOpen(true)}
              >
                <Command className="absolute left-3 h-4 w-4" />
                <span className="ml-8">Search...</span>
                <kbd className="pointer-events-none absolute right-3 hidden h-5 select-none items-center gap-1 rounded border border-white/20 bg-white/10 px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>

              <NotificationDropdown />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="rounded-full h-8 w-8 p-0">
                    <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                      <User className="h-4 w-4 text-neutral-300" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <UserCircle className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Key className="mr-2 h-4 w-4" />
                      <span>Security</span>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <Globe className="mr-2 h-4 w-4" />
                        <span>Language</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        {Object.entries(SUPPORTED_LOCALES).map(([key, label]) => (
                          <DropdownMenuItem
                            key={key}
                            onClick={() => changeLocale(key as SupportedLocale)}
                          >
                            <span className={locale === key ? 'font-medium' : ''}>
                              {label}
                            </span>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-red-600">
                    <SignOut className="mr-2 h-4 w-4" />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      <CommandPalette 
        open={isCommandPaletteOpen} 
        onOpenChange={setIsCommandPaletteOpen} 
      />
    </header>
  );
}