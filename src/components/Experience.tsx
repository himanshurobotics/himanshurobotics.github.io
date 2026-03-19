
import React from 'react';
import { Briefcase, Calendar, MapPin, Users } from 'lucide-react';
import wallpaperExperience from '@/assets/wallpaper-experience.jpg';

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
    <section id="experience" className="relative py-20 overflow-hidden">
      {/* Wallpaper */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${wallpaperExperience})` }}
      />
      <div className="absolute inset-0 bg-black/80 dark:bg-black/85" />
      <div className="absolute inset-0 bg-[url('./circuit-pattern.svg')] bg-repeat opacity-5" />

      <div className="section-container relative z-10">
        <div className="flex items-center justify-center mb-10 animate-fade-in">
          <div className="h-0.5 w-10 bg-tech-accent"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mx-4 text-white">Work Experience</h2>
          <div className="h-0.5 w-10 bg-tech-accent"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l border-tech-accent/40 hover:border-tech-accent transition-all duration-500 last:border-0">
              <div className="absolute w-4 h-4 bg-tech-accent rounded-full -left-2 mt-1 transition-all duration-500" style={{ boxShadow: '0 0 15px rgba(0,188,212,0.6)' }}></div>
              <div className="mb-6 flex items-start gap-4 bg-black/50 backdrop-blur-md p-5 rounded-lg border border-tech-accent/20 hover:border-tech-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-tech-accent/10">
                <div className="w-12 h-12 shrink-0 bg-white/90 rounded-full border border-tech-accent/30 flex items-center justify-center overflow-hidden">
                  {item.logo ? (
                    <img src={item.logo} alt={item.company} className="w-10 h-10 object-contain" />
                  ) : (
                    <Briefcase className="w-6 h-6 text-tech-accent" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{item.position}</h3>
                  <p className="text-lg font-medium text-tech-accent">{item.company}</p>
                  {item.type && <p className="text-gray-400">{item.type}</p>}
                  <div className="flex flex-wrap gap-4 mt-2 text-gray-400 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-tech-accent/70" />
                      <span>{item.date}</span>
                    </div>
                    {item.location && (
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-tech-accent/70" />
                        <span>{item.location}</span>
                      </div>
                    )}
                    {item.mode && <span className="text-gray-400">{item.mode}</span>}
                  </div>
                  {item.description && (
                    <p className="mt-3 text-gray-300">{item.description}</p>
                  )}
                  {item.skills && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-tech-accent/10 text-tech-accent rounded-full text-sm font-medium border border-tech-accent/30 hover:bg-tech-accent/20 transition-all duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-16 mb-10 animate-fade-in">
          <div className="h-0.5 w-10 bg-tech-accent"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mx-4 text-white">Volunteer Experience</h2>
          <div className="h-0.5 w-10 bg-tech-accent"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {volunteerData.map((item, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l border-tech-accent/40 hover:border-tech-accent transition-all duration-500 last:border-0">
              <div className="absolute w-4 h-4 bg-tech-accent rounded-full -left-2 mt-1 transition-all duration-500" style={{ boxShadow: '0 0 15px rgba(0,188,212,0.6)' }}></div>
              <div className="mb-6 flex items-start gap-4 bg-black/50 backdrop-blur-md p-5 rounded-lg border border-tech-accent/20 hover:border-tech-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-tech-accent/10">
                <div className="w-12 h-12 shrink-0 bg-white/10 rounded-full border border-tech-accent/30 flex items-center justify-center overflow-hidden">
                  <Users className="w-6 h-6 text-tech-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{item.position}</h3>
                  <p className="text-lg font-medium text-tech-accent">{item.organization}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-gray-400 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-tech-accent/70" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  {item.description && (
                    <p className="mt-3 text-gray-300">{item.description}</p>
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
