import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TimelineItem from './components/TimelineItem';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { GOOGLE_ANALYTICS_ID } from './constants';
import { LanguageProvider, useLanguage } from './components/LanguageContext';

const AppContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-100 dark:selection:bg-blue-900/50">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Experience Section */}
        <section id="experience" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.titles.experience}
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto" />
          </div>
          
          <div className="relative">
            <div className="flex flex-col gap-0">
              {t.experience.map((item, index) => (
                <TimelineItem 
                  key={item.id} 
                  data={item} 
                  isLast={index === t.experience.length - 1} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 bg-white dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t.titles.certifications}
              </h2>
              <div className="w-20 h-1.5 bg-purple-500 rounded-full mx-auto" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {t.certifications.map((item) => (
                <TimelineItem 
                   key={item.id} 
                   data={item} 
                   isLast={true} // Removes the bottom line connector
                />
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-100 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t.titles.education}
              </h2>
              <div className="w-20 h-1.5 bg-emerald-500 rounded-full mx-auto" />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {t.education.map((item) => (
                <TimelineItem 
                   key={item.id} 
                   data={item} 
                   isLast={true} // Removes the bottom line connector for grid items
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
           <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-700">
             <div className="p-8 md:p-12">
               <div className="text-center mb-10">
                 <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                   {t.titles.contact}
                 </h2>
                 <p className="text-gray-600 dark:text-gray-400">
                   {t.titles.contactSubtitle}
                 </p>
               </div>
               
               <ContactForm />
             </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  // Initialize Google Analytics
  useEffect(() => {
    // Only inject if ID is configured and valid
    if (GOOGLE_ANALYTICS_ID && GOOGLE_ANALYTICS_ID.startsWith('G-')) {
      const scriptId = 'ga-script';
      
      // Prevent duplicate injection
      if (!document.getElementById(scriptId)) {
        // 1. Load the GTag script from Google
        const script = document.createElement('script');
        script.id = scriptId;
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
        document.head.appendChild(script);

        // 2. Initialize the GTag configuration
        const inlineScript = document.createElement('script');
        inlineScript.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ANALYTICS_ID}');
        `;
        document.head.appendChild(inlineScript);
      }
    }
  }, []);

  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;