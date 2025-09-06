import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientProvider from "./components/ClientProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://techeduvate.com'),
  title: 'Tech EduVate - Professional DevOps & Cloud Training Platform',
  description: 'Master DevOps, AWS, Azure, GCP, and DevSecOps with hands-on training programs. Industry-certified courses with lifetime access, expert instructors, and real-world projects.',
  keywords: 'DevOps training, AWS certification, Azure course, GCP training, DevSecOps, cloud computing, CI/CD, Kubernetes, Docker, infrastructure as code, professional development',
  authors: [{ name: 'Tech EduVate' }],
  creator: 'Tech EduVate',
  publisher: 'Tech EduVate',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techeduvate.com',
    siteName: 'Tech EduVate',
    title: 'Tech EduVate - Professional DevOps & Cloud Training Platform',
    description: 'Master DevOps, AWS, Azure, GCP, and DevSecOps with hands-on training programs. Industry-certified courses with lifetime access.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tech EduVate - DevOps & Cloud Training Platform',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@techeduvate',
    creator: '@techeduvate',
    title: 'Tech EduVate - Professional DevOps & Cloud Training Platform',
    description: 'Master DevOps, AWS, Azure, GCP, and DevSecOps with hands-on training programs.',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://techeduvate.com',
  },
  category: 'Education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Tech EduVate',
    description: 'Professional DevOps and Cloud Training Platform offering comprehensive courses in AWS, Azure, GCP, DevOps, and DevSecOps',
    url: 'https://techeduvate.com',
    logo: 'https://techeduvate.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-XXXXXXXXXX',
      contactType: 'customer service',
      email: 'info@techeduvate.com'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    sameAs: [
      'https://linkedin.com/company/techeduvate',
      'https://twitter.com/techeduvate'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'DevOps and Cloud Training Courses',
      itemListElement: [
        {
          '@type': 'Course',
          name: 'DevOps Mastery',
          description: 'Comprehensive DevOps training covering CI/CD, Docker, Kubernetes, and automation',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Tech EduVate'
          },
          courseMode: 'online',
          educationalCredentialAwarded: 'Certificate of Completion',
          timeRequired: 'P10W'
        },
        {
          '@type': 'Course',
          name: 'AWS Cloud Professional',
          description: 'Master Amazon Web Services with hands-on training in EC2, S3, Lambda, and advanced AWS services',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Tech EduVate'
          },
          courseMode: 'online',
          educationalCredentialAwarded: 'Certificate of Completion',
          timeRequired: 'P12W'
        },
        {
          '@type': 'Course',
          name: 'Microsoft Azure Expert',
          description: 'Comprehensive Azure training covering DevOps, AKS, Functions, and cloud architecture',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Tech EduVate'
          },
          courseMode: 'online',
          educationalCredentialAwarded: 'Certificate of Completion',
          timeRequired: 'P11W'
        },
        {
          '@type': 'Course',
          name: 'Google Cloud Platform',
          description: 'Master GCP with training in GKE, BigQuery, AI/ML integration, and cloud architecture',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Tech EduVate'
          },
          courseMode: 'online',
          educationalCredentialAwarded: 'Certificate of Completion',
          timeRequired: 'P10W'
        },
        {
          '@type': 'Course',
          name: 'DevSecOps Essentials',
          description: 'Integrate security into DevOps workflows with SAST, DAST, and security automation',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Tech EduVate'
          },
          courseMode: 'online',
          educationalCredentialAwarded: 'Certificate of Completion',
          timeRequired: 'P8W'
        }
      ]
    }
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  )
}