
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      school: "Indian Institute of Technology (Indian School of Mines), Dhanbad",
      degree: "Doctor of Philosophy - PhD, Robotics, Mechatronics and Automation",
      date: "Aug 2021 - Present",
      location: "Dhanbad, Jharkhand, India",
      description: "Specialization in the field of Cobots, Industrial Robots, Mechatronics, Control Systems and Automation.",
      skills: ["Robotics", "Mechatronics", "Python", "Beckhoff TwinCAT", "C++", "Matlab", "Simulink", "Automation", "SolidWorks"],
      logo: "/lovable-uploads/777e1061-97a2-4224-8d31-c9fd08b94a35.png"
    },
    {
      school: "Netaji Subhas Institute of Technology",
      degree: "Master of Technology - MTech, Mechatronics",
      date: "2019 - 2021",
      location: "New Delhi, Delhi, India",
      description: "Specialization in the field of Robotics, Mechatronics, Control Systems and Automation.",
      logo: "/lovable-uploads/f57e561d-cae9-4b85-bdf4-f2975deabe0d.png"
    },
    {
      school: "The LNM Institute of Information Technology",
      degree: "Bachelor of Technology - BTech, Specialization in Mechatronics",
      date: "2014 - 2018",
      location: "Jaipur Area, India",
      description: "Robotics and Mechatronics System Design enthusiast. Participated in various activities including being the Event Coordinator for ASME E-Fest Asia Pacific'17.",
      activities: [
        "Event Coordinator, Organizing Committee ASME E-Fest Asia Pacific'17",
        "Teaching Assistant",
        "Class Representative of Mechanical and Mechatronics Engineering Department",
        "Participated in Torque'14 and got to the final round."
      ],
      logo: "/lovable-uploads/a117588a-e7ce-4967-80c3-2c61316471b4.png"
    },
    {
      school: "Kendriya Vidyalaya",
      degree: "Intermediate, Physics, Chemistry, Mathematics & Computer Science (C++)",
      date: "2013 - 2014",
      location: "India",
      grade: "90.80%",
      logo: "/lovable-uploads/3f3f8153-d666-432b-9b9d-b473b2053e42.png"
    },
    {
      school: "Kendriya Vidyalaya",
      degree: "High School, Science, Mathematics, English",
      date: "2011 - 2012",
      location: "India",
      grade: "9.6 CGPA",
      logo: "/lovable-uploads/3f3f8153-d666-432b-9b9d-b473b2053e42.png"
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
