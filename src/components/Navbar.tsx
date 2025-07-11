
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeProvider';
import { Toggle } from '@/components/ui/toggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'awards', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Awards', href: '#awards', id: 'awards' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled 
          ? theme === 'dark' 
            ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm py-2 border-b border-tech-blue/20' 
            : 'bg-white/95 shadow-lg backdrop-blur-sm py-2 border-b border-tech-blue/20'
          : theme === 'dark'
            ? 'bg-transparent py-4'
            : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavClick('#home')} 
              className="text-tech-blue dark:text-tech-accent font-bold text-2xl flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <Cpu className="w-8 h-8 animate-pulse" />
              Himanshu<span className="text-tech-darkblue dark:text-white">Varshney</span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 relative group",
                    activeSection === item.id
                      ? "text-tech-blue dark:text-tech-accent bg-tech-blue/10 dark:bg-tech-accent/10 shadow-sm"
                      : "text-gray-700 dark:text-gray-300 hover:text-tech-blue dark:hover:text-tech-accent hover:bg-tech-blue/10 dark:hover:bg-tech-accent/10"
                  )}
                >
                  {item.name}
                  <div className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-tech-blue dark:bg-tech-accent transition-transform duration-300 origin-left",
                    activeSection === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}></div>
                  {activeSection === item.id && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-tech-blue dark:bg-tech-accent rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
            
            <div className="ml-4">
              <Toggle 
                pressed={theme === 'dark'} 
                onPressedChange={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-tech-blue/10 dark:hover:bg-tech-accent/10 transition-all duration-300 hover:scale-105"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-yellow-500 animate-pulse" />
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
              className="mr-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-105 transition-transform duration-300"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </Toggle>
            
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-tech-blue dark:hover:text-tech-accent hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-all duration-300 hover:scale-105"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6 animate-spin" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-gray-900/95 shadow-lg backdrop-blur-sm border-t border-tech-blue/20">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 hover:scale-105",
                "animate-slide-in-left",
                activeSection === item.id
                  ? "text-tech-blue dark:text-tech-accent bg-tech-blue/10 dark:bg-tech-accent/10"
                  : "text-gray-700 dark:text-gray-300 hover:text-tech-blue dark:hover:text-tech-accent hover:bg-tech-blue/10 dark:hover:bg-tech-accent/10"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.name}
              {activeSection === item.id && (
                <span className="ml-2 w-2 h-2 bg-tech-blue dark:bg-tech-accent rounded-full inline-block animate-pulse"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
