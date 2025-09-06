import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevOps Mastery Course - CI/CD, Kubernetes & Docker Training | Tech EduVate',
  description: 'Master DevOps with our comprehensive 10-week course covering CI/CD pipelines, Kubernetes, Docker, infrastructure as code with Terraform, and monitoring with Prometheus & Grafana.',
  keywords: 'DevOps course, CI/CD training, Kubernetes certification, Docker training, Jenkins, GitLab CI, Terraform, Ansible, Prometheus, Grafana, infrastructure as code',
  openGraph: {
    title: 'DevOps Mastery Course - Complete CI/CD & Kubernetes Training',
    description: 'Transform your career with comprehensive DevOps training. Learn Docker, Kubernetes, CI/CD pipelines, and infrastructure automation.',
    url: 'https://techeduvate.com/courses/devops',
    images: [{
      url: '/courses/devops-og.jpg',
      width: 1200,
      height: 630,
      alt: 'DevOps Mastery Course - Docker, Kubernetes, CI/CD Training'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevOps Mastery Course - CI/CD, Kubernetes & Docker Training',
    description: 'Master DevOps with hands-on training in Docker, Kubernetes, CI/CD pipelines, and infrastructure automation.',
    images: ['/courses/devops-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://techeduvate.com/courses/devops',
  },
};

export default function DevOpsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}