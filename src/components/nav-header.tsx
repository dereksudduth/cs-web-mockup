import { Logo } from './common/logo';
import { NavLinks } from './navigation/nav-links';
import { AuthButtons } from './navigation/auth-buttons';

export function NavHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 h-20 bg-white/80 backdrop-blur-sm border-b border-neutral-200/50">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <Logo />
        <NavLinks />
        <AuthButtons />
      </div>
    </header>
  );
}