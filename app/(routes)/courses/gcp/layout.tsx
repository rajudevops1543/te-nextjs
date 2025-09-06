import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Cloud Platform GCP Course - GKE, BigQuery, AI/ML Training | Tech EduVate',
  description: 'Master Google Cloud Platform with training in GKE, BigQuery, AI/ML Integration, and Google Cloud Architecture. Prepare for GCP certification in 10 weeks.',
  keywords: 'GCP training, Google Cloud certification, GKE Kubernetes, BigQuery, Vertex AI, Google Cloud architecture, AI ML training, cloud computing',
  openGraph: {
    title: 'Google Cloud Platform Course - Complete GCP Training with AI/ML',
    description: 'Master Google Cloud Platform with hands-on training in GKE, BigQuery, and AI/ML services.',
    url: 'https://techeduvate.com/courses/gcp',
    images: [{
      url: '/courses/gcp-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Google Cloud Platform Course - GKE, BigQuery, AI/ML Training'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Cloud Platform Course - GKE, BigQuery, AI/ML Training',
    description: 'Master Google Cloud Platform with comprehensive training and prepare for GCP certification.',
    images: ['/courses/gcp-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://techeduvate.com/courses/gcp',
  },
};

export default function GCPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}