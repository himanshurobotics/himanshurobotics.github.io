
import React from 'react';
import { Code, Database, Cpu, Gauge, Server, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    { 
      title: "Programming", 
      icon: <Code className="w-10 h-10 text-tech-blue dark:text-tech-accent" />,
      desc: "Python, C++, C, MATLAB, AI/ML, Embedded-C, Assembly" 
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
      title: "Automation", 
      icon: <Server className="w-10 h-10 text-tech-blue dark:text-tech-accent" />,
      desc: "Robotics, Industrial Automation, IoT" 
    },
    { 
      title: "Languages", 
      icon: <Globe className="w-10 h-10 text-tech-blue dark:text-tech-accent" />,
      desc: "Hindi (Native), English (Fluent)" 
    }
  ];

  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-20">
      <div className="section-container">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h3 className="section-subtitle mb-6">My Expertise</h3>
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
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="mb-4">
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
