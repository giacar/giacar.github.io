import React, { useState, useRef } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { FORMSPREE_PROJECT_ID, RECAPTCHA_SITE_KEY } from '../constants';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    
    // Check Recaptcha if specific manual validation is required,
    // otherwise Formspree checks the 'g-recaptcha-response' field automatically if included in FormData.
    const recaptchaResponse = formData.get('g-recaptcha-response');
    
    // Simple client-side check to ensure user interacted with captcha (if visual)
    if (!recaptchaResponse) {
       // Note: If using Invisible Recaptcha, this might need to be handled differently.
       // For standard checkbox v2, this is valid.
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_PROJECT_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        formRef.current?.reset();
        // Reset recaptcha if window.grecaptcha exists
        if ((window as any).grecaptcha) {
          try {
            (window as any).grecaptcha.reset();
          } catch (err) {
            // Ignore reset error
          }
        }
      } else {
        setStatus('error');
        if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
          setErrorMessage(data.errors.map((error: any) => error.message).join(", "));
        } else {
          setErrorMessage("Si è verificato un errore durante l'invio. Riprova più tardi.");
        }
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage("Errore di connessione. Controlla la tua rete.");
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center animate-fade-in">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Messaggio Inviato!</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Grazie per avermi contattato. Ti risponderò il prima possibile.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
        >
          Invia un altro messaggio
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Il tuo nome"
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="nome@esempio.com"
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Messaggio
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Scrivi qui il tuo messaggio..."
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
        />
      </div>

      {/* ReCaptcha Widget Container */}
      <div className="flex justify-start">
        <div 
          className="g-recaptcha" 
          data-sitekey={RECAPTCHA_SITE_KEY}
          data-theme="light" // Could be dynamic based on theme, but requires reload. Light usually works on both.
        ></div>
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-800">
          <AlertCircle size={20} />
          <p>{errorMessage || "Qualcosa è andato storto."}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-primary-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Invio in corso...
          </>
        ) : (
          <>
            <Send size={20} />
            Invia Messaggio
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;