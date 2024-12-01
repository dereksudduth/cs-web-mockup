import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { mockUsers } from '@/lib/mock/users';

export async function GET() {
  try {
    const authToken = cookies().get('auth-token')?.value;

    if (!authToken) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const user = mockUsers.find((u) => u.id === authToken);

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({ user: userWithoutPassword });
  } catch (error) {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 401 }
    );
  }
}