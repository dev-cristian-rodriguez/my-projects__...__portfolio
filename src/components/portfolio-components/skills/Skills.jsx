import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SiMeta, SiSocketdotio } from 'react-icons/si';
import { TbWebhook } from 'react-icons/tb';
import style from './style_skills.module.css';

// Import images
import js from '@/assents/images/skills/icon-js.png';
import react from '@/assents/images/skills/icon-react.png';
import python from '@/assents/images/skills/icon-python.png';
import django from '@/assents/images/skills/icon-django.jpg';
import postgresql from '@/assents/images/skills/icon-postgresql.png';
import zapi from '@/assents/images/skills/icon-zapi.png';

const skillsData = {
    frontend: [
        { name: 'JavaScript', icon: js },
        {
            name: 'Tailwind CSS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
        },
        { name: 'React', icon: react },
        {
            name: 'Next.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
        },
    ],
    backend: [
        {
            name: 'NestJS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
        },
        { name: 'Python', icon: python },
        { name: 'Django', icon: django },
        { name: 'PostgreSQL', icon: postgresql },
    ],
    // Messaging providers and event plumbing — the niche this portfolio speaks to.
    // These use react-icons components because several have no public logo asset.
    integrations: [
        { name: 'WhatsApp Cloud API', icon: SiMeta, accent: '#0467DF' },
        { name: 'Z-API', icon: zapi },
        { name: 'Webhooks', icon: TbWebhook },
        { name: 'WebSockets', icon: SiSocketdotio },
    ],
    tools: [
        {
            name: 'GitHub',
            icon: 'https://cdn.icon-icons.com/icons2/1476/PNG/512/github_101792.png',
        },
        {
            name: 'Postman',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
        },
        {
            name: 'Docker',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
        },
        {
            name: 'AWS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
        },
    ],
};

const SkillCard = ({ skill, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    // Check if this is the NestJS or AWS icon
    const isNestJsIcon = skill.name === 'NestJS';
    const isAWSIcon = skill.name === 'AWS';

    const iconClasses = [
        style.skillIcon,
        isNestJsIcon ? style.nestJsIcon : '',
        isAWSIcon ? style.awsIcon : '',
    ]
        .filter(Boolean)
        .join(' ');

    // Icons are either an image URL or a react-icons component
    const IconComponent = typeof skill.icon === 'string' ? null : skill.icon;

    return (
        <motion.div
            ref={ref}
            className={style.skillCard}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
        >
            <div className={style.skillIconContainer}>
                {IconComponent ? (
                    <IconComponent
                        className={style.skillIconComponent}
                        style={skill.accent ? { color: skill.accent } : undefined}
                        aria-hidden="true"
                    />
                ) : (
                    <img className={iconClasses} src={skill.icon} alt={skill.name} />
                )}
            </div>
            <h3 className={style.skillName}>{skill.name}</h3>
        </motion.div>
    );
};

export function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <main id="skills" ref={ref} className={style.skillsSection}>
            <motion.div
                className={style.sectionHeader}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h1 className={style.sectionTitle}>
                    Tools &amp; <span className={style.gradientText}>technologies</span>
                </h1>
            </motion.div>

            <div className={style.skillsContainer}>
                <motion.div
                    className={style.skillCategory}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className={style.categoryTitle}>
                        <span className={style.categoryIcon}>🎨</span> Frontend
                    </h2>
                    <div className={style.skillsGrid}>
                        {skillsData.frontend.map((skill, index) => (
                            <SkillCard key={skill.name} skill={skill} index={index} />
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className={style.skillCategory}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h2 className={style.categoryTitle}>
                        <span className={style.categoryIcon}>⚙️</span> Backend
                    </h2>
                    <div className={style.skillsGrid}>
                        {skillsData.backend.map((skill, index) => (
                            <SkillCard key={skill.name} skill={skill} index={index} />
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className={style.skillCategory}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h2 className={style.categoryTitle}>
                        <span className={style.categoryIcon}>💬</span> Messaging & Integrations
                    </h2>
                    <div className={style.skillsGrid}>
                        {skillsData.integrations.map((skill, index) => (
                            <SkillCard key={skill.name} skill={skill} index={index} />
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className={style.skillCategory}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <h2 className={style.categoryTitle}>
                        <span className={style.categoryIcon}>🛠️</span> Tools
                    </h2>
                    <div className={style.skillsGrid}>
                        {skillsData.tools.map((skill, index) => (
                            <SkillCard key={skill.name} skill={skill} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
