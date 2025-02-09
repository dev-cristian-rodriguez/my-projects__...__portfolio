import { useState, useEffect } from 'react';

// Image
import me2 from '@/assents/images/about_me/me-2.png';

import style from './style_about_me.module.css';

export function AboutMe() {
    const [apparence, setApparence] = useState({
        opacity: '0.2',
        width: '48%',
        boxShadow: '0 2px 6px rgba(0, 2, 2, 1)',
    });

    useEffect(() => {
        if (apparence.opacity === '0.2' && apparence.width === '48%') {
            setTimeout(() => {
                setApparence({
                    opacity: '1',
                    width: '65%',
                    boxShadow: '0 2px 6px rgba(0, 2, 2, 1)',
                });
            }, 1000);
        }

        if (
            apparence.opacity === '1' &&
            apparence.width === '65%' &&
            apparence.boxShadow === '0 2px 6px rgba(0, 2, 2, 1)'
        ) {
            setTimeout(() => {
                setApparence({
                    opacity: '1',
                    width: '65%',
                    boxShadow: '0 6px 40px rgb(68, 68, 68)',
                });
            }, 1000);
        }
    }, [apparence]);

    return (
        <main id="about_me">
            <section className={style.containerAboutMe}>
                <img style={apparence} className={style.imgCristian} src={me2} alt="img" />

                <h1 className={style.name}>
                    <span style={{ color: 'rgb(110,7,243)', marginRight: '-8px' }}>F</span> rontend
                    and Backend Developer
                </h1>

                <p className={style.description}>
                    I design and code beautifully simple things and I love what I do.
                </p>

                <img
                    className={style.imgDesktops}
                    src="https://mattfarley.ca/img/hero-devices.svg"
                    alt="img"
                />
            </section>
        </main>
    );
}
