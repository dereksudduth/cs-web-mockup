import { DashboardLayout as DashboardContainer } from '@/components/layouts/dashboard-layout';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardContainer>{children}</DashboardContainer>;
}