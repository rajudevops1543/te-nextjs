import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Microsoft Azure Expert Course - DevOps, AKS, Functions Training | Tech EduVate',
  description: 'Master Microsoft Azure with comprehensive training in Azure DevOps, AKS, Functions, Security, and Cloud Architecture. Prepare for Azure certifications in 11 weeks.',
  keywords: 'Azure training, Azure certification, Azure DevOps, AKS Kubernetes, Azure Functions, Azure security, cloud architecture, Microsoft Azure course',
  openGraph: {
    title: 'Microsoft Azure Expert Course - Complete Azure Cloud Training',
    description: 'Master Microsoft Azure with hands-on training in DevOps, AKS, Functions, and cloud architecture.',
    url: 'https://techeduvate.com/courses/azure',
    images: [{
      url: '/courses/azure-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Microsoft Azure Expert Course - DevOps, AKS, Functions Training'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Azure Expert Course - DevOps, AKS, Functions Training',
    description: 'Master Microsoft Azure with comprehensive training and prepare for Azure certification.',
    images: ['/courses/azure-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://techeduvate.com/courses/azure',
  },
};

export default function AzureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}