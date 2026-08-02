import { useState, useEffect } from 'react';
import { GridLoader } from 'react-spinners';
import { useTranslation } from 'react-i18next';

import { useLanguageSync } from '@/i18n/useLanguageSync.js';

// Components
import {
    AboutMe,
    Navbar,
    Footer,
    WhatIBuild,
    Skills,
    Projects,
    WorkExperience,
} from '@/components/index.js';

export const Portfolio = () => {
    const [showPortfolio, setShowPortfolio] = useState(false);
    const { t } = useTranslation();

    // Keeps <html lang>, the ?lang= param and the document head on the active language
    useLanguageSync();

    useEffect(() => {
        // Short brand moment only — a longer gate just makes the site feel slow
        const timer = setTimeout(() => {
            setShowPortfolio(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return showPortfolio ? (
        <>
            <a href="#about_me" className="skipLink">
                {t('a11y.skipToContent')}
            </a>
            <Navbar />
            <AboutMe />
            <WhatIBuild />
            <Skills />
            <WorkExperience />
            <Projects />
            <Footer />
        </>
    ) : (
        <div
            style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'var(--bg-primary)',
            }}
        >
            <GridLoader size={27} color="var(--accent-primary)" />
        </div>
    );
};
