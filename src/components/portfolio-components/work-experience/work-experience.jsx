import { useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiBriefcase } from 'react-icons/fi';
import style from './work-experience-style.module.css';

// Logos
import funnelchatLogo from '@/assents/images/experience/funnelchat-logo.png';

// Stack names are proper nouns, so they stay out of the dictionary
const jobs = [
    {
        id: 'funnelchat',
        // The mark alone, not the wordmark — the full logo is white-on-transparent
        // and would disappear against the light theme
        logo: funnelchatLogo,
        website: 'https://funnelchat.com/',
        stack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Meta Cloud API', 'Z-API'],
    },
];

export const WorkExperience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const { t, i18n } = useTranslation();

    const workExperiences = useMemo(
        () =>
            jobs.map(({ id, logo, website, stack }) => ({
                id,
                logo,
                website,
                stack,
                title: t(`experience.jobs.${id}.title`),
                company: t(`experience.jobs.${id}.company`),
                period: t(`experience.jobs.${id}.period`),
                summary: t(`experience.jobs.${id}.summary`),
                highlights: t(`experience.jobs.${id}.highlights`, { returnObjects: true }),
            })),
        [t, i18n.resolvedLanguage]
    );

    return (
        <main className={style.workExperienceSection}>
            <motion.div
                className={style.container}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className={style.header}>
                    <h1 className={style.sectionTitle}>
                        <span className={style.iconWrapper}>
                            <FiBriefcase />
                        </span>
                        {t('experience.sectionTitle')}
                    </h1>
                </div>

                <div className={style.timeline}>
                    {workExperiences.map((experience, index) => (
                        <motion.div
                            key={experience.id}
                            className={style.timelineItem}
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className={style.timelineMarker}>
                                <div className={style.markerDot}></div>
                                <div className={style.markerLine}></div>
                            </div>

                            <motion.div
                                className={style.timelineContent}
                                whileHover={{ x: 10 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            >
                                <div className={style.jobHeader}>
                                    <motion.a
                                        href={experience.website}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={style.logoLink}
                                        aria-label={t('experience.visitWebsite', {
                                            company: experience.company,
                                        })}
                                        whileHover={{ scale: 1.06 }}
                                        whileTap={{ scale: 0.96 }}
                                    >
                                        <img
                                            className={style.companyLogo}
                                            src={experience.logo}
                                            alt={t('experience.companyLogoAlt', {
                                                company: experience.company,
                                            })}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </motion.a>

                                    <div className={style.jobHeaderText}>
                                        <h3 className={style.jobTitle}>{experience.title}</h3>
                                        <h4 className={style.companyName}>{experience.company}</h4>
                                        <span className={style.period}>{experience.period}</span>
                                    </div>
                                </div>

                                <div className={style.jobDescription}>
                                    <p>{experience.summary}</p>

                                    <ul className={style.highlightList}>
                                        {experience.highlights.map((highlight) => (
                                            <li key={highlight} className={style.highlight}>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>

                                    <ul
                                        className={style.stackList}
                                        aria-label={t('experience.stackLabel')}
                                    >
                                        {experience.stack.map((item) => (
                                            <li key={item} className={style.stackTag}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </main>
    );
};
