import { useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import style from './style_projects.module.css';

// Images
import aiAssistantChatBot from '@/assents/images/projects/ai-assistant-chat-bot.webp';

// Everything language-independent: identity, artwork, links and tech names
const projectAssets = [
    {
        id: 'aiAssistant',
        image: aiAssistantChatBot,
        github: 'https://github.com/dev-cristian-rodriguez/personal-ai-assistant-nest',
        live: 'https://personal-ai-assistant.devcristianrodriguez.lat',
        tech: ['NestJS', 'React', 'TypeScript', 'PostgreSQL', 'OpenAI API'],
    },
];

const ProjectCard = ({ project, index, isInView }) => {
    const { t } = useTranslation();

    return (
        <motion.article
            className={style.projectCard}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 + index * 0.15 }}
        >
            <div className={style.imageWrapper}>
                <img
                    className={style.projectImage}
                    src={project.image}
                    alt={t('projects.imageAlt', { title: project.title })}
                    loading="lazy"
                    decoding="async"
                />
            </div>

            <div className={style.cardContent}>
                <span className={style.badge}>{project.badge}</span>

                <h2 className={style.projectTitle}>{project.title}</h2>
                <p className={style.projectDescription}>{project.description}</p>

                <ul
                    className={style.techTags}
                    aria-label={t('projects.techLabel', { title: project.title })}
                >
                    {project.tech.map((tech) => (
                        <li key={tech} className={style.techTag}>
                            {tech}
                        </li>
                    ))}
                </ul>

                <div className={style.cardActions}>
                    <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className={`${style.projectLink} ${style.primaryLink}`}
                        aria-label={t('projects.liveDemoAria', { title: project.title })}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <FiExternalLink size={20} aria-hidden="true" />
                        <span>{t('projects.liveDemo')}</span>
                    </motion.a>
                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className={style.projectLink}
                        aria-label={t('projects.sourceCodeAria', { title: project.title })}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <FiGithub size={20} aria-hidden="true" />
                        <span>{t('projects.sourceCode')}</span>
                    </motion.a>
                </div>
            </div>
        </motion.article>
    );
};

export function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const { t, i18n } = useTranslation();

    const projects = useMemo(
        () =>
            projectAssets.map((asset) => ({
                ...asset,
                badge: t(`projects.items.${asset.id}.badge`),
                title: t(`projects.items.${asset.id}.title`),
                description: t(`projects.items.${asset.id}.description`),
            })),
        [t, i18n.resolvedLanguage]
    );

    return (
        <main id="projects" ref={ref} className={style.projectsSection}>
            <motion.div
                className={style.container}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className={style.header}>
                    <h1 className={style.sectionTitle}>
                        {t('projects.title.pre')}
                        <span className={style.gradientText}>{t('projects.title.accent')}</span>
                        {t('projects.title.post')}
                    </h1>
                    <p className={style.sectionSubtitle}>{t('projects.subtitle')}</p>
                </div>

                <div className={style.showcase}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>
            </motion.div>
        </main>
    );
}
