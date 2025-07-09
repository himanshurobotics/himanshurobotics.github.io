import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      school: "Indian Institute of Technology (Indian School of Mines), Dhanbad",
      degree: "Doctor of Philosophy - PhD, Robotics Engineer",
      date: "2021 - Present",
      location: "Jharkhand, India",
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
      school: "The LNM Institute of Information Technology, Jaipur",
      degree: "Bachelor of Technology - BTech, Mechanical Engineering with specialization in Mechatronics",
      date: "2014 - 2018",
      location: "Rajasthan, India",
      description: "Robotics and Mechatronics System Design enthusiast.",
      skills: ["Mechatronics", "Control", "Embedded systems", "Automobile"],
      activities: [
        "Event Coordinator, Organizing Committee ASME E-Fest Asia Pacific'17",
        "Teaching Assistant",
        "Class Representative of Mechanical and Mechatronics Engineering Department",
        "Participated in Torque'14 and got to the final round."
      ],
      logo: "/lovable-uploads/LNMIIT-Logo.png"
    },
    {
      school: "Kendriya Vidyalaya",
      degree: "Intermediate, Physics, Chemistry, Mathematics & Computer Science (C++)",
      date: "2013 - 2014",
      location: "India",
      grade: "90.80%",
      logo: "/lovable-uploads/kvs-logo.png"
    },
    {
      school: "Kendriya Vidyalaya",
      degree: "High School, Science, Mathematics, English",
      date: "2011 - 2012",
      location: "India",
      grade: "9.6 CGPA",
      logo: "/lovable-uploads/kvs-logo.png"
    }
  ];

  return (
    <section id="education" className="bg-gray-50 py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Education</h2>
        
        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="mb-6 flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-white rounded-full border border-gray-200 flex items-center justify-center overflow-hidden">
                  {item.logo ? (
                    <img src={item.logo} alt={item.school} className="w-10 h-10 object-contain" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-tech-blue" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-tech-darkblue">{item.school}</h3>
                  <p className="text-lg font-medium text-tech-blue">{item.degree}</p>
                  
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
                    {item.grade && (
                      <div className="flex items-center">
                        <span className="font-medium text-tech-blue">Grade: {item.grade}</span>
                      </div>
                    )}
                  </div>
                  
                  {item.description && (
                    <p className="mt-3 text-gray-700">{item.description}</p>
                  )}
                  
                  {item.skills && item.skills.length > 0 && (
                    <div className="mt-3">
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, idx) => (
                          <span key={idx} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {item.activities && item.activities.length > 0 && (
                    <div className="mt-3">
                      <p className="font-medium text-gray-700">Activities and societies:</p>
                      <ul className="list-disc pl-5 mt-1 text-gray-700">
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
