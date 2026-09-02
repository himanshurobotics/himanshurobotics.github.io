import React from 'react';
import { Calendar, BookOpen, FileText, Lightbulb, Link as LinkIcon } from 'lucide-react';

interface Publication {
  title: string;
  publication: string;
  date: string;
  description?: string;
  doi?: string;
}

const Publications = () => {
  const journals: Publication[] = [
    {
      title: "Unconventional active head limb grasping in a humanoid robot using fuzzy logic and Q-learning",
      publication: "Autonomous Robots (Springer)",
      date: "September 26th, 2025",
      description: "Under review"
    },
    {
      title: "Forward Kinematics Solution of a 6-DOF All-Revolute Parallel Manipulator Using Neural Network",
      publication: "International Journal of Computational Methods (World Scientific)",
      date: "September 26th, 2025",
      doi: "https://doi.org/10.1142/S0219876225500549",
      //description: "Neural Network-based Forward Kinematics solver for 6-DOF All-Revolute Parallel Manipulators to ensure high-accuracy positioning in real-time applications. The approach uniquely integrates the model with a digital twin and physical hardware, facilitating seamless virtual mapping and compliant manipulation."
    },
    {
      title: "Framework for implementing and investigating sensorless force control for collaborative manipulation using parallel robots",
      publication: "Multibody System Dynamics (Springer)",
      date: "June 30th, 2025",
      doi: "https://doi.org/10.1007/S11044-025-10090-0",
      //description: "Implementing and evaluating indirect force control strategies (impedance and admittance control) for all revolute parallel manipulators to ensure safe and efficient human-robot interaction by mitigating high interaction forces while maintaining their inherent benefits like high accuracy, stiffness and backdrivability."
    }
  ];

  const conferences: Publication[] = [
    {
      title: "Dynamic Uncertainties Modelling Using Physics-Aware Gaussian Process Regression for Impedance Control of Parallel Manipulators",
      publication: "35th IEEE International Conference on Robot and Human Interactive Communication (RO-MAN 2026)",
      date: "August 24th-28th, 2026",
      description: "Forthcoming in proceeding"
    },
    {
      title: "Design and Fabrication of a 6-DoF Parallel Motion Simulator Platform",
      publication: "20th Symposium on National Frontiers of Engineering (NatFoE 2026)",
      date: "August 8th-10th, 2026",
      description: "Forthcoming in proceeding"
    },
    {
      title: "Adaptive Impedance Control for Synchronized and Compliant Manipulation in the Dual 7-DoF Arms Robot",
      publication: "Proceedings of the 2025 7th International Conference on Advances in Robotics (ACM)",
      date: "July 2nd-5th, 2025",
      doi: "https://doi.org/10.1145/3787370.3787514",
      // description: "Impedance control framework for dual 7-DoF humanoid arms that achieves synchronized motion and compliant adaptability against unknown environmental forces. Simulation results validate the framework's ability to ensure robust trajectory tracking and stable interaction within dynamic environments."
    },
    {
      title: "Non-linear fractional order fuzzy PD plus I controller for trajectory optimization of 6-DOF modified Puma 560 robotic arm",
      publication: "Proceedings of Congress on Control, Robotics, and Mechatronics (CRM) 2023. Book: Smart Innovation, Systems and Technologies (Springer)",
      date: "November 11th, 2023",
      doi: "https://doi.org/10.1007/978-981-99-5180-2_33",
      // description: "Employed the non-integer order calculus to enhance the control action of the non-linear fractional order fuzzy PD plus I (FOFPD+I) controller to control a serial robotic arm."
    }
  ];

  const patents: Publication[] = [
    {
      title: "A Cyber Physical System Retrofit for MR Finishing of Internal Hollow Cylindrical Surfaces with Real Time Monitoring and Control",
      publication: "Granted",
      date: "December 10th, 2025"
    },
    {
      title: "A Variable Stiffness Adapter for a Compliant Robot-Assisted Assembly Utilizing Electromagnetic Actuation to Adjust Stiffness and Compliance",
      publication: "Published",
      date: "March 27th, 2025",
      description: "Under Examication"
    }
  ];

  const renderList = (items: Publication[]) => (
    <div>
      {items.map((item, index) => (
        <div key={index} className="mb-6 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 shrink-0 bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-colors duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-tech-blue dark:text-tech-accent" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-tech-darkblue dark:text-white transition-colors duration-500">{item.title}</h3>
              <p className="text-lg font-medium text-tech-blue dark:text-tech-accent transition-colors duration-500">{item.publication}</p>

              <div className="flex flex-wrap gap-4 mt-2 text-gray-600 dark:text-gray-400 text-sm transition-colors duration-500">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{item.date}</span>
                </div>
              </div>

              {item.description && (
                <p className="mt-3 text-gray-700 dark:text-gray-300 transition-colors duration-500">{item.description}</p>
              )}

              {item.doi && (
                <div className={item.description ? "mt-2" : "mt-3"}>
                  <a 
                    href={item.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-tech-blue dark:text-tech-accent hover:underline font-medium text-sm"
                  >
                    <LinkIcon className="w-4 h-4 mr-1" />
                    DOI
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderHeading = (Icon: React.ElementType, label: string, count: number) => (
    <div className="flex items-center gap-3 mb-6 mt-10 first:mt-0">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-tech-blue to-tech-accent flex items-center justify-center shadow-lg">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-tech-darkblue dark:text-white">{label}</h3>
      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-tech-blue/10 dark:bg-tech-accent/10 text-tech-blue dark:text-tech-accent">
        {count}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-tech-blue/40 to-transparent"></div>
    </div>
  );

  return (
    <section id="publications" className="py-12 transition-colors duration-500">
      <div className="section-container">
        <h2 className="section-title text-center">Publications</h2>

        <div className="max-w-3xl mx-auto">
          {renderHeading(BookOpen, 'Journals', journals.length)}
          {renderList(journals)}

          {renderHeading(FileText, 'Conferences', conferences.length)}
          {renderList(conferences)}

          {renderHeading(Lightbulb, 'Patents', patents.length)}
          {renderList(patents)}
        </div>
      </div>
    </section>
  );
};

export default Publications;
