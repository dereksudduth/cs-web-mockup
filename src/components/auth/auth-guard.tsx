import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/lib/store/auth';

interface AuthGuardProps {
  children: React.ReactNode;
  requiredPermissions?: string[];
}

export function AuthGuard({ children, requiredPermissions = [] }: AuthGuardProps) {
  const { user, token } = useAuthStore();
  const location = useLocation();

  if (!token || !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredPermissions.length > 0) {
    const hasRequiredPermissions = requiredPermissions.every((permission) =>
      user.permissions.includes(permission)
    );

    if (!hasRequiredPermissions) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  return <>{children}</>;
}