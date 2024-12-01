import { createBrowserRouter } from 'react-router-dom';
import { LandingPage } from '@/components/landing-page';
import LoginPage from '@/pages/auth/login';
import RegisterPage from '@/pages/auth/register';
import { AuthGuard } from '@/components/auth/auth-guard';
import { DashboardLayout } from '@/components/layouts/dashboard-layout';
import HomeownerDashboard from '@/pages/dashboard/homeowner';
import EnterpriseDashboard from '@/pages/dashboard/enterprise';
import VendorDashboard from '@/pages/dashboard/vendor';
import PropertyManagerDashboard from '@/pages/dashboard/property-manager';
import FacilityDashboard from '@/pages/dashboard/facility';
import CSRDashboard from '@/pages/dashboard/csr';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: 'homeowner',
        element: <HomeownerDashboard />,
      },
      {
        path: 'enterprise',
        element: <EnterpriseDashboard />,
      },
      {
        path: 'vendor',
        element: <VendorDashboard />,
      },
      {
        path: 'property-manager',
        element: <PropertyManagerDashboard />,
      },
      {
        path: 'facility',
        element: <FacilityDashboard />,
      },
      {
        path: 'csr',
        element: <CSRDashboard />,
      },
    ],
  },
]);