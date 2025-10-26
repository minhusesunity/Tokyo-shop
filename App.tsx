import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Deployment from './pages/Deployment';

type Tab = 'shop' | 'contact' | 'deployment';
export type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('shop');
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return (savedTheme as Theme) || 'light';
    }
    return 'light';
  });

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

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'shop' && <Shop />}
        {activeTab === 'contact' && <Contact />}
        {activeTab === 'deployment' && <Deployment />}
      </main>
    </div>
  );
};

export default App;