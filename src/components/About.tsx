import React from 'react';
import { 
  Code, 
  Database, 
  Cpu, 
  Gauge, 
  Globe, 
  Bot, 
  Microscope, 
  BrainCircuit, 
  GraduationCap,
  Cog,
  Zap,
  Cable
} from 'lucide-react';

const About = () => {
  const skills = [
    { 
      title: "Programming", 
      icon: <Code className="w-10 h-10 text-tech-blue dark:text-tech-accent" />,
      desc: "Python, C++, C, EtherCAT, MATLAB, AI/ML, Embedded-C, Assembly" 
    },
    { 
      title: "Software", 
      icon: <Database className="w-10 h-10 text-tech-blue dark:text-tech-accent" />,
      desc: "MATLAB, AutoCAD, SolidWorks, MSC Adams, Ansys APDL, LabVIEW" 
    },
    { 
      title: "Electronics", 
      icon: <Cpu className="w-10 h-10 text-tech-blue dark:text-tech-accent" />,
      desc: "Electronics circuitry, devices, microcontrollers, embedded systems" 
    },
    { 
      title: "Control Systems", 
      icon: <Gauge className="w-10 h-10 text-tech-blue dark:text-tech-accent" />,
      desc: "Beckhoff TwinCAT, Allen-Bradley PLC, Siemens PLC, NI LabVIEW" 
    },
    { 
      title: "Robotics", 
      icon: <Bot className="w-10 h-10 text-tech-blue dark:text-tech-accent" />,
      desc: "Parallel Robots, Serial Robots, Kinematics, Dynamics, Compliant Control" 
    },
    { 
      title: "Research", 
      icon: <Microscope className="w-10 h-10 text-tech-blue dark:text-tech-accent" />,
      desc: "Collaborative Robots, Physical Human-Robot Interaction (pHRI)" 
    },
    { 
      title: "AI & Neural Networks", 
      icon: <BrainCircuit className="w-10 h-10 text-tech-blue dark:text-tech-accent" />,
      desc: "Machine Learning, Neural Networks, Fuzzy Logic Control" 
    },
    { 
      title: "Languages", 
      icon: <Globe className="w-10 h-10 text-tech-blue dark:text-tech-accent" />,
      desc: "Hindi (Native), English (Fluent)" 
    }
  ];

  return (
    <section id="about" className="py-12 relative overflow-hidden">
      {/* Technical Background Elements - Circuit Pattern */}
      <div className="absolute inset-0 bg-[url('./circuit-pattern.svg')] bg-repeat opacity-5 dark:opacity-10"></div>
      <div className="absolute inset-0 bg-[url('./robot-pattern.svg')] bg-repeat opacity-3 dark:opacity-5"></div>
      
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-tech-blue dark:border-tech-accent rounded-full"></div>
        <div className="absolute top-60 right-20 w-20 h-20 border border-tech-blue dark:border-tech-accent rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-60 h-60 border border-tech-blue dark:border-tech-accent rounded-full"></div>
        
        {/* Circuit Lines */}
        <div className="absolute top-20 left-20 w-1/4 h-0.5 bg-tech-blue dark:bg-tech-accent animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-40 h-0.5 bg-tech-blue dark:bg-tech-accent animate-pulse-slow animation-delay-500"></div>
        <div className="absolute bottom-40 left-10 w-60 h-0.5 bg-tech-blue dark:bg-tech-accent animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-0.5 h-40 bg-tech-blue dark:bg-tech-accent animate-pulse-slow"></div>
        
        {/* Gear Icons */}
        <Cog className="absolute top-1/4 right-1/4 w-16 h-16 text-tech-blue dark:text-tech-accent opacity-10 animate-rotate" />
        <Cog className="absolute bottom-1/3 left-1/3 w-20 h-20 text-tech-blue dark:text-tech-accent opacity-10 animate-rotate animation-delay-1000" />
        
        {/* New Robotics Elements */}
        <Zap className="absolute top-1/2 right-1/5 w-12 h-12 text-tech-blue dark:text-tech-accent opacity-10 animate-pulse-slow" />
        <Cable className="absolute bottom-1/4 right-1/4 w-14 h-14 text-tech-blue dark:text-tech-accent opacity-10 animate-pulse-slow animation-delay-500" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex items-center justify-center mb-8 animate-fade-in">
          <div className="h-0.5 w-10 bg-tech-blue dark:bg-tech-accent"></div>
          <h2 className="section-title text-center mx-4 relative">
            About Me
            <GraduationCap className="w-6 h-6 text-tech-blue dark:text-tech-accent absolute -top-4 -right-8" />
          </h2>
          <div className="h-0.5 w-10 bg-tech-blue dark:bg-tech-accent"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-100 dark:border-gray-700 shadow-md circuit-border animate-slide-up tech-glow">
            <h3 className="section-subtitle mb-6 flex items-center">
              <Bot className="w-6 h-6 mr-2 text-tech-blue dark:text-tech-accent" />
              My Expertise
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I have extensive experience in instrumentation and software development with a focus on robotics and mechatronics. My research revolves around Collaborative Robots (Cobots) and Physical Human-Robot Interaction (pHRI).
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My technical expertise spans across multiple domains including programming, electronics, control systems, and mechanical design. I specialize in kinematics, dynamics and compliant control of serial, parallel and hybrid robots with applications in exoskeletons, humanoids, and rehabilitation.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Currently, I'm pursuing my Ph.D. at Indian Institute of Technology (Indian School of Mines), Dhanbad, where I focus on advancing robotics technology through innovative research in the fields of Parallel Robots, Compliant Control, Serial Robots, Kinematics, Dynamics, and Automation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 hover:border-tech-blue dark:hover:border-tech-accent hover:scale-105 animate-fade-in robot-card tech-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 transform transition-transform duration-500 hover:rotate-12">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold text-tech-darkblue dark:text-white mb-2">{skill.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
