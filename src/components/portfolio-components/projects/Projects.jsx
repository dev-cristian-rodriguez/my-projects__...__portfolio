import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiLock } from 'react-icons/fi';
import style from './style_projects.module.css';

// Images
import aiAssistantChatBot from '@/assents/images/projects/ai-assistant-chat-bot.webp';

const projects = [
    {
        id: 1,
        badge: 'Case study',
        title: 'WhatsApp automation platform',
        monogram: 'FC',
        description:
            'A platform in the ManyChat category, built with the team at Funnelchat: businesses connect their WhatsApp account, organise their contacts, and let automated flows carry conversations that agents pick up from a shared inbox when a human is needed. I work across the messaging integrations, the automation flows and the interfaces agents use daily.',
        tech: ['Meta Cloud API', 'Z-API', 'Real-time events', 'React', 'TypeScript', 'Node.js'],
        note: 'Private, commercial codebase — happy to walk through the architecture in a conversation.',
    },
    {
        id: 2,
        badge: 'Personal project',
        title: 'AI Assistant',
        description:
            'As an AI assistant chatbot, I help you communicate better with your customers, I also give you some information about me, my skills and my projects.',
        image: aiAssistantChatBot,
        github: 'https://github.com/dev-cristian-rodriguez/personal-ai-assistant-nest',
        live: 'https://personal-ai-assistant-react.onrender.com',
        tech: ['NestJS', 'React', 'TypeScript', 'PostgreSQL', 'OpenAI API'],
    },
];

const ProjectCard = ({ project, index, isInView }) => {
    const hasLinks = Boolean(project.github || project.live);

    return (
        <motion.article
            className={style.projectCard}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 + index * 0.15 }}
        >
            {project.image ? (
                <div className={style.imageWrapper}>
                    <img
                        className={style.projectImage}
                        src={project.image}
                        alt={`${project.title} project artwork`}
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            ) : (
                <div className={style.monogramWrapper} aria-hidden="true">
                    <span className={style.monogram}>{project.monogram}</span>
                </div>
            )}

            <div className={style.cardContent}>
                <span className={style.badge}>{project.badge}</span>

                <h2 className={style.projectTitle}>{project.title}</h2>
                <p className={style.projectDescription}>{project.description}</p>

                <ul className={style.techTags} aria-label={`Tech stack used in ${project.title}`}>
                    {project.tech.map((tech) => (
                        <li key={tech} className={style.techTag}>
                            {tech}
                        </li>
                    ))}
                </ul>

                {hasLinks ? (
                    <div className={style.cardActions}>
                        <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className={`${style.projectLink} ${style.primaryLink}`}
                            aria-label={`Open the live demo of ${project.title} in a new tab`}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <FiExternalLink size={20} aria-hidden="true" />
                            <span>Live demo</span>
                        </motion.a>
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className={style.projectLink}
                            aria-label={`View the source code of ${project.title} on GitHub in a new tab`}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <FiGithub size={20} aria-hidden="true" />
                            <span>Source code</span>
                        </motion.a>
                    </div>
                ) : (
                    <p className={style.privateNote}>
                        <FiLock size={16} aria-hidden="true" />
                        <span>{project.note}</span>
                    </p>
                )}
            </div>
        </motion.article>
    );
};

export function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

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
                        <span className={style.gradientText}>Featured</span> Work
                    </h1>
                    <p className={style.sectionSubtitle}>
                        The platform I build professionally, and a project of my own
                    </p>
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
