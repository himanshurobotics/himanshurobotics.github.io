import React from 'react';

const Certificates = () => {
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

  return (
    <section id="certificates" className="bg-white dark:bg-gray-900 py-20 transition-colors duration-500">
      <div className="section-container">
        <h2 className="section-title text-center">Certificates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certificatesData.map((item, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 transition-colors duration-500">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 bg-white dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center transition-colors duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-tech-blue dark:text-tech-accent" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="14" x="3" y="5" rx="2"></rect><path d="M21 8H8"></path><path d="M21 12H8"></path><path d="M21 16H8"></path><path d="M4 8h1"></path><path d="M4 12h1"></path><path d="M4 16h1"></path></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-tech-darkblue dark:text-white transition-colors duration-500">{item.title}</h3>
                  <p className="text-sm text-tech-blue dark:text-tech-accent transition-colors duration-500">{item.organization}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 transition-colors duration-500">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
