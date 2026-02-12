import React from 'react';
import { SOCIALS } from '../constants';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { profile } = t;

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-400/20 blur-[100px] dark:bg-blue-600/20 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-purple-400/20 blur-[100px] dark:bg-purple-600/20 mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="mb-8 relative inline-block group">
           <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
           <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200 dark:bg-gray-800 border-4 border-white dark:border-gray-900 overflow-hidden mx-auto">
             {/* Placeholder Image */}
             <img 
               src="https://avatars.githubusercontent.com/u/34303206?v=4" 
               alt={profile.name} 
               className="w-full h-full object-cover"
             />
           </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            {profile.name}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light mb-8 max-w-2xl mx-auto">
          {profile.role}
        </p>

        <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-lg mx-auto leading-relaxed">
          {profile.tagline}
        </p>

        <div className="flex justify-center gap-6 mb-12">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <a 
          href="#experience" 
          className="inline-flex flex-col items-center text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce"
        >
          <span className="text-sm font-medium mb-1">{profile.cta}</span>
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;