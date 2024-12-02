import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        // Replace this with your actual API call
        const response = await fetch("/api/user/me");
        if (!response.ok) throw new Error("Failed to fetch user");
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  return { user, loading, error };
}
