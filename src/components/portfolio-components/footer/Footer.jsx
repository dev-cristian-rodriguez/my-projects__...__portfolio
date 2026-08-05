import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CiMemoPad } from 'react-icons/ci';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiMail, FiFileText } from 'react-icons/fi';

import style from './style_footer.module.css';

const socialLinks = [
    {
        icon: AiFillLinkedin,
        href: 'https://www.linkedin.com/in/rodriguezbenitez/',
        label: 'LinkedIn',
    },
    {
        icon: AiFillGithub,
        href: 'https://github.com/dev-cristian-rodriguez',
        label: 'GitHub',
    },
];

export function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const { t } = useTranslation();

    return (
        <main id="footer" ref={ref} className={style.footerSection}>
            {/* Contact Section */}
            <motion.section
                className={style.containerContact}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className={style.contactContent}>
                    <h1 className={style.contactTitle}>{t('footer.contactTitle')}</h1>
                    <p className={style.contactDescription}>{t('footer.contactDescription')}</p>
                </div>

                <div className={style.containerContactAndCvButtons}>
                    <motion.a
                        href="https://www.linkedin.com/in/rodriguezbenitez/"
                        target="_blank"
                        rel="noreferrer"
                        className={`${style.button} ${style.buttonContact}`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FiMail />
                        <span>{t('footer.contactButton')}</span>
                    </motion.a>

                    <motion.a
                        href="https://drive.google.com/file/d/1EY6KlcmyoKlZy21RTBWkQoVsm41uEyNQ/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className={`${style.button} ${style.buttonCv}`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FiFileText />
                        <span>{t('footer.cvButton')}</span>
                    </motion.a>
                </div>
            </motion.section>

            {/* Footer Section */}
            <motion.section
                className={style.containerFooter}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <motion.div
                    className={style.logoContainer}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    <CiMemoPad className={style.footerLogo} />
                </motion.div>

                <p className={style.footerText}>
                    {t('footer.taglineLine1')} <br /> {t('footer.taglineLine2')}
                </p>

                <aside className={style.containerIcons}>
                    {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                            <motion.a
                                key={social.label}
                                className={style.icon}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={social.label}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <IconComponent />
                            </motion.a>
                        );
                    })}
                </aside>

                <p className={style.creator}>
                    {t('footer.credit')} <span>©</span> 2023 - 2026
                </p>
            </motion.section>
        </main>
    );
}
