
import React from 'react';
import { 
  CalendarClock, 
  Building, 
  CircleCheck, 
  Info
} from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Projects = () => {
  const projectsData = [
    {
      title: "6-RSS Parallel Manipulator",
      date: "Jun 2022 - May 2023",
      organization: "Indian Institute of Technology (Indian School of Mines), Dhanbad",
      description: "Designed, manufactured and assembled an industry-grade 6-RSS parallel manipulator. Developed an industry-grade controller along with an application.",
      points: [
        "Parallel robot",
        "Beckhoff",
        "Python Beckhoff-ADS",
        "Beckhoff-TwinCAT"
      ],
      logo: "/lovable-uploads/777e1061-97a2-4224-8d31-c9fd08b94a35.png"
    },
    {
      title: "Interval System's Arithematics Calculator",
      date: "Mar 2020 - Apr 2020",
      organization: "Netaji Subhas University of Technology",
      description: "Arithematics for model order reduction of interval systems are very time-consuming and sometimes become very complex to solve. Made the Interval Systems Arithmetic Calculator in Python with GUI.",
      points: [
        "Model order reduction",
        "Inverval systems",
        "Control systems"
      ],
      logo: "/lovable-uploads/f57e561d-cae9-4b85-bdf4-f2975deabe0d.png"
    },
    {
      title: "M.Tech. Thesis - Non-linear fractional order fuzzy PD plus I controller for trajectory optimization of 6-DOF modified Puma 560 robotic arm",
      date: "Aug 2020 - Jul 2021",
      organization: "Netaji Subhas Institute of Technology",
      description: "The purpose of this research is to employ non-integer order calculus to enhance the control action of non-linear fractional-order fuzzy PD plus I (FOFPD+I) controller. To operate a non-linear 6-DOF Puma 560 robotic arm, a FOFPD+I controller is developed and implemented. Fractional order fuzzy Proportional-Derivative (FOFPD) and fractional order fuzzy Integral (FOFI) controllers are used to create the proposed controller. Because of the non-linear gains, the proposed control approach preserves the linear structure of the fractional-order proportional-derivative plus integral (FOPD+I) controller while still providing adaptive capabilities. Further, PID controllers are also derived to compare with FOFPD+I controllers. Both FOFPD+I and PID controller parameters are optimized using Non-dominated Sorting Genetic Algorithm - II (NSGA-II). The performance and effectiveness of the presented controller are examined in terms of trajectory tracking, tracking error, and robotic arm control efforts.",
      awards: ["Best Paper Award at Congress on Control, Robotics, and Mechatronics (CRM 2023)"],
      logo: "/lovable-uploads/f57e561d-cae9-4b85-bdf4-f2975deabe0d.png"
    },
    {
      title: "Virtual Security Guard - Graduation project",
      date: "Aug 2017 - Apr 2018",
      organization: "The LNM Institute of Information Technology",
      description: "A cheap wirelessly remote-controlled, wheeled device to enable video streaming to view remote locations.",
      points: [
        "The project consists of a smart-phone in dual screen mode to experience real-time video broadcast as well as to control 4 wheeled robotic vehicle with camera motion simultaneously via Wi-Fi which receives data processed by Arduino and Raspberry Pi.",
        "Video streamed is done by the smart-phone using the IP address specified by the Raspberry Pi."
      ],
      skills: [
        "Mechatronics",
        "Computer vision"
      ],
      logo: "/lovable-uploads/a117588a-e7ce-4967-80c3-2c61316471b4.png"
    },
    {
      title: "Conversion of conventional braking system to ABS in a car",
      date: "Jul 2017 - Nov 2017",
      organization: "The LNM Institute of Information Technology",
      description: "Designed and fabricated the required mountings and controlling elements to convert the conventional braking system (drum brakes) to ABS. Interfaced the Arduino Mega to send, receive and process all the signals according to requirements while braking.",
      skills: [
        "Automotive electronics",
        "Mechatronics"
      ],
      logo: "/lovable-uploads/a117588a-e7ce-4967-80c3-2c61316471b4.png"
    },
    {
      title: "AUTOMATIC FAN AND LIGHTING SYSTEM",
      date: "Nov 2016 - Present",
      organization: "The LNM Institute of Information Technology",
      description: "Designed an interface for fan and light so that they can be controlled from anywhere via pc connected to a network.",
      logo: "/lovable-uploads/a117588a-e7ce-4967-80c3-2c61316471b4.png"
    },
    {
      title: "REAL-LIFE CAR SIMULATION EXPERIENCE MODULE",
      date: "Nov 2017 - Jan 2018",
      organization: "The LNM Institute of Information Technology",
      points: [
        "To experience the car driving at a spot without driving it on an actual road.",
        "Designed the model of the module and fabricated it to experience real-life car simulation.",
        "Interfaced the PC with a Logitech Racing wheel with gear and pedals along with Arduino Mega to control the motors which give jerking effects."
      ],
      logo: "/lovable-uploads/a117588a-e7ce-4967-80c3-2c61316471b4.png"
    },
    {
      title: "PERFORMANCE ENHANCEMENT OF IC ENGINE BY TURBOCHARGER",
      date: "Jul 2016 - Dec 2016",
      organization: "The LNM Institute of Information Technology",
      description: "Designed a mechanical assembly that will reheat the exhaust gases to increase different efficiencies of an Engine, reduce hydrocarbon content of engine exhaust and passed through a Turbocharger to reuse the thermal and kinetic energy of exhaust to generate electricity.",
      logo: "/lovable-uploads/a117588a-e7ce-4967-80c3-2c61316471b4.png"
    }
  ];

  return (
    <section id="projects" className="bg-white py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Projects</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {projectsData.map((project, index) => (
              <div key={index} className="project-card">
                <div className="flex items-start gap-4 mb-4">
                  {project.logo && (
                    <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
                      <img 
                        src={project.logo} 
                        alt={project.organization} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-tech-darkblue">{project.title}</h3>
                    
                    <div className="flex flex-wrap gap-4 mt-2 text-gray-600 text-sm">
                      <div className="flex items-center">
                        <CalendarClock className="w-4 h-4 mr-1" />
                        <span>{project.date}</span>
                      </div>
                      {project.organization && (
                        <div className="flex items-center">
                          <Building className="w-4 h-4 mr-1" />
                          <span>Associated with {project.organization}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {project.description && (
                  <p className="text-gray-700 mb-4">{project.description}</p>
                )}
                
                {project.awards && project.awards.length > 0 && (
                  <div className="mb-4">
                    <p className="font-medium text-tech-blue">Awards:</p>
                    <ul className="list-disc pl-5 mt-1">
                      {project.awards.map((award, idx) => (
                        <li key={idx} className="text-gray-700">{award}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.points && project.points.length > 0 && (
                  <div className="mt-3">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="details">
                        <AccordionTrigger className="text-tech-blue font-medium">
                          <Info className="w-4 h-4 mr-2" />
                          Project Details
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 mt-2">
                            {project.points.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CircleCheck className="w-5 h-5 text-tech-blue flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{point}</span>
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
                      <span key={idx} className="skill-tag">{skill}</span>
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
