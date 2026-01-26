import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CiMemoPad } from 'react-icons/ci';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { FiMail, FiFileText } from 'react-icons/fi';

import style from './style_footer.module.css';

const socialLinks = [
    {
        icon: AiFillFacebook,
        href: 'https://www.facebook.com/cristian.rodriguezbenitez.5/',
        label: 'Facebook',
    },
    {
        icon: AiFillLinkedin,
        href: 'https://www.linkedin.com/in/rodriguezbenitez/',
        label: 'LinkedIn',
    },
    { icon: AiFillGithub, href: 'https://github.com/dev-cristian-rodriguez', label: 'GitHub' },
    {
        icon: AiOutlineInstagram,
        href: 'https://www.instagram.com/cristianrodriguez0102/',
        label: 'Instagram',
    },
];

export function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

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
                    <h1 className={style.contactTitle}>Let's talk!</h1>
                    <p className={style.contactDescription}>
                        Contact me to start your web development project and I will make your vision
                        come true.
                    </p>
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
                        <span>Contact</span>
                    </motion.a>

                    <motion.a
                        href="https://drive.google.com/file/d/16xj_x1LQuVjZxxn9mAl1NjKTEzoePi6H/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className={`${style.button} ${style.buttonCv}`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FiFileText />
                        <span>View CV</span>
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
                    I learn every day. <br /> What are you waiting for? Let's start working together
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
                    Created by Cristian Rodriguez <span>©</span> 2023 - 2026
                </p>
            </motion.section>
        </main>
    );
}
