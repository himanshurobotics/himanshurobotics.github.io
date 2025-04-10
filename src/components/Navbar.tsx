
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeProvider';
import { Toggle } from '@/components/ui/toggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled 
          ? theme === 'dark' 
            ? 'bg-gray-900/95 shadow-md backdrop-blur-sm py-2' 
            : 'bg-white/95 shadow-md backdrop-blur-sm py-2'
          : theme === 'dark'
            ? 'bg-transparent py-4'
            : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" className="text-tech-blue dark:text-tech-accent font-bold text-2xl">
              Himanshu<span className="text-tech-darkblue dark:text-white">Varshney</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-tech-blue dark:hover:text-tech-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="ml-4">
              <Toggle 
                pressed={theme === 'dark'} 
                onPressedChange={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-700" />
                )}
              </Toggle>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Toggle 
              pressed={theme === 'dark'} 
              onPressedChange={toggleTheme}
              aria-label="Toggle theme"
              className="mr-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </Toggle>
            
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-tech-blue dark:hover:text-tech-accent hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-tech-blue dark:hover:text-tech-accent block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
