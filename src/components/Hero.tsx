import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-tech-lightblue to-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/61ba78e5-9f48-430c-9e9a-c6c6fc995031.png')] bg-center bg-cover opacity-10"></div>
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6">
            <h2 className="text-2xl font-medium text-tech-blue">Hello, I'm</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-tech-darkblue">
              Himanshu Varshney
            </h1>
            <p className="text-xl text-gray-600">
              Ph.D. Research Scholar in Robotics & Mechatronics
            </p>
            <p className="text-gray-600 max-w-lg">
              Specializing in Cobots, Industrial Robots, Mechatronics, Control Systems and Automation with a focus on Physical Human-Robot Interaction (pHRI).
            </p>
            <div className="flex space-x-4">
              <Button className="bg-tech-blue hover:bg-tech-darkblue">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-lightblue">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
            <div className="flex space-x-4 pt-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-tech-blue transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-tech-blue transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:example@example.com" 
                className="text-gray-600 hover:text-tech-blue transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-tech-blue shadow-xl">
                <img 
                  src="/lovable-uploads/61ba78e5-9f48-430c-9e9a-c6c6fc995031.png" 
                  alt="Himanshu Varshney" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="bg-tech-blue text-white text-sm font-medium px-4 py-2 rounded">
                  Indian Institute of Technology, Dhanbad
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
