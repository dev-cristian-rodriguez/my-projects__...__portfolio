import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Image
import me2 from '@/assents/images/about_me/me-2.png';

import style from './style_about_me.module.css';

export function AboutMe() {
    const [apparence, setApparence] = useState({
        opacity: '0.2',
        width: '48%',
        boxShadow: '0 2px 6px rgba(0, 2, 2, 1)',
    });

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

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
        <main id="about_me" ref={ref} className={style.aboutMeSection}>
            <section className={style.containerAboutMe}>
                <motion.div
                    className={style.imageContainer}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.img
                        style={apparence}
                        className={style.imgCristian}
                        src={me2}
                        alt="Cristian Rodriguez"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    />
                    <div className={style.gradientBorder}></div>
                </motion.div>

                <motion.div
                    className={style.content}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h1 className={style.name}>
                        <span className={style.gradientText}>F</span>rontend and Backend Developer
                    </h1>

                    <p className={style.description}>
                        I design and code beautifully simple things and I love what I do.
                    </p>

                    <motion.div
                        className={style.devicesContainer}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <img
                            className={style.imgDesktops}
                            src="https://mattfarley.ca/img/hero-devices.svg"
                            alt="Devices"
                        />
                    </motion.div>
                </motion.div>
            </section>
        </main>
    );
}
