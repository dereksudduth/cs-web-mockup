'use client';

const API_BASE_URL = '/api';

interface APIError extends Error {
  status: number;
}

class APIClient {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        credentials: 'include',
      });

      const data = await response.json();

      if (!response.ok) {
        const error = new Error(data.error || 'An error occurred') as APIError;
        error.status = response.status;
        throw error;
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  auth = {
    login: async (email: string, password: string) =>
      this.request<{ user: any }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }),

    register: async (data: {
      email: string;
      password: string;
      name: string;
      role: string;
    }) =>
      this.request<{ user: any }>('/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
      }),

    logout: async () =>
      this.request<{ success: boolean }>('/auth/logout', {
        method: 'POST',
      }),

    getCurrentUser: async () =>
      this.request<{ user: any }>('/auth/me'),
  };
}

export const api = new APIClient();