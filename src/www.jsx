import reactDoom from 'react-dom/client';

// Import Portfolio and global styles
import { Portfolio } from '@/view/portfolio.view.jsx';
import { ThemeProvider } from '@/context/ThemeContext.jsx';
// Side-effect import: detects and initialises the language before the first render
import '@/i18n/index.js';
import './index.css';

reactDoom.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <Portfolio />
    </ThemeProvider>
);
