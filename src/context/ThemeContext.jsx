import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Default to dark mode
    const [theme, setTheme] = useState(() => {
        // Check if we're in browser environment
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('portfolio-theme');
            const initialTheme = savedTheme || 'dark';
            // Set theme immediately to prevent flash
            const htmlElement = document.documentElement;
            htmlElement.setAttribute('data-theme', initialTheme);
            htmlElement.classList.remove('light-theme', 'dark-theme');
            htmlElement.classList.add(`${initialTheme}-theme`);
            return initialTheme;
        }
        return 'dark';
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const htmlElement = document.documentElement;

            // Save to localStorage
            localStorage.setItem('portfolio-theme', theme);

            // Set data-theme attribute on html element
            htmlElement.setAttribute('data-theme', theme);

            // Also set on body for additional specificity
            document.body.setAttribute('data-theme', theme);

            console.log('Theme changed to:', theme);
            console.log('HTML data-theme:', htmlElement.getAttribute('data-theme'));
        }
    }, [theme]);

    const toggleTheme = () => {
        console.log('toggleTheme called, current theme:', theme);
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
            console.log('Toggling theme from', prevTheme, 'to', newTheme);
            return newTheme;
        });
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};
