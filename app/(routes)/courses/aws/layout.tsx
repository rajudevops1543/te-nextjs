import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AWS Cloud Professional Certification Course - EC2, S3, Lambda Training | Tech EduVate',
  description: 'Master Amazon Web Services with hands-on training in EC2, S3, Lambda, EKS, IAM, and advanced AWS services. Prepare for AWS certification with real-world projects in 12 weeks.',
  keywords: 'AWS training, AWS certification, EC2 course, S3 training, Lambda functions, EKS Kubernetes, IAM security, AWS networking, cloud architect, AWS solutions architect',
  openGraph: {
    title: 'AWS Cloud Professional Course - Complete Amazon Web Services Training',
    description: 'Master AWS cloud services with hands-on labs. Learn EC2, S3, Lambda, EKS, and prepare for AWS certification.',
    url: 'https://techeduvate.com/courses/aws',
    images: [{
      url: '/courses/aws-og.jpg',
      width: 1200,
      height: 630,
      alt: 'AWS Cloud Professional Course - EC2, S3, Lambda Training'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AWS Cloud Professional Course - EC2, S3, Lambda Training',
    description: 'Master Amazon Web Services with hands-on training and prepare for AWS certification.',
    images: ['/courses/aws-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://techeduvate.com/courses/aws',
  },
};

export default function AWSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}