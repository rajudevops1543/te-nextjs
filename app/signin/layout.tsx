import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In - Tech EduVate | Access Your DevOps & Cloud Training Account',
  description: 'Sign in to your Tech EduVate account to access your DevOps, AWS, Azure, GCP, and DevSecOps training courses. Continue your professional development journey.',
  keywords: 'sign in, login, Tech EduVate account, DevOps training access, cloud courses login',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Sign In - Tech EduVate Training Platform',
    description: 'Access your DevOps and cloud training courses. Sign in to continue your learning journey.',
    url: 'https://techeduvate.com/signin',
    images: [{
      url: '/signin-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Sign In to Tech EduVate Training Platform'
    }],
  },
  twitter: {
    card: 'summary',
    title: 'Sign In - Tech EduVate Training Platform',
    description: 'Access your DevOps and cloud training courses.',
  },
  alternates: {
    canonical: 'https://techeduvate.com/signin',
  },
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}