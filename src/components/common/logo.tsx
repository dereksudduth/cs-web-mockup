'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/dashboard" className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <Image
          src="/logo.svg"
          alt="CheckSammy"
          width={32}
          height={32}
          className="h-8 w-8"
          priority
        />
      </div>
    </Link>
  );
}