'use client';

import Link from 'next/link';
import { CaretRight } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';

export function AuthButtons() {
  return (
    <div className="flex items-center space-x-4">
      <Link href="/login">
        <Button 
          variant="ghost"
          size="sm"
          className="text-sm font-medium rounded-full px-6"
        >
          Sign In
        </Button>
      </Link>
      <Link href="/register">
        <Button 
          size="sm"
          className="text-sm font-medium rounded-full px-6 bg-black text-white hover:bg-black/90"
        >
          Get Started <CaretRight className="ml-2 h-4 w-4" weight="bold" />
        </Button>
      </Link>
    </div>
  );
}