import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { mockUsers } from '@/lib/mock/users';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Find user by email (case-insensitive)
    const user = mockUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    // Set auth cookie
    cookies().set('auth-token', user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });

    return NextResponse.json({ user: userWithoutPassword });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 401 }
    );
  }
}