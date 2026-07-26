import { useRef, useState, useId } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { SiMeta, SiSocketdotio } from 'react-icons/si';
import { TbWebhook } from 'react-icons/tb';
import style from './style_skills.module.css';

// Import images
import js from '@/assents/images/skills/icon-js.png';
import react from '@/assents/images/skills/icon-react.png';
import python from '@/assents/images/skills/icon-python.png';
import express from '@/assents/images/skills/express.png';
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
        { name: 'Express.js', icon: express },
        {
            name: 'NestJS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
        },
        { name: 'Python', icon: python },
        {
            name: 'FastAPI',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
        },
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
            // `services` turns any skill into an expandable card — add the same key to
            // another skill and it gets the badge and the strip for free.
            name: 'AWS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
            services: ['S3', 'Lambda', 'EC2', 'DynamoDB', 'CloudWatch', 'RDS'],
        },
    ],
};

const SkillCard = ({ skill, index, isActive, stripId, onOpen, onClose, onToggle }) => {
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

    const hasServices = Boolean(skill.services?.length);

    const body = (
        <>
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
            {hasServices && (
                <span className={style.serviceCount}>{skill.services.length} services</span>
            )}
        </>
    );

    const animation = {
        initial: { opacity: 0, y: 30 },
        animate: isInView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.5, delay: index * 0.1 },
        whileHover: { y: -5, scale: 1.02 },
    };

    // A card that reveals services is a real button: focusable, toggleable, announced
    if (hasServices) {
        return (
            <motion.button
                ref={ref}
                type="button"
                className={`${style.skillCard} ${style.skillCardInteractive} ${
                    isActive ? style.skillCardActive : ''
                }`}
                aria-expanded={isActive}
                aria-controls={stripId}
                // Hover-to-open is for mice only. Touch synthesises a pointerenter
                // right before the tap, which would open and then immediately toggle
                // shut — so on touch the tap alone drives it.
                onPointerEnter={(event) => {
                    if (event.pointerType === 'mouse') onOpen();
                }}
                onClick={onToggle}
                onKeyDown={(event) => {
                    if (event.key === 'Escape') onClose();
                }}
                {...animation}
            >
                {body}
            </motion.button>
        );
    }

    return (
        <motion.div ref={ref} className={style.skillCard} {...animation}>
            {body}
        </motion.div>
    );
};

const SkillCategory = ({ title, emoji, skills, isInView, entrance, delay }) => {
    const [activeSkill, setActiveSkill] = useState(null);
    const shouldReduceMotion = useReducedMotion();
    const stripId = `${useId()}-services`;

    const close = () => setActiveSkill(null);

    const toggle = (skill) => setActiveSkill((current) => (current === skill ? null : skill));

    return (
        <motion.div
            className={style.skillCategory}
            initial={{ opacity: 0, ...entrance }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
        >
            <h2 className={style.categoryTitle}>
                <span className={style.categoryIcon}>{emoji}</span> {title}
            </h2>

            {/* Leaving the whole group closes the strip, so moving the pointer
                from the card down onto the strip doesn't make it flicker shut */}
            <div
                onPointerLeave={(event) => {
                    if (event.pointerType === 'mouse') close();
                }}
            >
                <div className={style.skillsGrid}>
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={skill.name}
                            skill={skill}
                            index={index}
                            stripId={stripId}
                            isActive={activeSkill === skill}
                            onOpen={() => setActiveSkill(skill)}
                            onClose={close}
                            onToggle={() => toggle(skill)}
                        />
                    ))}
                </div>

                <AnimatePresence initial={false}>
                    {activeSkill && (
                        <motion.div
                            id={stripId}
                            className={style.serviceStrip}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                                duration: shouldReduceMotion ? 0 : 0.28,
                                ease: 'easeOut',
                            }}
                        >
                            <div className={style.serviceStripInner}>
                                <p className={style.serviceStripTitle}>
                                    {activeSkill.name} services I work with
                                </p>
                                <ul className={style.serviceList}>
                                    {activeSkill.services.map((service) => (
                                        <li key={service} className={style.serviceTag}>
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const categories = [
    {
        title: 'Frontend',
        emoji: '🎨',
        skills: skillsData.frontend,
        entrance: { x: -30 },
        delay: 0.2,
    },
    { title: 'Backend', emoji: '⚙️', skills: skillsData.backend, entrance: { x: 30 }, delay: 0.4 },
    {
        title: 'Messaging & Integrations',
        emoji: '💬',
        skills: skillsData.integrations,
        entrance: { x: -30 },
        delay: 0.6,
    },
    { title: 'Tools', emoji: '🛠️', skills: skillsData.tools, entrance: { y: 30 }, delay: 0.8 },
];

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
                {categories.map((category) => (
                    <SkillCategory key={category.title} {...category} isInView={isInView} />
                ))}
            </div>
        </main>
    );
}
