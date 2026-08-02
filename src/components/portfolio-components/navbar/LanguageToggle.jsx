import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { SUPPORTED_LANGUAGES } from '@/i18n/index.js';

import style from './style_navbar.module.css';

export function LanguageToggle() {
    const { t, i18n } = useTranslation();

    const current = i18n.resolvedLanguage;
    const next = SUPPORTED_LANGUAGES.find((language) => language !== current) ?? 'en';

    // Both the visible pill and the label describe the language you'd switch *to*.
    // The label is written in that language, so the button carries its `lang` too —
    // otherwise a screen reader reads "Cambiar a español" with an English voice.
    const label = t('a11y.switchToThisLanguage', { lng: next });

    return (
        <motion.button
            type="button"
            className={style.langToggle}
            onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                i18n.changeLanguage(next);
            }}
            aria-label={label}
            title={label}
            lang={next}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
        >
            <span aria-hidden="true">{t('language.shortLabel', { lng: next })}</span>
        </motion.button>
    );
}
