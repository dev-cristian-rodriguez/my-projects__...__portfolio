import Popup from 'reactjs-popup';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from '@/context/ThemeContext.jsx';

import style from './style_navbar.module.css';

const navItems = [
    { label: 'About me', href: '#about_me' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Skills', href: '#skills' },
    { label: 'Work', href: '#projects' },
    { label: 'Contact', href: '#footer' },
];

export function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [activeSection, setActiveSection] = useState('#about_me');
    const { theme, toggleTheme } = useTheme();

    // Highlight the section currently being read
    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.href.slice(1)))
            .filter(Boolean);

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const mostVisible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (mostVisible) setActiveSection(`#${mostVisible.target.id}`);
            },
            { rootMargin: '-25% 0px -45% 0px', threshold: [0.1, 0.3, 0.6] }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const onClickShowMenu = () => {
        setShowMenu(!showMenu);
    };

    const navigate = () => {
        setTimeout(() => {
            setShowMenu(false);
        }, 500);
    };

    const themeLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

    const logo = (
        <a
            href="#about_me"
            className={style.logoLink}
            aria-label="Cristian Rodriguez — back to top"
        >
            <img src="/logo.png" alt="" aria-hidden="true" className={style.logoImg} />
        </a>
    );

    return (
        <>
            {/* Mobile Navbar */}
            <header className={style.mobileNavbar}>
                <div className={style.navIconToggle}>
                    <button
                        type="button"
                        className={style.menuButton}
                        onClick={onClickShowMenu}
                        aria-label="Open navigation menu"
                        aria-expanded={showMenu}
                    >
                        <AiOutlineMenu size={28} className={style.menuIcon} aria-hidden="true" />
                    </button>

                    {logo}

                    <button
                        type="button"
                        className={style.themeToggle}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleTheme();
                        }}
                        aria-label={themeLabel}
                        title={themeLabel}
                    >
                        {theme === 'dark' ? (
                            <BsSun size={24} aria-hidden="true" />
                        ) : (
                            <BsMoon size={24} aria-hidden="true" />
                        )}
                    </button>
                </div>

                <Popup
                    modal
                    nested
                    lockScroll
                    open={showMenu}
                    onClose={() => setShowMenu(false)}
                    overlayStyle={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(8px)',
                    }}
                    position="center center"
                >
                    <motion.nav
                        className={style.subMenu}
                        aria-label="Main navigation"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <button
                            type="button"
                            className={style.closeButton}
                            onClick={() => setShowMenu(false)}
                            aria-label="Close navigation menu"
                        >
                            <AiOutlineClose size={24} aria-hidden="true" />
                        </button>
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.href}
                                onClick={navigate}
                                className={`${style.subMenuLinks} ${
                                    activeSection === item.href ? style.activeLink : ''
                                }`}
                                href={item.href}
                                aria-current={activeSection === item.href ? 'true' : undefined}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item.label}
                            </motion.a>
                        ))}
                    </motion.nav>
                </Popup>
            </header>

            {/* Desktop Navbar */}
            <header className={style.desktopNavbar}>
                <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                >
                    {logo}
                </motion.div>

                <nav className={style.desktopNavItems} aria-label="Main navigation">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.href}
                            className={`${style.desktopNavItemsLinks} ${
                                activeSection === item.href ? style.activeLink : ''
                            }`}
                            href={item.href}
                            aria-current={activeSection === item.href ? 'true' : undefined}
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                        >
                            {item.label}
                        </motion.a>
                    ))}
                    <motion.button
                        type="button"
                        className={style.themeToggle}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleTheme();
                        }}
                        aria-label={themeLabel}
                        title={themeLabel}
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {theme === 'dark' ? (
                            <BsSun size={20} aria-hidden="true" />
                        ) : (
                            <BsMoon size={20} aria-hidden="true" />
                        )}
                    </motion.button>
                </nav>
            </header>
        </>
    );
}
