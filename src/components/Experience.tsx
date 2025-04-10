
import React from 'react';
import { Briefcase, Calendar, MapPin, Users } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      position: "Senior Research Fellow",
      company: "Indian Institute of Technology (Indian School of Mines), Dhanbad",
      type: "Full-time",
      date: "Aug 2021 - Present",
      location: "Dhanbad, Jharkhand, India",
      mode: "On-site",
      description: "Specialization in Kinematics, Dynamics and Control of Serial, Parallel and Hybrid robots.",
      skills: ["Parallel robot", "Dynamics", "Kinematics", "Control"],
      logo: "/lovable-uploads/777e1061-97a2-4224-8d31-c9fd08b94a35.png"
    },
    {
      position: "Teaching Assistant",
      company: "Netaji Subhas University of Technology (formerly NSIT - University of Delhi)",
      type: "Full-time",
      date: "Aug 2019 - Jul 2021 · 2 yrs",
      location: "New Delhi, Delhi, India",
      description: "Worked as a Teaching Assistant for 2 years in the Department of Instrumentation and Control Engineering. Specializing in Robotics and control.",
      skills: ["Serial robot", "Control"],
      logo: "/lovable-uploads/f57e561d-cae9-4b85-bdf4-f2975deabe0d.png"
    },
    {
      position: "Summer Internship",
      company: "Indian Oil Corp Limited",
      date: "May 2017 - Jun 2017 · 2 mos",
      location: "Mathura Area, India",
      logo: "/lovable-uploads/6ff555c7-10a4-44fc-afde-fc23deec3623.png"
    }
  ];
  
  const volunteerData = [
    {
      position: "Event Coordinator",
      organization: "ASME E-Fests Asia Pacific'17",
      date: "Mar 2017 - Mar 2017",
      description: "Lead organizer of a main event 'Impromptu Design Challenge'.",
      skills: ["ASME", "E-Fests"],
      logo: "/lovable-uploads/a117588a-e7ce-4967-80c3-2c61316471b4.png"
    },
    {
      position: "Class Representative",
      organization: "The LNMIIT, Jaipur",
      date: "Aug 2015 - Apr 2018",
      description: "Class Representative of Mechanical and Mechatronics Engineering Department.",
      skills: ["Class representative"],
      logo: "/lovable-uploads/a117588a-e7ce-4967-80c3-2c61316471b4.png"
    }
  ];
  
  return (
    <section id="experience" className="bg-white py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Work Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="mb-6 flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-white rounded-full border border-gray-200 flex items-center justify-center overflow-hidden">
                  {item.logo ? (
                    <img src={item.logo} alt={item.company} className="w-10 h-10 object-contain" />
                  ) : (
                    <Briefcase className="w-6 h-6 text-tech-blue" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-tech-darkblue">{item.position}</h3>
                  <p className="text-lg font-medium text-tech-blue">{item.company}</p>
                  
                  {item.type && <p className="text-gray-700">{item.type}</p>}
                  
                  <div className="flex flex-wrap gap-4 mt-2 text-gray-600 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{item.date}</span>
                    </div>
                    {item.location && (
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{item.location}</span>
                      </div>
                    )}
                    {item.mode && (
                      <div className="flex items-center">
                        <span>{item.mode}</span>
                      </div>
                    )}
                  </div>
                  
                  {item.description && (
                    <p className="mt-3 text-gray-700">{item.description}</p>
                  )}
                  
                  {item.skills && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <h2 className="section-title text-center mt-16">Volunteer Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {volunteerData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="mb-6 flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-white rounded-full border border-gray-200 flex items-center justify-center overflow-hidden">
                  {item.logo ? (
                    <img src={item.logo} alt={item.organization} className="w-10 h-10 object-contain" />
                  ) : (
                    <Users className="w-6 h-6 text-tech-blue" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-tech-darkblue">{item.position}</h3>
                  <p className="text-lg font-medium text-tech-blue">{item.organization}</p>
                  
                  <div className="flex flex-wrap gap-4 mt-2 text-gray-600 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  
                  {item.description && (
                    <p className="mt-3 text-gray-700">{item.description}</p>
                  )}
                  
                  {item.skills && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
