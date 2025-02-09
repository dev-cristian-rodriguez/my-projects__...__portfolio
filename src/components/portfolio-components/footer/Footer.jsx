import { CiMemoPad } from 'react-icons/ci';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

import style from './style_footer.module.css';

export function Footer() {
    return (
        <main id="footer">
            <section className={style.containerContact}>
                <h1 style={{ whiteSpace: 'nowrap' }}> Let's talk! </h1>
                <p>
                    Contact me to start your web development project and I will make your vision
                    come true.
                </p>

                <div className={style.containerContactAndCvButtons}>
                    <a
                        href="https://www.linkedin.com/in/rodriguezbenitez/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className={style.buttonContact}>Contact</button>
                    </a>

                    <a
                        href="https://drive.google.com/file/d/1--dqLKRKajSvwTASzMiB1WXZd0y23EIj/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className={style.buttonCv}>View Cv</button>
                    </a>
                </div>
            </section>

            <section className={style.containerFooter}>
                <h1>
                    <CiMemoPad />
                </h1>
                <p>
                    I learn every day. <br /> What are you waiting for? Let's start working together
                </p>
                <aside className={style.containerIcons}>
                    <a
                        className={style.icon}
                        href="https://www.facebook.com/cristian.rodriguezbenitez.5/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillFacebook />
                    </a>
                    <a
                        className={style.icon}
                        href="https://www.linkedin.com/in/rodriguezbenitez/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillLinkedin />
                    </a>
                    <a
                        className={style.icon}
                        href="https://github.com/dev-cristian-rodriguez"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillGithub />
                    </a>
                    <a
                        className={style.icon}
                        href="https://www.instagram.com/cristianrodriguez0102/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiOutlineInstagram />
                    </a>
                </aside>
                <p className={style.creator}> Create by Cristian Rodriguez 2023 - 2024</p>
            </section>
        </main>
    );
}
