import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import style from './work-experience-style.module.css';

const workExperiences = [
    {
        id: 1,
        title: 'Frontend Developer',
        company: 'Funnelchat',
        period: 'Present',
        description:
            'I played a key role in developing essential features for Funnelchat, focusing on scalable and user-friendly solutions for WhatsApp contact management and automation. Using React, Tailwind CSS, and Node.js, I optimized workflows, integrated APIs, and built reusable components to enhance functionality and maintainability across the platform.',
    },
];

export const WorkExperience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

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
                        Work Experience
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
                                    <h3 className={style.jobTitle}>{experience.title}</h3>
                                    <h4 className={style.companyName}>{experience.company}</h4>
                                    <span className={style.period}>{experience.period}</span>
                                </div>

                                <div className={style.jobDescription}>
                                    <p>{experience.description}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </main>
    );
};
