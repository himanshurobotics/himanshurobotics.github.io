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
  
  const referencesData = [
    {
      name: "Prof. Arun Dayal Udai",
      organization: "Indian Institute of Technology (Indian School of Mines) Dhanbad",
      title: "Doctoral supervisor"
    },
    {
      name: "Prof. Suril V. Shah",
      organization: "Indian Institute of Technology Jodhpur",
      title: ""
    }
  ];

  return (
    <section id="awards" className="bg-white dark:bg-gray-900 py-20 transition-colors duration-500">
      <div className="section-container">
        <h2 className="section-title text-center">Awards & Recognition</h2>
        
        <div className="max-w-3xl mx-auto">
          {awardsData.map((item, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-colors duration-500">
                  <Award className="w-6 h-6 text-tech-blue dark:text-tech-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-tech-darkblue dark:text-white transition-colors duration-500">{item.title}</h3>
                  <p className="text-lg font-medium text-tech-blue dark:text-tech-accent transition-colors duration-500">{item.organization}</p>
                  
                  {item.date && (
                    <div className="flex flex-wrap gap-4 mt-2 text-gray-600 dark:text-gray-400 text-sm transition-colors duration-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  )}
                  
                  {item.description && (
                    <p className="mt-3 text-gray-700 dark:text-gray-300 transition-colors duration-500">{item.description}</p>
                  )}
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
                <div className="w-12 h-12 shrink-0 bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-colors duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-tech-blue dark:text-tech-accent" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-tech-darkblue dark:text-white transition-colors duration-500">{item.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-500">{item.organization}</p>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-500">{item.title}</p>
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
