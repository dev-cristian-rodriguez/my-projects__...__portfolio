import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import style from './style_skills.module.css';

// Import images
import js from '@/assents/images/skills/icon-js.png';
import react from '@/assents/images/skills/icon-react.png';
import python from '@/assents/images/skills/icon-python.png';
import django from '@/assents/images/skills/icon-django.jpg';
import postgresql from '@/assents/images/skills/icon-postgresql.png';

const skillsData = {
    frontend: [
        { name: 'JavaScript', icon: js },
        { name: 'React', icon: react },
        {
            name: 'Vue.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
        },
        {
            name: 'Next.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
        },
    ],
    backend: [
        { name: 'Python', icon: python },
        { name: 'Django', icon: django },
        {
            name: 'Express',
            icon: 'https://simpleicons.org/icons/express.svg',
        },
        { name: 'PostgreSQL', icon: postgresql },
    ],
    tools: [
        {
            name: 'GitHub',
            icon: 'https://cdn.icon-icons.com/icons2/1476/PNG/512/github_101792.png',
        },
        {
            name: 'AWS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
        },
        {
            name: 'Docker',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
        },
        {
            name: 'Linux',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
        },
    ],
};

const SkillCard = ({ skill, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    // Check if this is the Express or AWS icon
    const isExpressIcon = skill.name === 'Express';
    const isAWSIcon = skill.name === 'AWS';

    const iconClasses = [
        style.skillIcon,
        isExpressIcon ? style.expressIcon : '',
        isAWSIcon ? style.awsIcon : '',
    ]
        .filter(Boolean)
        .join(' ');

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
                <img className={iconClasses} src={skill.icon} alt={skill.name} />
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
                className={style.containerOfMyPresentation}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <h1 className={style.title}>Hello, I am Cristian Rodriguez</h1>
                <p className={style.text}>
                    As a web developer, I have solid experience in creating and maintaining web
                    applications. My experience covers both the client side (frontend) and the
                    server side (backend), optimal management of version control with git and
                    github, knowledge and basic management of the cloud with AWS. This allows me to
                    approach projects in a comprehensive and optimal way.
                </p>
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
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
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
