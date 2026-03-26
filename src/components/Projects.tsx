import React, { useState } from 'react';
import { 
  CalendarClock, 
  Building, 
  CircleCheck, 
  Info,
  Cpu,
  Bot,
  BrainCircuit
} from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const projectsData = [
    {
      title: "6-RSS Parallel Manipulator",
      date: "Jun 2022 - May 2023",
      organization: "Indian Institute of Technology (Indian School of Mines), Dhanbad",
      description: "Designed, manufactured and assembled an industry-grade 6-RSS parallel manipulator. Developed an industry-grade controller along with an application.",
      points: [
        "Parallel robot",
        "Beckhoff-PLC",
        "Beckhoff-ADS",
        "Beckhoff-TwinCAT",
        "Beckhoff-Automation Interface",
        "Beckhoff-Visualization (HMI)"
      ]
    },
    {
      title: "Interval System's Arithematics Calculator",
      date: "Mar 2020 - Apr 2020",
      organization: "Netaji Subhas University of Technology",
      description: "Arithematics for model order reduction of interval systems are very time-consuming and sometimes become very complex to solve. Made the Interval Systems Arithmetic Calculator in Python with GUI.",
      points: [
        "Model order reduction",
        "Higher-order control systems with interval uncertainties"
      ]
    },
    {
      title: "M.Tech. Thesis - Non-linear fractional order fuzzy PD plus I controller for trajectory optimization of 6-DOF modified Puma 560 robotic arm",
      date: "Aug 2020 - Jul 2021",
      organization: "Netaji Subhas Institute of Technology",
      description: "The purpose of this research is to employ non-integer order calculus to enhance the control action of non-linear fractional-order fuzzy PD plus I (FOFPD+I) controller. To operate a non-linear 6-DOF Puma 560 robotic arm, a FOFPD+I controller is developed and implemented. Fractional order fuzzy Proportional-Derivative (FOFPD) and fractional order fuzzy Integral (FOFI) controllers are used to create the proposed controller. Because of the non-linear gains, the proposed control approach preserves the linear structure of the fractional-order proportional-derivative plus integral (FOPD+I) controller while still providing adaptive capabilities. Further, PID controllers are also derived to compare with FOFPD+I controllers. Both FOFPD+I and PID controller parameters are optimized using Non-dominated Sorting Genetic Algorithm - II (NSGA-II). The performance and effectiveness of the presented controller are examined in terms of trajectory tracking, tracking error, and robotic arm control efforts.",
      awards: ["Best Paper Award at Congress on Control, Robotics, and Mechatronics (CRM 2023)"]
    },
    {
      title: "Virtual Security Guard - Graduation project",
      date: "Aug 2017 - Apr 2018",
      organization: "The LNM Institute of Information Technology",
      description: "A cheap wirelessly remote-controlled, wheeled device to enable video streaming to view remote locations.",
      points: [
        "The project consists of a smart-phone in dual screen mode to experience real-time video broadcast as well as to control 4 wheeled robotic vehicle with camera motion simultaneously via Wi-Fi which receives data processed by Arduino and Raspberry Pi.",
        "Video streamed is done by the smart-phone using the IP address specified by the Raspberry Pi.",
        "Object detection and collision avoidance."
      ],
      skills: [
        "Mechatronics",
        "Computer vision"
      ]
    },
    {
      title: "Conversion of conventional braking system to ABS in a car",
      date: "Jul 2017 - Nov 2017",
      organization: "The LNM Institute of Information Technology",
      description: "Designed and fabricated the required mountings and controlling elements to convert the conventional braking system (drum brakes) to ABS. Interfaced the Arduino Mega to send, receive and process all the signals according to requirements while braking.",
      skills: [
        "Automotive electronics",
        "Mechatronics"
      ]
    },
    {
      title: "Automatic Fan and Lighting System",
      date: "Nov 2016 - Present",
      organization: "The LNM Institute of Information Technology",
      description: "Designed an interface for fan and light so that they can be controlled from anywhere via pc connected to a network."
    },
    {
      title: "Real-Life Terrain Experience Simulation Module",
      date: "Nov 2017 - Jan 2018",
      organization: "The LNM Institute of Information Technology",
      points: [
        "To experience the car driving at a spot without driving it on an actual road.",
        "Designed the model of the module and fabricated it to experience real-life car simulation.",
        "Interfaced of a Logitech Racing wheel with gear and pedals with Arduino Mega to control the motors which give jerking effects."
      ]
    },
    {
      title: "Performance Enhancement of IC Engine by TURBOCHARGER",
      date: "Jul 2016 - Dec 2016",
      organization: "The LNM Institute of Information Technology",
      description: "Designed a mechanical assembly that will reheat the exhaust gases to increase different efficiencies of an Engine, reduce hydrocarbon content of engine exhaust and passed through a Turbocharger to reuse the thermal and kinetic energy of exhaust to generate electricity."
    }
  ];

  return (
    <section id="projects" className="bg-white dark:bg-gray-900 py-20 relative overflow-hidden">
      {/* Robotics Background Pattern */}
      <div className="absolute inset-0 bg-[url('./robot-pattern.svg')] bg-repeat opacity-5 dark:opacity-10"></div>
      
      {/* Animated Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Cpu className="absolute top-20 left-[10%] w-12 h-12 text-tech-blue dark:text-tech-accent opacity-10 animate-pulse-slow" />
        <Bot className="absolute bottom-40 right-[15%] w-16 h-16 text-tech-blue dark:text-tech-accent opacity-10 animate-pulse-slow animation-delay-500" />
        <BrainCircuit className="absolute top-1/2 left-[80%] w-14 h-14 text-tech-blue dark:text-tech-accent opacity-10 animate-pulse-slow animation-delay-1000" />
        
        <div className="absolute top-[30%] left-[5%] w-40 h-0.5 bg-tech-blue dark:bg-tech-accent opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[10%] w-60 h-0.5 bg-tech-blue dark:bg-tech-accent opacity-20 animate-pulse-slow animation-delay-500"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex items-center justify-center mb-12 animate-fade-in">
          <div className="h-0.5 w-10 bg-tech-blue dark:bg-tech-accent"></div>
          <h2 className="section-title text-center mx-4 relative">
            Projects
            <Bot className="w-6 h-6 text-tech-blue dark:text-tech-accent absolute -top-4 -right-8 animate-pulse-slow" />
          </h2>
          <div className="h-0.5 w-10 bg-tech-blue dark:bg-tech-accent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {projectsData.map((project, index) => (
              <div 
                key={index} 
                className="project-card circuit-border animate-fade-in group"
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0 border border-gray-200 dark:border-gray-700 group-hover:border-tech-blue dark:group-hover:border-tech-accent transition-colors duration-300">
                    <Bot className="w-full h-full text-tech-blue dark:text-tech-accent p-2" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-tech-darkblue dark:text-white group-hover:text-tech-blue dark:group-hover:text-tech-accent transition-colors duration-300">{project.title}</h3>
                    
                    <div className="flex flex-wrap gap-4 mt-2 text-gray-600 dark:text-gray-400 text-sm">
                      <div className="flex items-center">
                        <CalendarClock className="w-4 h-4 mr-1 text-tech-blue dark:text-tech-accent" />
                        <span>{project.date}</span>
                      </div>
                      {project.organization && (
                        <div className="flex items-center">
                          <Building className="w-4 h-4 mr-1 text-tech-blue dark:text-tech-accent" />
                          <span>Associated with {project.organization}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {project.description && (
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                )}
                
                {project.awards && project.awards.length > 0 && (
                  <div className="mb-4">
                    <p className="font-medium text-tech-blue dark:text-tech-accent">Awards:</p>
                    <ul className="list-disc pl-5 mt-1">
                      {project.awards.map((award, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300">{award}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.points && project.points.length > 0 && (
                  <div className="mt-3">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="details">
                        <AccordionTrigger className="text-tech-blue dark:text-tech-accent font-medium">
                          <div className="flex items-center">
                            <Info className="w-4 h-4 mr-2" />
                            Project Details
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 mt-2">
                            {project.points.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CircleCheck className="w-5 h-5 text-tech-blue dark:text-tech-accent flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 dark:text-gray-300">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                )}
                
                {project.skills && project.skills.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag group-hover:bg-tech-blue/10 dark:group-hover:bg-tech-accent/10 transition-colors duration-300">{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
