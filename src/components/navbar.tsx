import { Circle, CaretRight } from '@phosphor-icons/react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-neutral-200/50 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Circle weight="fill" className="h-6 w-6" />
          <span className="text-lg font-semibold">CheckSammy</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {['Solutions', 'Features', 'Pricing', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="rounded-full px-6 text-sm font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
            onClick={() => navigate('/login')}
          >
            Sign In
          </Button>
          <Button
            className="rounded-full bg-black px-6 text-sm font-medium text-white hover:bg-black/90"
            onClick={() => navigate('/register')}
          >
            Get Started <CaretRight className="ml-2 h-4 w-4" weight="bold" />
          </Button>
        </div>
      </div>
    </nav>
  );
}