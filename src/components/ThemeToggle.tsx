'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useSyncExternalStore } from 'react';

function getTheme(): 'dark' | 'light' {
  return localStorage.getItem('axsora_theme') === 'light' ? 'light' : 'dark';
}

function getServerTheme(): 'dark' | 'light' {
  return 'dark';
}

function subscribeToTheme(onChange: () => void) {
  window.addEventListener('axsora-theme-change', onChange);
  return () => window.removeEventListener('axsora-theme-change', onChange);
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, getServerTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('axsora_theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    window.dispatchEvent(new Event('axsora-theme-change'));
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      onClick={toggleTheme}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
