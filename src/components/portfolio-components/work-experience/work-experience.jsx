import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import style from './work-experience-style.module.css';

const workExperiences = [
    {
        id: 1,
        title: 'Fullstack Developer',
        company: 'Funnelchat',
        period: 'Present',
        summary:
            'Funnelchat is a WhatsApp automation platform — the ManyChat category — where businesses manage their contacts, run automated conversation flows and answer customers from a shared inbox. I work across the product, from the messaging integrations up to the interfaces agents use every day.',
        highlights: [
            'Built WhatsApp integrations against the official Meta Cloud API and third-party providers such as Z-API, handling webhooks, message templates and delivery state.',
            'Developed automation flows where a trigger runs through conditions and actions, so conversations continue without an agent replying to every message.',
            'Worked on interactive chat backed by real-time events, keeping conversation state in sync across agents and clients.',
            'Built contact management and segmentation features so automations reach a targeted audience instead of every contact.',
            'Created reusable components and shared frontend libraries to keep the platform consistent and maintainable.',
        ],
        stack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Meta Cloud API', 'Z-API'],
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
                                    <p>{experience.summary}</p>

                                    <ul className={style.highlightList}>
                                        {experience.highlights.map((highlight) => (
                                            <li key={highlight} className={style.highlight}>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>

                                    <ul className={style.stackList} aria-label="Stack used">
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
