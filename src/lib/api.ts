const API_BASE_URL = '/api';

async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'API request failed');
  }

  return data;
}

export const api = {
  auth: {
    login: (email: string, password: string) =>
      fetchAPI('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }),

    register: (data: {
      email: string;
      password: string;
      name: string;
      role: string;
    }) =>
      fetchAPI('/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
      }),

    logout: () =>
      fetchAPI('/auth/logout', {
        method: 'POST',
      }),
  },
};