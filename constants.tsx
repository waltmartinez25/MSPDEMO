
import React from 'react';
import { 
  Server, 
  ShieldCheck, 
  Cloud, 
  Database, 
  Lock, 
  Monitor, 
  Zap, 
  Users, 
  Globe, 
  Headphones,
  CheckCircle2
} from 'lucide-react';
import { NavItem, Service, TeamMember, Project } from './types.ts';

export const COMPANY_NAME = "NexGen IT";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { 
    label: 'Services', 
    path: '/services',
    dropdown: [
      { label: 'Managed IT', path: '/services/managed-it' },
      { label: 'Cybersecurity', path: '/services/cybersecurity' },
      { label: 'Cloud Solutions', path: '/services/cloud-solutions' },
    ]
  },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'managed-it',
    slug: 'managed-it',
    title: 'Managed IT Services',
    description: 'Proactive management and 24/7 monitoring to ensure your operations never miss a beat.',
    icon: 'Server',
    features: [
      '24/7 Network Monitoring',
      'Remote Help Desk Support',
      'On-site Technical Support',
      'Backup & Disaster Recovery',
      'IT Strategy & Consulting'
    ],
    fullDescription: "Our Managed IT services act as an extension of your business. We don't just fix problems; we prevent them. By utilizing enterprise-level monitoring tools and a team of dedicated specialists, we ensure your infrastructure is optimized for performance and growth.",
    benefits: [
      "Reduced infrastructure downtime by up to 98%",
      "Predictable monthly IT spending",
      "Access to senior-level engineering talent",
      "Proactive security patching and updates"
    ],
    pricing: [
      {
        name: "Standard",
        price: "$499/mo",
        features: ["Remote Support", "Network Monitoring", "Antivirus Management"]
      },
      {
        name: "Professional",
        price: "$999/mo",
        features: ["All Standard", "On-site Support", "Strategic Planning", "Backups"],
        recommended: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        features: ["All Professional", "Dedicated Engineer", "Compliance Audits"]
      }
    ],
    faqs: [
      { question: "What is the typical response time?", answer: "Our standard response time for critical issues is under 15 minutes, with general support requests handled within 2 hours." },
      { question: "Do you offer after-hours support?", answer: "Yes, we provide 24/7/365 emergency support for all our Managed IT clients." }
    ]
  },
  {
    id: 'cybersecurity',
    slug: 'cybersecurity',
    title: 'Cybersecurity & Compliance',
    description: 'Advanced threat protection and rigorous compliance management to safeguard your digital assets.',
    icon: 'ShieldCheck',
    features: [
      'Endpoint Protection (EDR)',
      'Multi-Factor Authentication',
      'Compliance Audits (HIPAA/GDPR)',
      'Dark Web Monitoring',
      'Security Awareness Training'
    ],
    fullDescription: "In an era of evolving cyber threats, basic antivirus is no longer enough. We implement a layered security approach that covers everything from the perimeter to the individual endpoint, combined with robust compliance strategies.",
    benefits: [
      "Mitigate risk of ransomware and phishing",
      "Maintain regulatory compliance effortlessly",
      "Cultivate a security-aware culture",
      "Incident response readiness"
    ]
  },
  {
    id: 'cloud-solutions',
    slug: 'cloud-solutions',
    title: 'Cloud Solutions & Infrastructure',
    description: 'Scalable cloud architecture and seamless migrations tailored to your business growth.',
    icon: 'Cloud',
    features: [
      'Cloud Migration Strategy',
      'Microsoft 365 Optimization',
      'Azure & AWS Management',
      'Cloud Backup Solutions',
      'Hybrid Cloud Infrastructure'
    ],
    fullDescription: "Move your business to the future with scalable, flexible cloud solutions. We help you design, implement, and manage a cloud environment that lowers costs and increases accessibility for your remote workforce.",
    benefits: [
      "Infinite scalability as your business grows",
      "Enabled remote work collaboration",
      "Reduced on-premise hardware costs",
      "Enhanced disaster recovery capabilities"
    ]
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Marcus Vane",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "With over 20 years in enterprise IT, Marcus founded NexGen to bring high-level tech solutions to growing businesses.",
    certifications: ["CISSP", "PMP", "MBA"]
  },
  {
    name: "Elena Rodriguez",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Elena specializes in cloud architecture and secure systems design, previously leading infrastructure at major tech firms.",
    certifications: ["Azure Solutions Architect", "AWS Certified Professional"]
  },
  {
    name: "David Chen",
    role: "Director of Security",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "David ensures our clients stay ahead of the curve in the ever-shifting cybersecurity landscape.",
    certifications: ["CISM", "CEH", "CompTIA Security+"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Healthcare Network Revamp",
    client: "St. Mary's Clinic",
    industry: "Healthcare",
    category: "Managed IT",
    description: "Modernized a legacy server environment to support real-time patient data and HIPAA compliance.",
    results: ["100% HIPAA Compliance", "0% Downtime during migration", "30% reduction in support tickets"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&h=400&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Global Cloud Migration",
    client: "InnoTech Solutions",
    industry: "Manufacturing",
    category: "Cloud Solutions",
    description: "Successfully moved 500+ employees to a hybrid Azure cloud environment for global collaboration.",
    results: ["$50k annual hardware savings", "Enabled 100% remote work", "2x faster deployment of new software"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&h=400&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "FinTech Security Hardening",
    client: "Alpha Capital",
    industry: "Finance",
    category: "Cybersecurity",
    description: "Implemented multi-layered EDR and MFA across a high-stakes investment firm.",
    results: ["Zero security breaches reported", "Passed 3rd party audit with 99.8% score", "Comprehensive staff training"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&h=400&auto=format&fit=crop"
  }
];

export const getIcon = (name: string) => {
  const props = { className: "w-6 h-6" };
  switch (name) {
    case 'Server': return <Server {...props} />;
    case 'ShieldCheck': return <ShieldCheck {...props} />;
    case 'Cloud': return <Cloud {...props} />;
    case 'Database': return <Database {...props} />;
    case 'Lock': return <Lock {...props} />;
    case 'Monitor': return <Monitor {...props} />;
    case 'Zap': return <Zap {...props} />;
    case 'Users': return <Users {...props} />;
    case 'Globe': return <Globe {...props} />;
    case 'Headphones': return <Headphones {...props} />;
    case 'CheckCircle2': return <CheckCircle2 {...props} />;
    default: return <Server {...props} />;
  }
};
