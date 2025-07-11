
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
        'fixed w-full z-50 transition-all duration-500',
        isScrolled 
          ? theme === 'dark' 
            ? 'bg-gray-900/95 shadow-2xl backdrop-blur-md py-2 border-b border-tech-blue/30' 
            : 'bg-white/95 shadow-2xl backdrop-blur-md py-2 border-b border-tech-blue/30'
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
              className="text-tech-blue dark:text-tech-accent font-bold text-2xl flex items-center gap-2 hover:scale-110 transition-all duration-500 hover:glow-text"
            >
              <Cpu className="w-8 h-8 animate-pulse hover:animate-spin-slow transition-all duration-500" />
              <span className="relative">
                Himanshu
                <span className="text-tech-darkblue dark:text-white">Varshney</span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-tech-blue to-tech-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-500 hover:scale-110 relative group overflow-hidden",
                    activeSection === item.id
                      ? "text-white bg-gradient-to-r from-tech-blue to-tech-accent shadow-lg transform scale-105"
                      : "text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-tech-blue/90 hover:to-tech-accent/90 hover:shadow-lg"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Animated background */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-r from-tech-blue to-tech-accent transition-all duration-500 opacity-0 group-hover:opacity-100",
                    activeSection === item.id ? "opacity-100" : ""
                  )}></div>
                  
                  {/* Bottom border animation */}
                  <div className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-tech-blue to-tech-accent transition-transform duration-500 origin-left",
                    activeSection === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}></div>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-tech-accent rounded-full animate-pulse shadow-lg"></div>
                  )}
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-tech-blue/20 to-tech-accent/20 blur-sm"></div>
                </button>
              ))}
            </div>
            
            <div className="ml-6">
              <Toggle 
                pressed={theme === 'dark'} 
                onPressedChange={toggleTheme}
                aria-label="Toggle theme"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-tech-blue/20 dark:hover:bg-tech-accent/20 transition-all duration-500 hover:scale-110 hover:shadow-lg border border-gray-200 dark:border-gray-700 hover:border-tech-blue dark:hover:border-tech-accent"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-yellow-500 animate-pulse hover:animate-spin transition-all duration-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-700 hover:text-tech-blue transition-all duration-500" />
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
              className="mr-3 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition-all duration-500 hover:shadow-lg border border-gray-200 dark:border-gray-700"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-500 animate-pulse" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </Toggle>
            
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:text-tech-blue dark:hover:text-tech-accent hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-all duration-500 hover:scale-110 hover:shadow-lg border border-gray-200 dark:border-gray-700 hover:border-tech-blue dark:hover:border-tech-accent"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6 animate-spin" />
              ) : (
                <Menu className="block h-6 w-6 hover:animate-pulse" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden transition-all duration-500 ease-in-out",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/98 dark:bg-gray-900/98 shadow-2xl backdrop-blur-md border-t border-tech-blue/30">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "block px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all duration-500 hover:scale-105 relative group overflow-hidden",
                "animate-slide-in-left border border-transparent hover:border-tech-blue/30 dark:hover:border-tech-accent/30",
                activeSection === item.id
                  ? "text-white bg-gradient-to-r from-tech-blue to-tech-accent shadow-lg"
                  : "text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-tech-blue/90 hover:to-tech-accent/90 hover:shadow-lg"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10 flex items-center justify-between">
                {item.name}
                {activeSection === item.id && (
                  <span className="w-3 h-3 bg-tech-accent rounded-full animate-pulse shadow-lg"></span>
                )}
              </span>
              
              {/* Animated background for mobile */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-r from-tech-blue to-tech-accent transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-lg",
                activeSection === item.id ? "opacity-100" : ""
              )}></div>
              
              {/* Hover glow effect for mobile */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-tech-blue/20 to-tech-accent/20 blur-sm -z-10"></div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
