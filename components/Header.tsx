import React from 'react';
import { Theme } from '../types';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
  activePage: string;
  setActivePage: (page: string) => void;
}

const NavLink: React.FC<{ page: string; activePage: string; setActivePage: (page: string) => void; children: React.ReactNode }> = ({ page, activePage, setActivePage, children }) => {
    const isActive = activePage === page;
    return (
        <button
            onClick={() => setActivePage(page)}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
        >
            {children}
        </button>
    );
};

const ThemeSwitcher: React.FC<{ theme: Theme; toggleTheme: () => void; }> = ({ theme, toggleTheme }) => (
    <button
        onClick={toggleTheme}
        className="w-10 h-10 rounded-full p-2 flex items-center justify-center bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-200 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
        aria-label="Toggle theme"
    >
        {theme === 'light' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        )}
    </button>
);

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, activePage, setActivePage }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-slate-300/50 dark:border-slate-700/50">
          <div className="flex items-center gap-3 text-xl font-bold tracking-wider text-slate-800 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 12h8M12 8v8" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9.332c.523.004.95.43.945.954-.034 3.55-2.92 6.422-6.471 6.422-3.55 0-6.437-2.871-6.472-6.422-.005-.524.421-.95.945-.954.524.004.95.43.954.945.03 3.122 2.56 5.633 5.688 5.633 3.129 0 5.658-2.51 5.688-5.633.004-.515.43-.941.954-.945z" />
            </svg>
            <span>Futuristic Artistry</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="flex items-center space-x-1">
                <NavLink page="shop" activePage={activePage} setActivePage={setActivePage}>Shop</NavLink>
                <NavLink page="contact" activePage={activePage} setActivePage={setActivePage}>Contact</NavLink>
                <NavLink page="deployment" activePage={activePage} setActivePage={setActivePage}>Deployment Guide</NavLink>
            </nav>
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;