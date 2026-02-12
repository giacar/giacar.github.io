import React from 'react';
import { PROFILE } from '../constants';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 py-8 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-500 dark:text-gray-400 text-sm">
          © {currentYear} {PROFILE.name}. Tutti i diritti riservati.
        </div>
        
        <div className="flex gap-6">
          {PROFILE.socials.map((social) => {
            if (social.name === 'Email') return null; // Skip email in footer if preferred
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;