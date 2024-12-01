interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
    >
      {children}
    </a>
  );
}