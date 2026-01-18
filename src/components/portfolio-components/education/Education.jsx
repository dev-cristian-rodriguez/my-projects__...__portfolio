import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CiRouter, CiSettings, CiEdit } from 'react-icons/ci';

import style from './style_education.module.css';

const educationItems = [
    {
        icon: CiSettings,
        title: 'Web development',
        description:
            'With experience in web development using Django and React, I have created dynamic and engaging web applications. My focus is on designing modern, responsive and interactive pages. I look forward to expanding my skills and taking on new challenges in this field.',
    },
    {
        icon: CiRouter,
        title: 'Education',
        description:
            "With a bachelor's degree, I am currently studying Software Engineering at the renowned SENA, acquiring solid knowledge in application development, programming and project management. Excited to expand my training and apply skills in challenging projects.",
    },
    {
        icon: CiEdit,
        title: 'Hobbies',
        description:
            'In addition to my passion for technology and the technological future, I have a strong interest in learning new technologies and keeping up with the latest trends. My enthusiasm for exploring new horizons in the technological field drives me to continue learning and developing constantly.',
    },
];

export function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <main id="education" ref={ref} className={style.educationSection}>
            <motion.div
                className={style.container}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h1 className={style.parentTitle}>Knowledge</h1>

                <div className={style.cardsContainer}>
                    {educationItems.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                className={style.card}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                <div className={style.iconContainer}>
                                    <IconComponent className={style.icon} />
                                </div>
                                <h2 className={style.title}>{item.title}</h2>
                                <p className={style.text}>{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </main>
    );
}
