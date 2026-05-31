import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import style from './style_projects.module.css';

// Images
import aiAssistantChatBot from '@/assents/images/projects/ai-assistant-chat-bot.png';
import blogHub from '@/assents/images/projects/bloghub.png';
import bbc_news from '@/assents/images/projects/bbc-news.png';
import rijksmuseum from '@/assents/images/projects/rijksmuseum.jpeg';

const projects = [
    {
        id: 1,
        title: 'AI Assistant',
        description:
            'As an AI assistant chatbot, I help you communicate better with your customers, I also give you some information about me, my skills and my projects.',
        image: aiAssistantChatBot,
        github: 'https://github.com/dev-cristian-rodriguez/personal-ai-assistant-nest',
        live: 'https://personal-ai-assistant-react.onrender.com',
        tech: ['NestJS', 'React', 'TypeScript', 'PostgreSQL', 'OpenAI API'],
        featured: false,
    },
    {
        id: 2,
        title: 'BlogHub',
        description:
            'BlogHub is a complete blogging platform developed on the Frontend with (React | Vite) and Backend with (Python | Django | PostgreSQL) that combines features of user registration, login, automatic emails, blog creation and management, social interaction and more.',
        image: blogHub,
        github: 'https://github.com/dev-cristian-rodriguez/impact-x__...__frontend-react',
        live: 'https://impact-x.onrender.com',
        tech: ['React', 'Django', 'PostgreSQL', 'Python'],
        featured: true,
    },
    {
        id: 3,
        title: 'Rijksmuseum',
        description:
            "This app lets you explore the museum's major works of art, select your favorites, and save them to a database for later viewing. Discover and enjoy art in an interactive and personalized way.",
        image: rijksmuseum,
        github: 'https://github.com/dev-cristian-rodriguez/my-projects__...__rijksmuseum',
        live: 'https://rijksmuseum-app.onrender.com',
        tech: ['Next.js', 'TailwindCSS', 'PostgreSQL', 'API'],
        featured: true,
    },
    {
        id: 4,
        title: 'BBC News',
        description:
            'News portal that consumes the News API to display up-to-date information. It uses Vite and React and includes the home page, a view with top stories, and a view with news filters by category, search, and date.',
        image: bbc_news,
        github: 'https://github.com/dev-cristian-rodriguez/my-projects__...__news-frontend-application',
        live: 'https://api-news-v2.onrender.com',
        tech: ['React', 'Vite', 'API', 'JavaScript'],
        featured: true,
    },
];

const ProjectCard = ({ project, index, isInView }) => {
    const cardRef = useRef(null);

    return (
        <motion.article
            ref={cardRef}
            className={style.projectCard}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -8 }}
        >
            <div className={style.imageWrapper}>
                <img className={style.projectImage} src={project.image} alt={project.title} />
                <div className={style.imageOverlay}>
                    <div className={style.techTags}>
                        {project.tech.map((tech) => (
                            <span key={tech} className={style.techTag}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className={style.cardContent}>
                <h2 className={style.projectTitle}>{project.title}</h2>
                <p className={style.projectDescription}>{project.description}</p>

                <div className={style.cardActions}>
                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className={style.projectLink}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FiGithub size={20} />
                        <span>Code</span>
                    </motion.a>
                    <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className={`${style.projectLink} ${style.primaryLink}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FiExternalLink size={20} />
                        <span>Live</span>
                    </motion.a>
                </div>
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
                        <span className={style.gradientText}>Featured</span> Projects
                    </h1>
                    <p className={style.sectionSubtitle}>
                        A showcase of my recent work and projects
                    </p>
                </div>

                <div className={style.bentoGrid}>
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
