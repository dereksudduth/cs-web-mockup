import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { mockUsers } from '@/lib/mock/users';
import type { UserRole } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name, role } = body as {
      email: string;
      password: string;
      name: string;
      role: UserRole;
    };

    // Check if user already exists
    if (mockUsers.some((u) => u.email === email)) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Create new user
    const newUser = {
      id: (mockUsers.length + 1).toString(),
      email,
      password,
      name,
      role,
      permissions: mockUsers.find((u) => u.role === role)?.permissions || [],
    };

    mockUsers.push(newUser);

    // Remove password from response
    const { password: _, ...userWithoutPassword } = newUser;

    // Set auth cookie
    cookies().set('auth-token', newUser.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return NextResponse.json({ user: userWithoutPassword });
  } catch (error) {
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 400 }
    );
  }
}