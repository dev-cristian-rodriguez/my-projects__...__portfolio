import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { LANG_QUERY_PARAM } from './index.js';

const setMetaContent = (selector, content) => {
    const element = document.head.querySelector(selector);
    if (element) element.setAttribute('content', content);
};

/**
 * Everything outside the React tree that has to follow the active language:
 * the html lang attribute, the shareable ?lang= param, and the document head
 * (title, description, Open Graph, Twitter card, JSON-LD).
 */
export const useLanguageSync = () => {
    const { t, i18n } = useTranslation();
    const language = i18n.resolvedLanguage;

    useEffect(() => {
        if (!language) return;

        document.documentElement.lang = language;

        // Keep the URL shareable in the language it is being read in
        const url = new URL(window.location.href);
        if (url.searchParams.get(LANG_QUERY_PARAM) !== language) {
            url.searchParams.set(LANG_QUERY_PARAM, language);
            window.history.replaceState(null, '', url);
        }

        document.title = t('meta.title');
        setMetaContent('meta[name="description"]', t('meta.description'));
        setMetaContent('meta[property="og:title"]', t('meta.ogTitle'));
        setMetaContent('meta[property="og:description"]', t('meta.ogDescription'));
        setMetaContent('meta[property="og:image:alt"]', t('meta.ogImageAlt'));
        setMetaContent('meta[property="og:locale"]', t('meta.ogLocale'));
        setMetaContent('meta[property="og:locale:alternate"]', t('meta.ogLocaleAlternate'));
        setMetaContent('meta[name="twitter:title"]', t('meta.ogTitle'));
        setMetaContent('meta[name="twitter:description"]', t('meta.ogDescription'));

        const jsonLd = document.head.querySelector('script[type="application/ld+json"]');
        if (jsonLd) {
            try {
                const data = JSON.parse(jsonLd.textContent);
                data.description = t('meta.jsonLdDescription');
                data.jobTitle = t('meta.jobTitle');
                jsonLd.textContent = JSON.stringify(data, null, 4);
            } catch {
                // A malformed block is not worth taking the page down for
            }
        }
    }, [language, t]);

    return language;
};
