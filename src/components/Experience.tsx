
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      position: "Senior Research Fellow",
      company: "Indian Institute of Technology (Indian School of Mines), Dhanbad",
      type: "Full-time",
      date: "Aug 2021 - Present · 3 yrs 9 mos",
      location: "Dhanbad, Jharkhand, India",
      mode: "On-site",
      skills: ["C++", "SolidWorks", "and +8 skills"],
      logo: "/lovable-uploads/777e1061-97a2-4224-8d31-c9fd08b94a35.png"
    },
    {
      position: "Teaching Assistant",
      company: "Netaji Subhas Institute of Technology",
      type: "Full-time",
      date: "Aug 2019 - Jul 2021 · 2 yrs",
      location: "New Delhi, Delhi, India",
      description: "Worked as a Teaching Assistant for 2 years in the Department of Instrumentation and Control Engineering.",
      logo: "/lovable-uploads/f57e561d-cae9-4b85-bdf4-f2975deabe0d.png"
    },
    {
      position: "Summer Internship",
      company: "Indian Oil Corp Limited",
      date: "May 2017 - Jun 2017 · 2 mos",
      location: "Mathura Area, India",
      logo: "/lovable-uploads/6ff555c7-10a4-44fc-afde-fc23deec3623.png"
    },
    {
      position: "Teaching Assistant",
      company: "The LNM Institute of Information Technology",
      type: "Full-time",
      date: "Jan 2017 - May 2017 · 5 mos",
      location: "Jaipur Area, India",
      description: "Worked as a Teaching Assistant for one semester to guide the students in lab experiments of Kinematics and Dynamics.",
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
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-gray-700">Skills:</span>
                      <span className="text-tech-blue font-medium">{item.skills}</span>
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
