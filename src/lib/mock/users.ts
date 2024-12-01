'use client';

import type { UserRole } from '@/lib/auth';

interface MockUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  password: string;
  permissions: string[];
}

export const mockUsers: MockUser[] = [
  {
    id: '1',
    email: 'homeowner@example.com',
    password: 'password123',
    name: 'John Homeowner',
    role: 'homeowner',
    permissions: ['schedule_service', 'view_reports', 'manage_membership'],
  },
  {
    id: '2',
    email: 'enterprise@example.com',
    password: 'password123',
    name: 'Sarah Enterprise',
    role: 'enterprise',
    permissions: ['manage_locations', 'view_reports', 'manage_billing', 'api_access'],
  },
  {
    id: '3',
    email: 'vendor@example.com',
    password: 'password123',
    name: 'Mike Vendor',
    role: 'vendor',
    permissions: ['manage_profile', 'manage_equipment', 'manage_jobs', 'view_payroll'],
  },
  {
    id: '4',
    email: 'property@example.com',
    password: 'password123',
    name: 'Lisa Property',
    role: 'property_manager',
    permissions: ['manage_properties', 'manage_billing', 'manage_team'],
  },
  {
    id: '5',
    email: 'facility@example.com',
    password: 'password123',
    name: 'Tom Facility',
    role: 'facility',
    permissions: ['manage_profile', 'request_service', 'manage_vendors'],
  },
  {
    id: '6',
    email: 'csr@example.com',
    password: 'password123',
    name: 'Amy Support',
    role: 'csr',
    permissions: ['manage_jobs', 'manage_customers', 'manage_feedback'],
  },
];