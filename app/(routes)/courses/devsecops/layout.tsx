import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevSecOps Essentials Course - SAST, DAST, Security Automation | Tech EduVate',
  description: 'Master DevSecOps with comprehensive training in SAST, DAST, security automation, and pipeline security. Learn to integrate security into DevOps workflows in 8 weeks.',
  keywords: 'DevSecOps training, SAST DAST, security automation, pipeline security, secure coding, vulnerability scanning, compliance monitoring, security testing',
  openGraph: {
    title: 'DevSecOps Essentials Course - Complete Security Automation Training',
    description: 'Master DevSecOps with hands-on training in security automation, SAST, DAST, and pipeline security.',
    url: 'https://techeduvate.com/courses/devsecops',
    images: [{
      url: '/courses/devsecops-og.jpg',
      width: 1200,
      height: 630,
      alt: 'DevSecOps Essentials Course - SAST, DAST, Security Automation'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevSecOps Essentials Course - SAST, DAST, Security Automation',
    description: 'Master DevSecOps with comprehensive security automation training.',
    images: ['/courses/devsecops-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://techeduvate.com/courses/devsecops',
  },
};

export default function DevSecOpsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}