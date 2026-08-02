import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en.json';
import es from './es.json';

export const SUPPORTED_LANGUAGES = ['en', 'es'];

// The query param is the shareable surface — localStorage only remembers what the
// visitor last chose, and navigator.language is the first-visit guess.
export const LANG_QUERY_PARAM = 'lang';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es },
        },
        supportedLngs: SUPPORTED_LANGUAGES,
        fallbackLng: 'en',
        // es-CO, es-419, en-GB all collapse onto their base language
        load: 'languageOnly',
        detection: {
            order: ['querystring', 'localStorage', 'navigator'],
            lookupQuerystring: LANG_QUERY_PARAM,
            // Same naming as the theme key already in localStorage
            lookupLocalStorage: 'portfolio-lang',
            caches: ['localStorage'],
        },
        // React escapes for us
        interpolation: { escapeValue: false },
        // Both dictionaries ship in the bundle, so there is nothing to await
        react: { useSuspense: false },
    });

export default i18n;
