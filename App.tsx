import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TimelineItem from './components/TimelineItem';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { EXPERIENCE_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA } from './constants';

const App: React.FC = () => {
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
              Esperienza Lavorativa
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto" />
          </div>
          
          <div className="relative">
            <div className="flex flex-col gap-0">
              {EXPERIENCE_DATA.map((item, index) => (
                <TimelineItem 
                  key={item.id} 
                  data={item} 
                  isLast={index === EXPERIENCE_DATA.length - 1} 
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
                Certificazioni
              </h2>
              <div className="w-20 h-1.5 bg-purple-500 rounded-full mx-auto" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {CERTIFICATIONS_DATA.map((item) => (
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
                Formazione
              </h2>
              <div className="w-20 h-1.5 bg-emerald-500 rounded-full mx-auto" />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {EDUCATION_DATA.map((item) => (
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
                   Contattami
                 </h2>
                 <p className="text-gray-600 dark:text-gray-400">
                   Hai un progetto in mente o vuoi semplicemente fare due chiacchiere? Compila il form qui sotto.
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

export default App;