import { TimelineItemData, NavItem } from './types';
import { Briefcase, GraduationCap, Github, Linkedin, Mail } from 'lucide-react';

// API KEYS
export const FORMSPREE_PROJECT_ID = "xoqywayy"; 
export const RECAPTCHA_SITE_KEY = "6Lcnm2ksAAAAAHImPV5mM-S9bZc26lLoE23MDdKX";
export const GOOGLE_ANALYTICS_ID = "G-DYZPBD2GDV";

export const SOCIALS = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/gianmarco-cariggi",
    icon: <Linkedin className="w-5 h-5" />
  },
  {
    name: "GitHub",
    url: "https://github.com/giacar",
    icon: <Github className="w-5 h-5" />
  }
];

// Localized Content
export const CONTENT = {
  it: {
    profile: {
      name: "Gianmarco Cariggi",
      role: "IT Consultant",
      tagline: "Sviluppatore Backend e technology enthusiast.",
      cta: "Scopri di più"
    },
    nav: [
      { label: 'Home', href: '#home' },
      { label: 'Esperienze', href: '#experience' },
      { label: 'Certificazioni', href: '#certifications' },
      { label: 'Formazione', href: '#education' },
      { label: 'Contatti', href: '#contact' },
    ],
    titles: {
      experience: "Esperienze Lavorative",
      certifications: "Certificazioni",
      education: "Formazione",
      contact: "Contattami",
      contactSubtitle: "Hai un progetto in mente o vuoi semplicemente fare due chiacchiere? Compila il form qui sotto."
    },
    form: {
      name: "Nome",
      namePlaceholder: "Il tuo nome",
      email: "Email",
      emailPlaceholder: "nome@esempio.com",
      message: "Messaggio",
      messagePlaceholder: "Scrivi qui il tuo messaggio...",
      submit: "Invia Messaggio",
      sending: "Invio in corso...",
      successTitle: "Messaggio Inviato!",
      successMessage: "Grazie per avermi contattato. Ti risponderò il prima possibile.",
      sendAnother: "Invia un altro messaggio",
      error: "Si è verificato un errore durante l'invio. Riprova più tardi.",
      networkError: "Errore di connessione. Controlla la tua rete.",
      privacy: "Questo sito è protetto da reCAPTCHA e si applicano la Privacy Policy e i Termini di Servizio di Google."
    },
    experience: [
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
    ] as TimelineItemData[],
    certifications: [
      {
        id: 'cert-1',
        title: 'MongoDB Associate Developer',
        organization: 'MongoDB',
        date: '2026',
        iconType: 'certification',
        tags: ['NoSQL', 'Database', 'Data Modeling']
      },
      {
        id: 'cert-2',
        title: 'Oracle Certified Associate, Java SE 8 Programmer',
        organization: 'Oracle',
        date: '2024',
        iconType: 'certification',
        tags: ['Java', 'OOP', 'OCA']
      },
      {
        id: 'cert-3',
        title: 'Cambridge B1 Intermediate',
        organization: 'Cambridge English',
        date: '2023',
        iconType: 'certification',
        tags: ['English']
      }
    ] as TimelineItemData[],
    education: [
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
        tags: ['Computer Science', 'Automation']
      }
    ] as TimelineItemData[]
  },
  en: {
    profile: {
      name: "Gianmarco Cariggi",
      role: "IT Consultant",
      tagline: "Backend developer and technology enthusiast.",
      cta: "Learn more"
    },
    nav: [
      { label: 'Home', href: '#home' },
      { label: 'Experience', href: '#experience' },
      { label: 'Certifications', href: '#certifications' },
      { label: 'Education', href: '#education' },
      { label: 'Contact', href: '#contact' },
    ],
    titles: {
      experience: "Work Experience",
      certifications: "Certifications",
      education: "Education",
      contact: "Contact Me",
      contactSubtitle: "Have a project in mind or just want to chat? Fill out the form below."
    },
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "name@example.com",
      message: "Message",
      messagePlaceholder: "Write your message here...",
      submit: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent!",
      successMessage: "Thanks for reaching out. I'll get back to you as soon as possible.",
      sendAnother: "Send another message",
      error: "An error occurred while sending. Please try again later.",
      networkError: "Connection error. Please check your network.",
      privacy: "This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply."
    },
    experience: [
      {
        id: 'exp-1',
        title: 'IT Consultant',
        organization: 'Technology Reply Roma',
        date: '04/2022 - Present',
        location: 'Rome, Italy',
        description: 'Technical consulting, software development, and enterprise architecture design for corporate clients.',
        iconType: 'work',
        tags: ['Java', 'Spring Boot', 'Microservices', 'Cloud']
      }
    ] as TimelineItemData[],
    certifications: [
      {
        id: 'cert-1',
        title: 'MongoDB Associate Developer',
        organization: 'MongoDB',
        date: '2026',
        iconType: 'certification',
        tags: ['NoSQL', 'Database', 'Data Modeling']
      },
      {
        id: 'cert-2',
        title: 'Oracle Certified Associate, Java SE 8 Programmer',
        organization: 'Oracle',
        date: '2024',
        iconType: 'certification',
        tags: ['Java', 'OOP', 'OCA']
      },
      {
        id: 'cert-3',
        title: 'Cambridge B1 Intermediate',
        organization: 'Cambridge English',
        date: '2023',
        iconType: 'certification',
        tags: ['English']
      }
    ] as TimelineItemData[],
    education: [
      {
        id: 'edu-1',
        title: 'Master\'s - Engineering in Computer Science',
        organization: 'Sapienza University of Rome',
        date: '2018 - 2022',
        iconType: 'education',
        tags: ['Artificial Intelligence', 'Software Engineering', 'Data Science']
      },
      {
        id: 'edu-2',
        title: 'Bachelor\'s - Computer and Control Engineering',
        organization: 'Sapienza University of Rome',
        date: '2015 - 2018',
        iconType: 'education',
        tags: ['Computer Science', 'Automation']
      }
    ] as TimelineItemData[]
  }
};
