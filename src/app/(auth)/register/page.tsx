import { RegisterForm } from '@/components/auth/register-form';
import { ThreeScene } from '@/components/three-scene';

export default function RegisterPage() {
  return (
    <div className="relative min-h-screen flex">
      <ThreeScene />
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Create your account</h2>
            <p className="mt-2 text-neutral-600">
              Join CheckSammy and start managing waste efficiently
            </p>
          </div>

          <RegisterForm />

          <p className="text-center text-sm text-neutral-600">
            Already have an account?{' '}
            <a
              href="/login"
              className="font-medium text-neutral-900 hover:text-neutral-700"
            >
              Sign in instead
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}