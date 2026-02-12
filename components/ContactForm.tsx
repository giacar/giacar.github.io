import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { FORMSPREE_PROJECT_ID, RECAPTCHA_SITE_KEY } from '../constants';
import { useLanguage } from './LanguageContext';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  // Track attempts to avoid infinite loops if script is blocked (e.g. adblock)
  const loadAttempts = useRef(0);
  
  const { t } = useLanguage();
  const labels = t.form;

  // Initialize Invisible ReCaptcha
  useEffect(() => {
    const loadCaptcha = () => {
      // If we tried too many times (approx 5 seconds), stop trying. 
      // This allows the form to degrade gracefully if blocked.
      if (loadAttempts.current > 10) return;

      if ((window as any).grecaptcha && (window as any).grecaptcha.render && recaptchaRef.current) {
        // Prevent multiple renders
        if (widgetIdRef.current !== null) return;

        try {
          widgetIdRef.current = (window as any).grecaptcha.render(recaptchaRef.current, {
            'sitekey': RECAPTCHA_SITE_KEY,
            'size': 'invisible', 
            'callback': (token: string) => {
              // Once captcha is verified, submit the form with the token
              submitFormWithToken(token);
            },
            'error-callback': () => {
               // If google service is down, allow trying without token
               console.warn("ReCaptcha service error");
            }
          });
        } catch (e) {
          console.error("Recaptcha render error:", e);
        }
      } else {
        // Retry if script hasn't loaded yet
        loadAttempts.current += 1;
        setTimeout(loadCaptcha, 500);
      }
    };

    loadCaptcha();
  }, []);

  const submitFormWithToken = async (token: string) => {
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    // Append the token manually to ensure Formspree receives it
    if (token) {
        formData.set('g-recaptcha-response', token);
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
        formRef.current.reset();
        // Reset recaptcha
        if (widgetIdRef.current !== null && (window as any).grecaptcha) {
          (window as any).grecaptcha.reset(widgetIdRef.current);
        }
      } else {
        setStatus('error');
        if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
          setErrorMessage(data.errors.map((error: any) => error.message).join(", "));
        } else {
          setErrorMessage(labels.error);
        }
        // Always reset captcha on error so user can try again
        if (widgetIdRef.current !== null && (window as any).grecaptcha) {
          (window as any).grecaptcha.reset(widgetIdRef.current);
        }
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(labels.networkError);
      if (widgetIdRef.current !== null && (window as any).grecaptcha) {
        (window as any).grecaptcha.reset(widgetIdRef.current);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // If ReCaptcha is loaded and rendered, execute it.
    if ((window as any).grecaptcha && widgetIdRef.current !== null) {
      (window as any).grecaptcha.execute(widgetIdRef.current);
    } else {
      // Fallback: If script blocked or failed to load, try submitting without token.
      // Formspree might accept it if their internal filters pass it.
      submitFormWithToken(''); 
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center animate-fade-in">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{labels.successTitle}</h3>
        <p className="text-gray-600 dark:text-gray-300">
          {labels.successMessage}
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
        >
          {labels.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {labels.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={labels.namePlaceholder}
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {labels.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={labels.emailPlaceholder}
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {labels.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={labels.messagePlaceholder}
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
        />
      </div>

      {/* Invisible ReCaptcha Container */}
      <div ref={recaptchaRef}></div>

      {status === 'error' && (
        <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-800">
          <AlertCircle size={20} />
          <p>{errorMessage || labels.error}</p>
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
            {labels.sending}
          </>
        ) : (
          <>
            <Send size={20} />
            {labels.submit}
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 text-center">
        {labels.privacy} <a href="https://policies.google.com/privacy" className="underline hover:text-blue-500" target="_blank" rel="noreferrer">Privacy Policy</a>, <a href="https://policies.google.com/terms" className="underline hover:text-blue-500" target="_blank" rel="noreferrer">Terms of Service</a>.
      </p>
    </form>
  );
};

export default ContactForm;