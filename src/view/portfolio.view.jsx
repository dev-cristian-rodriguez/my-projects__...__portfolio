import { useState, useEffect } from 'react';
import { GridLoader } from 'react-spinners';

// Components
import {
    AboutMe,
    Navbar,
    Footer,
    Skills,
    Education,
    Projects,
    WorkExperience,
} from '@/components/index.js';

export const Portfolio = () => {
    const [showPortfolio, setShowPortfolio] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowPortfolio(true);
        }, 2500);
    }, []);

    return showPortfolio ? (
        <>
            <Navbar />
            <AboutMe />
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
