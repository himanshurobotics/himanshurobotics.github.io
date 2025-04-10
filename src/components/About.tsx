
import React from 'react';
import { Code, Database, Cpu, Gauge, Server, Lightbulb } from 'lucide-react';

const About = () => {
  const skills = [
    { 
      title: "Programming", 
      icon: <Code className="w-10 h-10 text-tech-blue" />,
      desc: "C/C++, Java, Python, PLC Programming" 
    },
    { 
      title: "Software", 
      icon: <Database className="w-10 h-10 text-tech-blue" />,
      desc: "MATLAB, AutoCAD, SolidWorks, MSC Adams, Ansys APDL, LabVIEW" 
    },
    { 
      title: "Electronics", 
      icon: <Cpu className="w-10 h-10 text-tech-blue" />,
      desc: "Electronics circuitry, devices, microcontrollers, embedded systems" 
    },
    { 
      title: "Control Systems", 
      icon: <Gauge className="w-10 h-10 text-tech-blue" />,
      desc: "AUTOSAR, automotive electronics, vehicle dynamics" 
    },
    { 
      title: "Automation", 
      icon: <Server className="w-10 h-10 text-tech-blue" />,
      desc: "Robotics, Industrial Automation, IoT" 
    },
    { 
      title: "Research", 
      icon: <Lightbulb className="w-10 h-10 text-tech-blue" />,
      desc: "Cobots, Industrial Robots, pHRI, Mechatronics" 
    }
  ];

  return (
    <section id="about" className="bg-white py-20">
      <div className="section-container">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h3 className="section-subtitle mb-6">My Expertise</h3>
            <p className="text-gray-700 mb-6">
              I have extensive experience in instrumentation and software development with a focus on robotics and mechatronics. My research revolves around Collaborative Robots (Cobots) and Physical Human-Robot Interaction (pHRI).
            </p>
            <p className="text-gray-700 mb-6">
              My technical expertise spans across multiple domains including programming, electronics, control systems, and mechanical design. I approach engineering challenges with an integrated perspective, combining hardware and software solutions.
            </p>
            <p className="text-gray-700">
              Currently, I'm pursuing my Ph.D. at Indian Institute of Technology (Indian School of Mines), Dhanbad, where I focus on advancing robotics technology through innovative research.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mb-4">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold text-tech-darkblue mb-2">{skill.title}</h4>
                <p className="text-gray-600 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
