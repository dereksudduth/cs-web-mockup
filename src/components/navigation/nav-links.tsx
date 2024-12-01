import { NavLink } from './nav-link';

const NAVIGATION_ITEMS = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function NavLinks() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {NAVIGATION_ITEMS.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}