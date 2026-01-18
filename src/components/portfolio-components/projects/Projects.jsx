import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import style from './style_projects.module.css';

// Images
import impactX from '@/assents/images/projects/impact-x.png';
import bbc_news from '@/assents/images/projects/bbc-news.png';
import calculator from '@/assents/images/projects/calculator.png';
import rijksmuseum from '@/assents/images/projects/rijksmuseum.jpeg';

const projects = [
    {
        id: 1,
        title: 'BBC News',
        description:
            'News portal that consumes the News API to display up-to-date information. It uses Vite and React and includes the home page, a view with top stories, and a view with news filters by category, search, and date.',
        image: bbc_news,
        github: 'https://github.com/dev-cristian-rodriguez/my-projects__...__news-frontend-application',
        live: 'https://api-news-v2.onrender.com',
        tech: ['React', 'Vite', 'API', 'JavaScript'],
        featured: true,
    },
    {
        id: 2,
        title: 'Rijksmuseum',
        description:
            "This app lets you explore the museum's major works of art, select your favorites, and save them to a database for later viewing. Discover and enjoy art in an interactive and personalized way.",
        image: rijksmuseum,
        github: 'https://github.com/dev-cristian-rodriguez/my-projects__...__rijksmuseum',
        live: 'https://rijksmuseum-app.onrender.com',
        tech: ['React', 'Django', 'PostgreSQL', 'API'],
        featured: true,
    },
    {
        id: 3,
        title: 'Impact X',
        description:
            'IMPACT X is a complete blogging platform developed on the Frontend with (React | Vite) and Backend with (Python | Django | PostgreSQL) that combines features of user registration, login, automatic emails, blog creation and management, social interaction and more.',
        image: impactX,
        github: 'https://github.com/dev-cristian-rodriguez/impact-x__...__frontend-react',
        live: 'https://impact-x.onrender.com',
        tech: ['React', 'Django', 'PostgreSQL', 'Python'],
        featured: true,
    },
    {
        id: 4,
        title: 'Calculator',
        description:
            'A Calculator designed with HTML, CSS and vanilla JavaScript using Vite, Designed with a functional and elegant interface providing precise mathematical operations and functions with the basic operations.',
        image: calculator,
        github: 'https://github.com/dev-cristian-rodriguez/my-projects__...__calculator',
        live: 'https://cristian-calculator-dev.onrender.com/',
        tech: ['JavaScript', 'HTML', 'CSS', 'Vite'],
        featured: false,
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
