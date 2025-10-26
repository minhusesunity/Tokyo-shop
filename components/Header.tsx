import React from 'react';

type Tab = 'shop' | 'contact' | 'deployment';
type Theme = 'light' | 'dark';

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<{ theme: Theme; toggleTheme: () => void; }> = ({ theme, toggleTheme }) => (
    <button
        onClick={toggleTheme}
        className="w-10 h-10 rounded-full p-2 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        aria-label="Toggle theme"
    >
        {theme === 'light' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        )}
    </button>
);

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, theme, toggleTheme }) => {
  const linkClasses = (tab: Tab) => 
    `cursor-pointer transition-colors duration-300 ${activeTab === tab ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'}`;

  return (
    <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold tracking-widest uppercase">
            Kevin's Tokyo Shop
          </div>
          <nav className="flex items-center space-x-8">
            <div className="flex items-center space-x-8 text-sm font-medium tracking-wider uppercase">
                <a onClick={() => setActiveTab('shop')} className={linkClasses('shop')}>
                  Shop
                </a>
                <a onClick={() => setActiveTab('contact')} className={linkClasses('contact')}>
                  Contact
                </a>
                <a onClick={() => setActiveTab('deployment')} className={linkClasses('deployment')}>
                  Deployment
                </a>
            </div>
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;