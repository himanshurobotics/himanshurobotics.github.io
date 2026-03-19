import React from 'react';
import { Briefcase, Calendar, MapPin, Users } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      position: "Teaching Assistant (TA) NPTEL",
      company: "Collaborative Robots (COBOTS): Theory and Practice",
      date: "Jan 2026 - May 2026",
      location: "IIT (ISM) Dhanbad, Jharkhand, India",
      description: "Made course content, lecture notes, assignments and question papers.",
      logo: "/lovable-uploads/nptel-logo.png"
    },
    {
      position: "Teaching Assistant (TA) NPTEL",
      company: "Collaborative Robots (COBOTS): Theory and Practice",
      date: "Jan 2025 - May 2025",
      location: "IIT (ISM) Dhanbad, Jharkhand, India",
      description: "New course launched. Made course content, simulation and experimental videos, lecture notes, assignments and question papers.",
      logo: "/lovable-uploads/nptel-logo.png"
    },
    {
      position: "Teaching Assistant (TA) NPTEL",
      company: "Industrial Robotics : Theories For Implementation",
      date: "Jul 2024 - Nov 2024",
      location: "IIT (ISM) Dhanbad, Jharkhand, India",
      description: "Made course content, lecture notes, assignments and question papers.",
      logo: "/lovable-uploads/nptel-logo.png"
    },
    {
      position: "Senior Research Fellow (SRF)",
      company: "Indian Institute of Technology (Indian School of Mines) Dhanbad",
      type: "Full-time",
      date: "Aug 2023 - Present",
      location: "Dhanbad, Jharkhand, India",
      mode: "On-site",
      description: "Specialization in Kinematics, Dynamics and Control of Serial, Parallel and Hybrid robots.",
      skills: ["Parallel robot", "Dynamics", "Kinematics", "Control"],
      logo: "/lovable-uploads/iitismlogo.png"
    },
    {
      position: "Junior Research Fellow (JRF)",
      company: "Indian Institute of Technology (Indian School of Mines) Dhanbad",
      type: "Full-time",
      date: "Aug 2021 - July 2023 · 2 years",
      location: "Dhanbad, Jharkhand, India",
      mode: "On-site",
      description: "Specialization in Kinematics, Dynamics and Control of Serial, Parallel and Hybrid robots.",
      skills: ["Parallel robot", "Dynamics", "Kinematics", "Control"],
      logo: "/lovable-uploads/iitismlogo.png"
    },
    {
      position: "Teaching Assistant (TA)",
      company: "Netaji Subhas University of Technology (formerly NSIT - University of Delhi)",
      type: "Full-time",
      date: "Aug 2019 - Jul 2021 · 2 years",
      location: "New Delhi, Delhi, India",
      mode: "On-site",
      description: "Worked as a Teaching Assistant for 2 years in the Department of Instrumentation and Control Engineering. Specializing in Robotics and control.",
      skills: ["Serial robot", "Control"],
      logo: "/lovable-uploads/NSUT_logo.png"
    },
    {
      position: "Summer Internship",
      company: "Indian Oil Corp Limited",
      date: "May 16th, 2017 - Jun 15th, 2017 · 1 month",
      location: "Mathura, India",
      mode: "On-site",
      logo: "/lovable-uploads/Indian_Oil_Logo.png"
    }
  ];
  
  const volunteerData = [
    {
      position: "Event Coordinator - ASME E-Fests Asia Pacific'17",
      organization: "The LNM Institute of Information Technology",
      date: "Mar 2017 - Mar 2017",
      location: "Jaipur, Rajasthan, India",
      mode: "On-site",
      description: "Lead organizer of a main event 'Impromptu Design Challenge'."
    },
    {
      position: "Class Representative",
      organization: "The LNM Institute of Information Technology",
      date: "Aug 2015 - Apr 2018",
      location: "Jaipur, Rajasthan, India",
      mode: "On-site",
      description: "Served as the Class Representative for the Mechanical and Mechatronics Engineering Department, facilitating communication between faculty and students."
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
                  <Users className="w-6 h-6 text-tech-blue" />
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
