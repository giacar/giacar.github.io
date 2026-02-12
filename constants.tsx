import { TimelineItemData, NavItem } from './types';
import { Briefcase, GraduationCap, Github, Linkedin, Mail } from 'lucide-react';

// IMPORTANT: Replace these with your actual keys
export const FORMSPREE_PROJECT_ID = "YOUR_FORMSPREE_ID"; // e.g., "mqknoqle" or full URL end part
export const RECAPTCHA_SITE_KEY = "YOUR_RECAPTCHA_SITE_KEY"; // Get this from Google Admin Console

export const PROFILE = {
  name: "Gianmarco Cariggi",
  role: "IT Consultant",
  tagline: "Sviluppo soluzioni innovative e trasformo idee complesse in codice pulito ed efficiente.",
  socials: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/gianmarco-cariggi", // Add your real URL
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: "GitHub",
      url: "https://github.com/", // Add your real URL
      icon: <Github className="w-5 h-5" />
    },
    {
      name: "Email",
      url: "mailto:gianmarco.cariggi@example.com",
      icon: <Mail className="w-5 h-5" />
    }
  ]
};

export const NAVIGATION: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Esperienza', href: '#experience' },
  { label: 'Certificazioni', href: '#certifications' },
  { label: 'Formazione', href: '#education' },
  { label: 'Contatti', href: '#contact' },
];

export const EXPERIENCE_DATA: TimelineItemData[] = [
  {
    id: 'exp-1',
    title: 'IT Consultant',
    organization: 'Technology Reply Roma',
    date: '04/2022 - Presente',
    location: 'Roma, Italia',
    description: 'Consulenza tecnica, sviluppo software e progettazione di architetture enterprise per clienti corporate.',
    iconType: 'work',
    tags: ['Java', 'Spring Boot', 'Microservices', 'Cloud']
  }
];

export const CERTIFICATIONS_DATA: TimelineItemData[] = [
  {
    id: 'cert-1',
    title: 'Oracle Certified Associate, Java SE 8 Programmer',
    organization: 'Oracle',
    date: '2022',
    iconType: 'certification',
    tags: ['Java', 'OOP', 'API']
  },
  {
    id: 'cert-2',
    title: 'MongoDB Associate Developer',
    organization: 'MongoDB',
    date: '2022',
    iconType: 'certification',
    tags: ['NoSQL', 'Database', 'Data Modeling']
  },
  {
    id: 'cert-3',
    title: 'Cambridge English Level B1',
    organization: 'Cambridge Assessment English',
    date: '2015',
    iconType: 'certification',
    tags: ['English', 'Communication']
  }
];

export const EDUCATION_DATA: TimelineItemData[] = [
  {
    id: 'edu-1',
    title: 'LM - Engineering in Computer Science',
    organization: 'Università La Sapienza di Roma',
    date: '2018 - 2022',
    iconType: 'education',
    tags: ['Artificial Intelligence', 'Software Engineering', 'Data Science']
  },
  {
    id: 'edu-2',
    title: 'L - Ingegneria Informatica e Automatica',
    organization: 'Università La Sapienza di Roma',
    date: '2015 - 2018',
    iconType: 'education',
    tags: ['Computer Science', 'Automation', 'Robotics']
  }
];