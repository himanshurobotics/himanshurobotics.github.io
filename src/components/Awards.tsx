import React from 'react';
import { Award, Calendar, Building } from 'lucide-react';

const Awards = () => {
  const awardsData = [
    {
      title: "Best Paper Award",
      organization: "Congress on Control, Robotics, and Mechatronics (CRM 2023)",
      date: "March 26th, 2023",
      description: "Best paper award for paper title 'Non-linear fractional order fuzzy PD plus I controller for trajectory optimization of 6-DOF modified Puma 560 robotic arm' in the conference."
    },
    {
      title: "Award of Excellence", 
      organization: "Indian Oil Corporation Limited (IOCL)",
      description: "Awarded four times for exemplary performance in high-school, intermediate, graduation and postgraduation."
    }
  ];
  
  const certificatesData = [
    {
      title: "IOCL Internship",
      organization: "Indian Oil Corporation Limited",
      date: "2017-06-15"
    },
    {
      title: "Advanced Industrial Automation Training",
      organization: "INDWELL Automation",
      date: "2017-04"
    },
    {
      title: "NI LabVIEW Training",
      organization: "The LNM Institute of Information Technology",
      date: "2016-12"
    },
    {
      title: "AutoCAD",
      organization: "The LNM Institute of Information Technology",
      date: "2015-03"
    }
  ];
  
  const publicationsData = [
    {
      title: "Framework for implementing and investigating sensorless force control for collaborative manipulation using parallel robots",
      publication: "Multibody System Dynamics (Springer)",
      date: "June 30th, 2025",
      description: "This research focuses on implementing and evaluating indirect force control strategies (impedance and admittance control) for all revolute parallel manipulators to ensure safe and efficient human-robot interaction by mitigating high interaction forces while maintaining their inherent benefits like high accuracy, stiffness and backdrivability."
    },
    {
      title: "Non-linear fractional order fuzzy PD plus I controller for trajectory optimization of 6-DOF modified Puma 560 robotic arm",
      publication: "Proceedings of Congress on Control, Robotics (CRM 2023), and Mechatronics, Smart Innovation, Systems and Technologies (Springer)",
      date: "November 11th, 2023",
      description: "Employed the non-integer order calculus to enhance the control action of the non-linear fractional order fuzzy PD plus I (FOFPD+I) controller to control a serial robotic arm."
    }
  ];
  
  const referencesData = [
    {
      name: "Prof. Arun Dayal Udai",
      title: "Doctoral supervisor",
      organization: "Indian Institute of Technology (Indian School of Mines) Dhanbad"
    },
    {
      name: "Prof. Suril V. Shah",
      title: "Co-author",
      organization: "Indian Institute of Technology Jodhpur"
    }
  ];

  return (
    <section id="awards" className="bg-white py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Awards & Recognition</h2>
        
        <div className="max-w-3xl mx-auto">
          {awardsData.map((item, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center">
                  <Award className="w-6 h-6 text-tech-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-tech-darkblue">{item.title}</h3>
                  <p className="text-lg font-medium text-tech-blue">{item.organization}</p>
                  
                  {item.date && (
                    <div className="flex flex-wrap gap-4 mt-2 text-gray-600 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  )}
                  
                  {item.description && (
                    <p className="mt-3 text-gray-700">{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <h2 className="section-title text-center mt-16">Publications</h2>
        
        <div className="max-w-3xl mx-auto">
          {publicationsData.map((item, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-tech-blue" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-tech-darkblue">{item.title}</h3>
                  <p className="text-lg font-medium text-tech-blue">{item.publication}</p>
                  
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
        
        <h2 className="section-title text-center mt-16">Certificates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certificatesData.map((item, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-tech-blue" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="14" x="3" y="5" rx="2"></rect><path d="M21 8H8"></path><path d="M21 12H8"></path><path d="M21 16H8"></path><path d="M4 8h1"></path><path d="M4 12h1"></path><path d="M4 16h1"></path></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-tech-darkblue">{item.title}</h3>
                  <p className="text-sm text-tech-blue">{item.organization}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <h2 className="section-title text-center mt-16">References</h2>
        
        <div className="max-w-3xl mx-auto">
          {referencesData.map((item, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-tech-blue" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-tech-darkblue">{item.name}</h3>
                  <p className="text-gray-700">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
