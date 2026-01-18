import Popup from 'reactjs-popup';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { GrBeacon } from 'react-icons/gr';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from '@/context/ThemeContext.jsx';

import style from './style_navbar.module.css';

export function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const onClickShowMenu = () => {
        setShowMenu(!showMenu);
    };

    const navigate = () => {
        setTimeout(() => {
            setShowMenu(false);
        }, 500);
    };

    const navItems = [
        { label: 'About me', href: '#about_me' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#footer' },
    ];

    return (
        <>
            {/* Mobile Navbar */}
            <section className={style.mobileNavbar}>
                <aside className={style.navIconToggle}>
                    <AiOutlineMenu
                        size={28}
                        className={style.menuIcon}
                        cursor={'pointer'}
                        onClick={onClickShowMenu}
                    />

                    <GrBeacon size={32} className={style.logo} />

                    <button
                        className={style.themeToggle}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleTheme();
                        }}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <BsSun size={24} /> : <BsMoon size={24} />}
                    </button>
                </aside>

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
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <button className={style.closeButton} onClick={() => setShowMenu(false)}>
                            <AiOutlineClose size={24} />
                        </button>
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.href}
                                onClick={navigate}
                                className={style.subMenuLinks}
                                href={item.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item.label}
                            </motion.a>
                        ))}
                    </motion.nav>
                </Popup>
            </section>

            {/* Desktop Navbar */}
            <section className={style.desktopNavbar}>
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                    <GrBeacon size={40} className={style.logo} />
                </motion.div>

                <nav className={style.desktopNavItems}>
                    {navItems.map((item) => (
                        <motion.a
                            key={item.href}
                            className={style.desktopNavItemsLinks}
                            href={item.href}
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                        >
                            {item.label}
                        </motion.a>
                    ))}
                    <motion.button
                        className={style.themeToggle}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleTheme();
                        }}
                        aria-label="Toggle theme"
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {theme === 'dark' ? <BsSun size={20} /> : <BsMoon size={20} />}
                    </motion.button>
                </nav>
            </section>
        </>
    );
}
