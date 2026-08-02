import { useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SiWhatsapp } from 'react-icons/si';
import { TbRouteSquare } from 'react-icons/tb';
import { FiActivity, FiUsers } from 'react-icons/fi';

import style from './style_what_i_build.module.css';

// Only the icon and the identity live here — the copy comes from the dictionary
const capabilityIcons = [
    { id: 'whatsapp', icon: SiWhatsapp },
    { id: 'automation', icon: TbRouteSquare },
    { id: 'realtime', icon: FiActivity },
    { id: 'contacts', icon: FiUsers },
];

const CapabilityCard = ({ capability, index, isInView }) => {
    const Icon = capability.icon;

    return (
        <motion.article
            className={style.card}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -6 }}
        >
            <span className={style.iconWrapper}>
                <Icon className={style.icon} aria-hidden="true" />
            </span>

            <h3 className={style.cardTitle}>{capability.title}</h3>
            <p className={style.cardText}>{capability.description}</p>

            <ul className={style.tagList}>
                {capability.tags.map((tag) => (
                    <li key={tag} className={style.tag}>
                        {tag}
                    </li>
                ))}
            </ul>
        </motion.article>
    );
};

export function WhatIBuild() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const { t, i18n } = useTranslation();

    const capabilities = useMemo(
        () =>
            capabilityIcons.map(({ id, icon }) => ({
                id,
                icon,
                title: t(`expertise.cards.${id}.title`),
                description: t(`expertise.cards.${id}.description`),
                tags: t(`expertise.cards.${id}.tags`, { returnObjects: true }),
            })),
        [t, i18n.resolvedLanguage]
    );

    return (
        <main id="expertise" ref={ref} className={style.section}>
            <motion.div
                className={style.container}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className={style.header}>
                    <p className={style.eyebrow}>{t('expertise.eyebrow')}</p>
                    <h1 className={style.sectionTitle}>
                        {t('expertise.title.pre')}
                        <span className={style.gradientText}>{t('expertise.title.accent')}</span>
                        {t('expertise.title.post')}
                    </h1>
                    <p className={style.sectionSubtitle}>{t('expertise.subtitle')}</p>
                </div>

                <div className={style.grid}>
                    {capabilities.map((capability, index) => (
                        <CapabilityCard
                            key={capability.id}
                            capability={capability}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>
            </motion.div>
        </main>
    );
}
