'use client';

import { NavHeader } from './nav-header';
import { Hero } from './hero';
import { ThreeScene } from './three-scene';

export function LandingPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white">
      <ThreeScene />
      <div className="relative z-10">
        <NavHeader />
        <Hero />
      </div>
    </main>
  );
}