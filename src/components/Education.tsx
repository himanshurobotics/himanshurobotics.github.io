
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import wallpaperEducation from '@/assets/wallpaper-education.jpg';

const Education = () => {
  const educationData = [
    {
      school: "Indian Institute of Technology (Indian School of Mines) Dhanbad",
      degree: "Doctor of Philosophy - PhD, Robotics Engineer",
      date: "2021 - Present",
      location: "Dhanbad, Jharkhand, India",
      description: "Specialization in the field of Robotics, Mechatronics, Control Systems and Automation.",
      skills: ["Robotics", "Compliant control", "Parallel robots", "Dynamics", "Kinematics"],
      logo: "/lovable-uploads/iitismlogo.png"
    },
    {
      school: "Netaji Subhas University of Technology (formerly NSIT - University of Delhi)",
      degree: "Master of Technology - MTech, Mechatronics Engineering",
      date: "2019 - 2021",
      location: "New Delhi, Delhi, India",
      description: "Specialization in the field of Robotics and Mechatronics.",
      skills: ["Robotics", "Serial robots", "Dynamics", "Kinematics", "Fractional order fuzzy control", "Artificial Intelligence"],
      logo: "/lovable-uploads/NSUT_logo.png"
    },
    {
      school: "The LNM Institute of Information Technology",
      degree: "Bachelor of Technology - BTech, Mechanical Engineering with specialization in Mechatronics",
      date: "2014 - 2018",
      location: "Jaipur, Rajasthan, India",
      description: "Robotics and Mechatronics System Design enthusiast.",
      skills: ["Robotics", "Mechatronics", "Control", "Embedded systems", "Automobile"],
      activities: [
        "Event Coordinator, Organizing Committee ASME E-Fest Asia Pacific'17",
        "Teaching Assistant",
        "Class Representative of Mechanical and Mechatronics Engineering Department",
        "Participated in Torque'14 and got to the final round."
      ],
      logo: "/lovable-uploads/LNMIIT-Logo.png"
    },
    {
      school: "Kendriya Vidyalaya No. 2 (Mathura Refinery)",
      degree: "Intermediate (Physics, Chemistry, Mathematics, Computer Science (C++), English)",
      date: "2013 - 2014",
      location: "Mathura, Uttar Pradesh, India",
      grade: "90.80%",
      logo: "/lovable-uploads/kvs-logo.png"
    },
    {
      school: "Kendriya Vidyalaya No. 2 (Mathura Refinery)",
      degree: "High School (Science, Mathematics, English)",
      date: "2011 - 2012",
      location: "Mathura, Uttar Pradesh, India",
      grade: "9.6 CGPA",
      logo: "/lovable-uploads/kvs-logo.png"
    }
  ];

  return (
    <section id="education" className="relative py-20 overflow-hidden">
      {/* Wallpaper */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${wallpaperEducation})` }}
      />
      <div className="absolute inset-0 bg-black/80 dark:bg-black/85" />
      <div className="absolute inset-0 bg-[url('./circuit-pattern.svg')] bg-repeat opacity-5" />

      <div className="section-container relative z-10">
        <div className="flex items-center justify-center mb-10 animate-fade-in">
          <div className="h-0.5 w-10 bg-tech-accent"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mx-4 text-white">Education</h2>
          <div className="h-0.5 w-10 bg-tech-accent"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l border-tech-accent/40 hover:border-tech-accent transition-all duration-500 last:border-0">
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-tech-accent rounded-full -left-2 mt-1 transition-all duration-500 hover:scale-150" style={{ boxShadow: '0 0 15px rgba(0,188,212,0.6)' }}></div>

              <div className="mb-6 flex items-start gap-4 bg-black/50 backdrop-blur-md p-5 rounded-lg border border-tech-accent/20 hover:border-tech-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-tech-accent/10">
                <div className="w-12 h-12 shrink-0 bg-white/10 backdrop-blur-sm rounded-full border border-tech-accent/30 flex items-center justify-center overflow-hidden">
                  {item.logo ? (
                    <img src={item.logo} alt={item.school} className="w-10 h-10 object-contain" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-tech-accent" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{item.school}</h3>
                  <p className="text-lg font-medium text-tech-accent">{item.degree}</p>

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
                    {item.grade && (
                      <div className="flex items-center">
                        <span className="font-medium text-tech-accent">Grade: {item.grade}</span>
                      </div>
                    )}
                  </div>

                  {item.description && (
                    <p className="mt-3 text-gray-300">{item.description}</p>
                  )}

                  {item.skills && item.skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-tech-accent/10 text-tech-accent rounded-full text-sm font-medium border border-tech-accent/30 hover:bg-tech-accent/20 transition-all duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.activities && item.activities.length > 0 && (
                    <div className="mt-3">
                      <p className="font-medium text-gray-300">Activities and societies:</p>
                      <ul className="list-disc pl-5 mt-1 text-gray-400">
                        {item.activities.map((activity, idx) => (
                          <li key={idx}>{activity}</li>
                        ))}
                      </ul>
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

export default Education;
