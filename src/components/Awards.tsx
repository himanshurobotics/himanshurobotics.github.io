
import React from 'react';
import { Award, Calendar, Building } from 'lucide-react';
import wallpaperAwards from '@/assets/wallpaper-awards.jpg';

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
    <section id="awards" className="relative py-20 overflow-hidden">
      {/* Wallpaper */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${wallpaperAwards})` }}
      />
      <div className="absolute inset-0 bg-black/80 dark:bg-black/85" />
      <div className="absolute inset-0 bg-[url('./circuit-pattern.svg')] bg-repeat opacity-5" />

      <div className="section-container relative z-10">
        {/* Awards */}
        <div className="flex items-center justify-center mb-10 animate-fade-in">
          <div className="h-0.5 w-10 bg-tech-accent"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mx-4 text-white">Awards & Recognition</h2>
          <div className="h-0.5 w-10 bg-tech-accent"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {awardsData.map((item, index) => (
            <div key={index} className="flex items-start gap-4 bg-black/50 backdrop-blur-md p-6 rounded-lg border border-tech-accent/20 hover:border-tech-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-tech-accent/10 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="w-12 h-12 shrink-0 bg-yellow-500/10 rounded-full border border-yellow-500/30 flex items-center justify-center">
                <Award className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-lg font-medium text-tech-accent">{item.organization}</p>
                {item.date && (
                  <div className="flex flex-wrap gap-4 mt-2 text-gray-400 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-tech-accent/70" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                )}
                {item.description && (
                  <p className="mt-3 text-gray-300">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div className="flex items-center justify-center mt-16 mb-10 animate-fade-in">
          <div className="h-0.5 w-10 bg-tech-accent"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mx-4 text-white">Certificates</h2>
          <div className="h-0.5 w-10 bg-tech-accent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {certificatesData.map((item, index) => (
            <div key={index} className="bg-black/50 backdrop-blur-md p-5 rounded-lg border border-tech-accent/20 hover:border-tech-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-tech-accent/10 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 bg-tech-accent/10 rounded-full border border-tech-accent/30 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-tech-accent" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="14" x="3" y="5" rx="2"></rect><path d="M21 8H8"></path><path d="M21 12H8"></path><path d="M21 16H8"></path><path d="M4 8h1"></path><path d="M4 12h1"></path><path d="M4 16h1"></path></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-tech-accent">{item.organization}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* References */}
        <div className="flex items-center justify-center mt-16 mb-10 animate-fade-in">
          <div className="h-0.5 w-10 bg-tech-accent"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mx-4 text-white">References</h2>
          <div className="h-0.5 w-10 bg-tech-accent"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {referencesData.map((item, index) => (
            <div key={index} className="flex items-start gap-4 bg-black/50 backdrop-blur-md p-6 rounded-lg border border-tech-accent/20 hover:border-tech-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-tech-accent/10 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="w-12 h-12 shrink-0 bg-tech-accent/10 rounded-full border border-tech-accent/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-tech-accent" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                <p className="text-gray-300">{item.organization}</p>
                {item.title && <p className="text-tech-accent text-sm mt-1">{item.title}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
