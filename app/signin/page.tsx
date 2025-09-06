'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatedForm } from '../components/ui/modern-animated-sign-in';

type FormData = {
  email: string;
  password: string;
};

export default function SignInPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const handleChange = (field: keyof FormData) => (event: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle sign in submission
    // Add your authentication logic here
  };

  const goToSignUp = () => {
    // Navigate to sign up page
    // You can add sign up page navigation here if needed
  };

  const fields = [
    {
      label: 'Email',
      required: true,
      type: 'email' as const,
      placeholder: 'Enter your email',
      onChange: handleChange('email'),
    },
    {
      label: 'Password',
      required: true,
      type: 'password' as const,
      placeholder: 'Enter your password',
      onChange: handleChange('password'),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm sm:max-w-md">
        {/* Back to Home Button */}
        <div className="mb-6 sm:mb-8">
          <button
            onClick={() => router.push('/')}
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 text-sm sm:text-base"
            data-testid="button-back-home"
          >
            ← Back to Home
          </button>
        </div>

        {/* Animated Sign In Form */}
        <AnimatedForm
          header="Welcome Back"
          subHeader="Sign in to your Tech EduVate account to continue your learning journey"
          fields={fields}
          submitButton="Sign In"
          textVariantButton="Don't have an account? Sign up"
          onSubmit={handleSubmit}
          goTo={goToSignUp}
          googleLogin="Continue with Google"
        />
      </div>
    </div>
  );
}