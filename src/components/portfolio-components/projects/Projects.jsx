// Images
import impactX from '@/assents/images/projects/impact-x.png';
import bbc_news from '@/assents/images/projects/bbc-news.png';
import calculator from '@/assents/images/projects/calculator.png';
import rijksmuseum from '@/assents/images/projects/rijksmuseum.jpeg';

import style from './style_projects.module.css';

export function Projects() {
    return (
        <main id="projects">
            <section className={style.container}>
                <aside className={style.containerTitle}>
                    <h1> Personal projects </h1>
                </aside>
                <aside className={style.containerProjects}>
                    <article className={style.containerItem}>
                        <div className={style.containerImg}>
                            <img className={style.Img} src={bbc_news} alt="img" />
                        </div>
                        <div>
                            <h2 className={style.titleProject}> 💢 BBC NEWS 💢</h2>
                            <p className={style.text}>
                                News portal that consumes the News API to display up-to-date
                                information. It uses Vite and React and includes the home page, a
                                view with top stories, and a view with news filters by category,
                                search, and date.
                            </p>

                            <a
                                href="https://github.com/dev-cristian-rodriguez/my-projects__...__news-frontend-application"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className={style.projectButton}>Git hub</button>
                            </a>
                            <a
                                href="https://api-news-v2.onrender.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className={style.projectButton}> Web </button>
                            </a>
                        </div>
                    </article>

                    <article className={style.containerItem}>
                        <div className={style.containerImg}>
                            <img className={style.Img} src={rijksmuseum} alt="img" />
                        </div>
                        <div>
                            <h2 className={style.titleProject}> 🖼️ RIJKSMUSEUM 🖼️ </h2>
                            <p className={style.text}>
                                This app lets you explore the museum's major works of art, select
                                your favorites, and save them to a database for later viewing.
                                Discover and enjoy art in an interactive and personalized way.
                            </p>

                            <a
                                href="https://github.com/dev-cristian-rodriguez/my-projects__...__rijksmuseum"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className={style.projectButton}> Git hub </button>
                            </a>
                            <a
                                href="https://rijksmuseum-app.onrender.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className={style.projectButton}> Web </button>
                            </a>
                        </div>
                    </article>

                    <article className={style.containerItem}>
                        <div className={style.containerImg}>
                            <img className={style.Img} src={impactX} alt="img" />
                        </div>
                        <div>
                            <h2 className={style.titleProject}> 🤖 IMPACT X 🤖 </h2>
                            <p className={style.text}>
                                IMPACT X is a complete blogging platform developed on the Frontend
                                with (React | Vite) and Backend with (Python | Django | PostgreSQL)
                                that combines features of user registration, login, automatic
                                emails, blog creation and management, social interaction and more.
                            </p>

                            <a
                                href="https://github.com/dev-cristian-rodriguez/impact-x__...__frontend-react"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className={style.projectButton}>Git hub</button>
                            </a>
                            <a
                                href="https://impact-x.onrender.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className={style.projectButton}> Web </button>
                            </a>
                        </div>
                    </article>

                    <article className={style.containerItem}>
                        <div className={style.containerImg}>
                            <img className={style.Img} src={calculator} alt="img" />
                        </div>
                        <div>
                            <h2 className={style.titleProject}> 📱 CALCULATOR 📱 </h2>
                            <p className={style.text}>
                                A Calculator designed with HTML, CSS and vanilla JavaScript using
                                Vite, Designed with a functional and elegant interface providing
                                precise mathematical operations and functions with the basic
                                operations.
                            </p>

                            <a
                                href="https://github.com/dev-cristian-rodriguez/my-projects__...__calculator"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className={style.projectButton}>Git hub</button>
                            </a>
                            <a
                                href="https://basic-calculator-xgn4.onrender.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className={style.projectButton}> Web </button>
                            </a>
                        </div>
                    </article>
                </aside>
            </section>
        </main>
    );
}
