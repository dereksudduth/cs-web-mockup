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
  token: string | null;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  logout: () => void;
}

// Default user for development
const defaultUser: User = {
  id: '1',
  email: 'enterprise@example.com',
  name: 'Enterprise Admin',
  role: 'enterprise',
  permissions: ['manage_settings', 'manage_locations', 'view_reports', 'manage_billing', 'api_access'],
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: defaultUser, // Set default user for development
      token: 'mock-token',
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);