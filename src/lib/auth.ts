'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserRole = 'homeowner' | 'enterprise' | 'vendor' | 'property_manager' | 'facility' | 'csr';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  permissions: string[];
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

interface RegisterData {
  email: string;
  password: string;
  name: string;
  role: UserRole;
}

// Default user for auto-login
const defaultUser: User = {
  id: '1',
  email: 'demo@example.com',
  name: 'Demo User',
  role: 'enterprise',
  permissions: ['manage_locations', 'view_reports', 'manage_billing', 'api_access'],
};

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: defaultUser, // Set default user immediately
      isLoading: false,
      error: null,
      login: async (_email: string, _password: string) => {
        set({ user: defaultUser, isLoading: false });
      },
      register: async (data) => {
        const newUser: User = {
          id: Math.random().toString(),
          email: data.email,
          name: data.name,
          role: data.role,
          permissions: ['manage_locations', 'view_reports', 'manage_billing'],
        };
        set({ user: newUser, isLoading: false });
      },
      logout: async () => {
        set({ user: defaultUser }); // Reset to default user instead of null
      },
      checkAuth: async () => {
        set({ user: defaultUser, isLoading: false });
      },
    }),
    {
      name: 'auth-storage',
      skipHydration: true,
    }
  )
);