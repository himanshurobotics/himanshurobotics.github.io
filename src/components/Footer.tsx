
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-tech-darkblue text-white py-10">
      <div className="section-container">
        <div className="flex flex-col items-center">
          <button 
            onClick={scrollToTop}
            className="bg-tech-blue dark:bg-tech-accent p-3 rounded-full hover:bg-opacity-80 transition-all mb-6"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
          
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Himanshu Varshney</h2>
            <p className="text-gray-300">Ph.D. Research Scholar in Robotics & Mechatronics</p>
          </div>
          
          <div className="flex space-x-4 mb-8">
            <a 
              href="https://www.linkedin.com/in/himanshu-varshney/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tech-blue dark:hover:text-tech-accent transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a 
              href="https://github.com/himanshuvarshney" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tech-blue dark:hover:text-tech-accent transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tech-blue dark:hover:text-tech-accent transition-colors"
              aria-label="Google Scholar"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
              </svg>
            </a>
            <a 
              href="https://orcid.org/YOUR_ORCID_ID" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tech-blue dark:hover:text-tech-accent transition-colors"
              aria-label="ORCID"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947 0 .525-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.881-1.303 3.881-3.722 0-2.131-1.303-3.722-3.881-3.722h-2.297z"/>
              </svg>
            </a>
          </div>
          
          <div className="text-center">
            <nav className="flex flex-wrap justify-center mb-6">
              <button onClick={() => scrollToSection('home')} className="px-4 py-2 hover:text-tech-blue dark:hover:text-tech-accent transition-colors cursor-pointer">Home</button>
              <button onClick={() => scrollToSection('about')} className="px-4 py-2 hover:text-tech-blue dark:hover:text-tech-accent transition-colors cursor-pointer">About</button>
              <button onClick={() => scrollToSection('education')} className="px-4 py-2 hover:text-tech-blue dark:hover:text-tech-accent transition-colors cursor-pointer">Education</button>
              <button onClick={() => scrollToSection('experience')} className="px-4 py-2 hover:text-tech-blue dark:hover:text-tech-accent transition-colors cursor-pointer">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="px-4 py-2 hover:text-tech-blue dark:hover:text-tech-accent transition-colors cursor-pointer">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="px-4 py-2 hover:text-tech-blue dark:hover:text-tech-accent transition-colors cursor-pointer">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="px-4 py-2 hover:text-tech-blue dark:hover:text-tech-accent transition-colors cursor-pointer">Contact</button>
            </nav>
            
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Himanshu Varshney. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
