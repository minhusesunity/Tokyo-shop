import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import { Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return (savedTheme as Theme) || 'light';
    }
    return 'light';
  });
  const [activePage, setActivePage] = useState('shop');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  const renderPage = () => {
    switch(activePage) {
        case 'shop':
            return <Shop />;
        case 'contact':
            return <Contact />;
        default:
            return <Shop />;
    }
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;