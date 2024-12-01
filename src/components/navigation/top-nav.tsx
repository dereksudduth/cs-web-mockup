'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  House,
  GlobeSimple,
  Stack,
  Path,
  Invoice,
  Gear,
  Leaf,
} from '@phosphor-icons/react';

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: House },
  { name: 'Locations', href: '/dashboard/locations', icon: GlobeSimple },
  { name: 'Requests', href: '/dashboard/requests', icon: Stack },
  { name: 'Projects', href: '/dashboard/projects', icon: Path },
  { name: 'CS+', href: '/dashboard/cs-plus', icon: Leaf },
  { name: 'Billing', href: '/dashboard/billing', icon: Invoice },
  { name: 'Settings', href: '/dashboard/settings', icon: Gear },
];

export function TopNav() {
  const pathname = usePathname();

  const isActiveRoute = (href: string) => {
    if (href === '/dashboard') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="flex items-center gap-1 px-2">
      {navigation.map((item) => {
        const isActive = isActiveRoute(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors',
              isActive
                ? 'bg-[#f2ec7e] text-black'
                : 'text-neutral-300 hover:bg-[#f2ec7e] hover:text-black'
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}