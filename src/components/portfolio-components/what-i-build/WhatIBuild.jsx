import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SiWhatsapp } from 'react-icons/si';
import { TbRouteSquare } from 'react-icons/tb';
import { FiActivity, FiUsers } from 'react-icons/fi';

import style from './style_what_i_build.module.css';

const capabilities = [
    {
        icon: SiWhatsapp,
        title: 'WhatsApp integrations',
        description:
            'Connecting messaging platforms to WhatsApp through the official Meta Cloud API and through third-party providers such as Z-API: webhooks, message templates, session handling and delivery state.',
        tags: ['Meta Cloud API', 'Z-API', 'Webhooks'],
    },
    {
        icon: TbRouteSquare,
        title: 'Automation & flows',
        description:
            'Visual automation builders, where a trigger gives way to conditions and actions so that conversations continue without an agent having to respond to each message.',
        tags: ['Flow builders', 'Triggers'],
    },
    {
        icon: FiActivity,
        title: 'Real-time conversations',
        description:
            'Interactive chat that stays in sync: live message events, a shared inbox several agents can work from at once, and conversation state that stays consistent across clients.',
        tags: ['WebSockets', 'Live events'],
    },
    {
        icon: FiUsers,
        title: 'Contact management',
        description:
            'The data layer underneath the conversations: organising and segmenting contacts so automations can target the right audience instead of broadcasting to everyone.',
        tags: ['Segmentation', 'Contact data', 'Bulk sending'],
    },
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

    return (
        <main id="expertise" ref={ref} className={style.section}>
            <motion.div
                className={style.container}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className={style.header}>
                    <p className={style.eyebrow}>Domain expertise</p>
                    <h1 className={style.sectionTitle}>
                        What I <span className={style.gradientText}>build</span>
                    </h1>
                    <p className={style.sectionSubtitle}>
                        My day-to-day work is messaging automation over WhatsApp — the kind of
                        platform where businesses talk to their customers at scale.
                    </p>
                </div>

                <div className={style.grid}>
                    {capabilities.map((capability, index) => (
                        <CapabilityCard
                            key={capability.title}
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
