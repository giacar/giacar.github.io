# Gianmarco Cariggi - Portfolio Personale

Questo repository contiene il codice sorgente per il sito web portfolio personale di Gianmarco Cariggi. Il progetto è una Single Page Application (SPA) moderna, sviluppata con React e TypeScript, progettata per essere veloce, accessibile e facilmente ospitabile su servizi statici come GitHub Pages.

## ✨ Caratteristiche Principali

*   **Design Responsivo**: Layout fluido ottimizzato per dispositivi mobili, tablet e desktop.
*   **Tema Chiaro/Scuro**: Supporto nativo per la modalità scura con rilevamento automatico delle preferenze di sistema e toggle manuale.
*   **Sezioni Dettagliate**: 
    *   **Hero**: Introduzione con effetto visuale moderno.
    *   **Esperienza**: Timeline verticale delle esperienze lavorative.
    *   **Certificazioni**: Griglia delle certificazioni conseguite (Java, MongoDB, Cambridge).
    *   **Formazione**: Dettagli sul percorso accademico.
*   **Modulo di Contatto Sicuro**: 
    *   Integrazione con **Formspree** per l'invio di email serverless.
    *   Protezione antispam tramite **Google ReCaptcha**.
*   **Analytics**: Integrazione con Google Analytics 4.
*   **Stack Moderno**: Utilizzo delle ultime funzionalità di React e Tailwind CSS.

## 🛠️ Tecnologie Utilizzate

*   **Frontend**: React 19, TypeScript
*   **Styling**: Tailwind CSS (tramite CDN per semplicità di setup o build step)
*   **Icone**: Lucide React
*   **Servizi Esterni**: 
    *   Formspree (Gestione form)
    *   Google ReCaptcha (Sicurezza)
    *   Google Analytics (Statistiche)

## ⚙️ Configurazione

Per rendere funzionali i servizi esterni, è necessario configurare le chiavi API nel file `constants.tsx`.

1.  **Formspree (Invio Email)**:
    *   Crea un account su [Formspree.io](https://formspree.io/).
    *   Crea un nuovo form ("Contact Form").
    *   Copia l'ID del progetto (parte finale dell'URL di integrazione).
    *   Incolla l'ID nella variabile `FORMSPREE_PROJECT_ID`.

2.  **Google ReCaptcha (Antispam)**:
    *   Vai alla [Google ReCaptcha Admin Console](https://www.google.com/recaptcha/admin).
    *   Registra un nuovo sito scegliendo **v2 Checkbox**.
    *   Aggiungi i domini autorizzati (es. `localhost` per i test e `tuonome.github.io` per la produzione).
    *   Copia la **Chiave del sito** (Site Key).
    *   Incolla la chiave nella variabile `RECAPTCHA_SITE_KEY`.

3.  **Google Analytics (Statistiche)**:
    *   Crea una proprietà Google Analytics 4 (GA4).
    *   Ottieni il **Measurement ID** (formato `G-XXXXXXXXXX`).
    *   Incolla l'ID nella variabile `GOOGLE_ANALYTICS_ID`.

```typescript
// Esempio in constants.tsx
export const FORMSPREE_PROJECT_ID = "xybyqvoz"; 
export const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZZZRQ...";
export const GOOGLE_ANALYTICS_ID = "G-123456789";
```

## 🚀 Pubblicazione su GitHub Pages

Questo progetto è strutturato per funzionare come sito statico.

1.  Effettua il push del codice sul tuo repository GitHub (es. `nomeutente.github.io`).
2.  Vai nelle **Impostazioni** (Settings) del repository.
3.  Naviga alla sezione **Pages**.
4.  Sotto "Source", seleziona il branch `main` e la cartella `/ (root)`.
5.  Clicca su **Save**.

Il sito sarà visibile dopo pochi minuti all'URL fornito da GitHub.

## 📄 Licenza

Questo progetto è di proprietà di Gianmarco Cariggi.