'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from '@phosphor-icons/react';
import { useLocale } from '@/lib/i18n/hooks';
import { SUPPORTED_LOCALES, type SupportedLocale } from '@/lib/i18n/config';

export function LocaleSwitcher() {
  const { locale, changeLocale } = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full text-neutral-300 hover:text-white hover:bg-white/10"
        >
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(SUPPORTED_LOCALES).map(([key, label]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => changeLocale(key as SupportedLocale)}
            className={locale === key ? 'bg-neutral-100' : ''}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}