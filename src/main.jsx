import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './Context/ThemeContext.jsx'

// Force update components when dark mode changes
const updateDarkModeStyles = () => {
  const isDark = document.documentElement.classList.contains('dark');
  // Force a re-render by dispatching a custom event
  window.dispatchEvent(new CustomEvent('darkmodechange', { detail: { isDark } }));
};

// Observe class changes on html element
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === 'class') {
      updateDarkModeStyles();
    }
  });
});

observer.observe(document.documentElement, { attributes: true });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
) 