import { LoginForm } from '@/components/auth/login-form';
import { ThreeScene } from '@/components/three-scene';

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex">
      <ThreeScene />
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Welcome back</h2>
            <p className="mt-2 text-neutral-600">
              Sign in to your account to continue
            </p>
          </div>

          <LoginForm />

          <p className="text-center text-sm text-neutral-600">
            Don't have an account?{' '}
            <a
              href="/register"
              className="font-medium text-neutral-900 hover:text-neutral-700"
            >
              Create one now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}