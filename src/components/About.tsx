
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
import wallpaperAbout from '@/assets/wallpaper-about.jpg';

const About = () => {
  const skills = [
    {
      title: "Programming",
      icon: <Code className="w-10 h-10 text-tech-accent" />,
      desc: "Python, C++, C, MATLAB, AI/ML, Embedded-C, Assembly"
    },
    {
      title: "Software",
      icon: <Database className="w-10 h-10 text-tech-accent" />,
      desc: "MATLAB, AutoCAD, SolidWorks, MSC Adams, Ansys APDL, LabVIEW"
    },
    {
      title: "Electronics",
      icon: <Cpu className="w-10 h-10 text-tech-accent" />,
      desc: "Electronics circuitry, devices, microcontrollers, embedded systems"
    },
    {
      title: "Control Systems",
      icon: <Gauge className="w-10 h-10 text-tech-accent" />,
      desc: "Beckhoff TwinCAT, Allen-Bradley PLC, Siemens PLC, NI LabVIEW"
    },
    {
      title: "Robotics",
      icon: <Bot className="w-10 h-10 text-tech-accent" />,
      desc: "Parallel Robots, Serial Robots, Kinematics, Dynamics, Compliant Control"
    },
    {
      title: "Research",
      icon: <Microscope className="w-10 h-10 text-tech-accent" />,
      desc: "Collaborative Robots, Physical Human-Robot Interaction (pHRI)"
    },
    {
      title: "AI & Neural Networks",
      icon: <BrainCircuit className="w-10 h-10 text-tech-accent" />,
      desc: "Machine Learning, Neural Networks, Fuzzy Logic Control"
    },
    {
      title: "Languages",
      icon: <Globe className="w-10 h-10 text-tech-accent" />,
      desc: "Hindi (Native), English (Fluent)"
    }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Wallpaper */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${wallpaperAbout})` }}
      />
      <div className="absolute inset-0 bg-black/80 dark:bg-black/85" />
      <div className="absolute inset-0 bg-[url('./circuit-pattern.svg')] bg-repeat opacity-5" />

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Cog className="absolute top-1/4 right-1/4 w-16 h-16 text-tech-accent animate-rotate" />
        <Cog className="absolute bottom-1/3 left-1/3 w-20 h-20 text-tech-accent animate-rotate animation-delay-1000" />
        <Zap className="absolute top-1/2 right-10 w-12 h-12 text-tech-accent animate-pulse-slow" />
        <Cable className="absolute bottom-1/4 right-1/4 w-14 h-14 text-tech-accent animate-pulse-slow animation-delay-500" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex items-center justify-center mb-8 animate-fade-in">
          <div className="h-0.5 w-10 bg-tech-accent"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mx-4 text-white relative">
            About Me
            <GraduationCap className="w-6 h-6 text-tech-accent absolute -top-4 -right-8" />
          </h2>
          <div className="h-0.5 w-10 bg-tech-accent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg border border-tech-accent/30 shadow-2xl animate-slide-up">
            <h3 className="text-xl font-semibold text-tech-accent mb-6 flex items-center">
              <Bot className="w-6 h-6 mr-2 text-tech-accent" />
              My Expertise
            </h3>
            <p className="text-gray-300 mb-6">
              I have extensive experience in instrumentation and software development with a focus on robotics and mechatronics. My research revolves around Collaborative Robots (Cobots) and Physical Human-Robot Interaction (pHRI).
            </p>
            <p className="text-gray-300 mb-6">
              My technical expertise spans across multiple domains including programming, electronics, control systems, and mechanical design. I specialize in kinematics, dynamics and compliant control of serial, parallel and hybrid robots with applications in exoskeletons, humanoids, and rehabilitation.
            </p>
            <p className="text-gray-300">
              Currently, I'm pursuing my Ph.D. at Indian Institute of Technology (Indian School of Mines), Dhanbad, where I focus on advancing robotics technology through innovative research in the fields of Parallel Robots, Compliant Control, Serial Robots, Kinematics, Dynamics, and Automation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-md p-5 rounded-lg border border-tech-accent/20 hover:border-tech-accent/60 hover:shadow-lg hover:shadow-tech-accent/20 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-3 transform transition-transform duration-500 hover:rotate-12">
                  {skill.icon}
                </div>
                <h4 className="text-base font-semibold text-white mb-1">{skill.title}</h4>
                <p className="text-gray-400 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
