import { useState, useEffect } from 'react';
import { GridLoader } from 'react-spinners';

// Components
import {
    AboutMe,
    Navbar,
    Footer,
    WhatIBuild,
    Skills,
    Education,
    Projects,
    WorkExperience,
} from '@/components/index.js';

export const Portfolio = () => {
    const [showPortfolio, setShowPortfolio] = useState(false);

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
                Skip to content
            </a>
            <Navbar />
            <AboutMe />
            <WhatIBuild />
            <Skills />
            <WorkExperience />
            <Education />
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
