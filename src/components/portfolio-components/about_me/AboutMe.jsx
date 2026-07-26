import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowDown, FiMail } from 'react-icons/fi';

// Image
import me2 from '@/assents/images/about_me/me-2.webp';

import style from './style_about_me.module.css';

const domainChips = ['WhatsApp Cloud API', 'Automation flows', 'Real-time messaging', 'Fullstack'];

export function AboutMe() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

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
                        className={style.imgCristian}
                        src={me2}
                        alt="Portrait of Cristian Rodriguez"
                        fetchpriority="high"
                        decoding="async"
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
                    <p className={style.eyebrow}>Cristian Rodriguez</p>

                    <h1 className={style.name}>
                        <span className={style.gradientText}>F</span>ullstack Developer
                    </h1>

                    <p className={style.description}>
                        I build messaging and automation platforms on top of WhatsApp — integrations
                        with the Meta Cloud API and third-party providers, automation flows, and
                        real-time conversations.
                    </p>

                    <ul className={style.domainChips} aria-label="Areas I work in">
                        {domainChips.map((chip) => (
                            <li key={chip} className={style.domainChip}>
                                {chip}
                            </li>
                        ))}
                    </ul>

                    <div className={style.ctaGroup}>
                        <motion.a
                            href="#projects"
                            className={`${style.cta} ${style.ctaPrimary}`}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <span>See my work</span>
                            <FiArrowDown size={18} aria-hidden="true" />
                        </motion.a>
                        <motion.a
                            href="#footer"
                            className={style.cta}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <FiMail size={18} aria-hidden="true" />
                            <span>Get in touch</span>
                        </motion.a>
                    </div>

                    <motion.div
                        className={style.devicesContainer}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <img
                            className={style.imgDesktops}
                            src="https://mattfarley.ca/img/hero-devices.svg"
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            decoding="async"
                        />
                    </motion.div>
                </motion.div>
            </section>
        </main>
    );
}
