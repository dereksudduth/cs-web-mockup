import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/lib/store/auth';
import { cn } from '@/lib/utils';
import { 
  House, 
  Buildings, 
  Truck, 
  Building, 
  Warehouse, 
  Headset,
  Calendar,
  Star,
  Leaf,
  MapPin,
  ChartLineUp,
  CreditCard,
  ClipboardText,
  Gear,
  CurrencyDollar,
  Users,
  Package,
  Handshake,
  ChatDots,
  CaretRight
} from '@phosphor-icons/react';

const navigation = {
  homeowner: [
    { name: 'Dashboard', href: '/dashboard/homeowner', icon: House },
    { name: 'Schedule Service', href: '/dashboard/homeowner?tab=schedule', icon: Calendar },
    { name: 'Membership', href: '/dashboard/homeowner?tab=membership', icon: Star },
    { name: 'Sustainability', href: '/dashboard/homeowner?tab=sustainability', icon: Leaf },
  ],
  enterprise: [
    { name: 'Dashboard', href: '/dashboard/enterprise', icon: Buildings },
    { name: 'Locations', href: '/dashboard/enterprise/locations', icon: MapPin },
    { name: 'Reports', href: '/dashboard/enterprise/reports', icon: ChartLineUp },
    { name: 'Billing', href: '/dashboard/enterprise/billing', icon: CreditCard },
  ],
  vendor: [
    { name: 'Dashboard', href: '/dashboard/vendor', icon: Truck },
    { name: 'Jobs', href: '/dashboard/vendor/jobs', icon: ClipboardText },
    { name: 'Equipment', href: '/dashboard/vendor/equipment', icon: Gear },
    { name: 'Payroll', href: '/dashboard/vendor/payroll', icon: CurrencyDollar },
  ],
  property_manager: [
    { name: 'Dashboard', href: '/dashboard/property-manager', icon: Building },
    { name: 'Properties', href: '/dashboard/property-manager/properties', icon: House },
    { name: 'Team', href: '/dashboard/property-manager/team', icon: Users },
    { name: 'Billing', href: '/dashboard/property-manager/billing', icon: CreditCard },
  ],
  facility: [
    { name: 'Dashboard', href: '/dashboard/facility', icon: Warehouse },
    { name: 'Services', href: '/dashboard/facility/services', icon: Package },
    { name: 'Vendors', href: '/dashboard/facility/vendors', icon: Handshake },
    { name: 'Requests', href: '/dashboard/facility/requests', icon: ClipboardText },
  ],
  csr: [
    { name: 'Dashboard', href: '/dashboard/csr', icon: Headset },
    { name: 'Customers', href: '/dashboard/csr/customers', icon: Users },
    { name: 'Jobs', href: '/dashboard/csr/jobs', icon: ClipboardText },
    { name: 'Feedback', href: '/dashboard/csr/feedback', icon: ChatDots },
  ],
};

export function DashboardSidebar() {
  const { user } = useAuthStore();
  const pathname = usePathname();
  const roleNavigation = user ? navigation[user.role] : [];

  return (
    <aside className="w-64 border-r border-neutral-200 bg-white">
      <nav className="flex h-full flex-col">
        <div className="flex-1 space-y-1 p-4">
          {roleNavigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all',
                  isActive
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
                <CaretRight 
                  className={cn(
                    "ml-auto h-4 w-4 transition-transform",
                    isActive ? "rotate-90" : ""
                  )} 
                  weight="bold" 
                />
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}