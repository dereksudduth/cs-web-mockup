import { UserRole } from '../store/auth';

export const rolePermissions: Record<UserRole, string[]> = {
  homeowner: ['schedule_service', 'view_reports', 'manage_membership'],
  enterprise: ['manage_locations', 'view_reports', 'manage_billing', 'api_access'],
  vendor: ['manage_profile', 'manage_equipment', 'manage_jobs', 'view_payroll'],
  property_manager: ['manage_properties', 'manage_billing', 'manage_team'],
  facility: ['manage_profile', 'request_service', 'manage_vendors'],
  csr: ['manage_jobs', 'manage_customers', 'manage_feedback'],
};