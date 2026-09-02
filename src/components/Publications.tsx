import React, { useState } from 'react';
import { Calendar, BookOpen, FileText, Lightbulb, Bell, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

type PubCategory = 'journals' | 'conferences' | 'patents';

interface Publication {
  title: string;
  publication: string;
  date: string;
  description: string;
}

const Publications = () => {
  const [activeCategory, setActiveCategory] = useState<PubCategory>('journals');

  const updates = [
    {
      tag: "New Publication",
      date: "September 2025",
      text: "Paper on Neural Network-based Forward Kinematics for 6-DOF All-Revolute Parallel Manipulators published in the International Journal of Computational Methods (World Scientific)."
    },
    {
      tag: "Conference",
      date: "July 2025",
      text: "Presented Adaptive Impedance Control framework for dual 7-DoF humanoid arms at Advances in Robotics (AIR) 2025 (ACM)."
    },
    {
      tag: "Ongoing Research",
      date: "Current",
      text: "Working on sensorless force control for collaborative manipulation using all-revolute parallel robots, integrating digital twins with physical hardware."
    }
  ];

  const publicationsData: Record<PubCategory, Publication[]> = {
    journals: [
      {
        title: "Forward Kinematics Solution of a 6-DOF All-Revolute Parallel Manipulator Using Neural Network",
        publication: "International Journal of Computational Methods (World Scientific)",
        date: "September 26th, 2025",
        description: "Neural Network-based Forward Kinematics solver for 6-DOF All-Revolute Parallel Manipulators to ensure high-accuracy positioning in real-time applications. The approach uniquely integrates the model with a digital twin and physical hardware, facilitating seamless virtual mapping and compliant manipulation."
      },
      {
        title: "Framework for implementing and investigating sensorless force control for collaborative manipulation using parallel robots",
        publication: "Multibody System Dynamics (Springer)",
        date: "June 30th, 2025",
        description: "Implementing and evaluating indirect force control strategies (impedance and admittance control) for all revolute parallel manipulators to ensure safe and efficient human-robot interaction by mitigating high interaction forces while maintaining their inherent benefits like high accuracy, stiffness and backdrivability."
      }
    ],
    conferences: [
      {
        title: "Adaptive Impedance Control for Synchronized and Compliant Manipulation in the Dual 7-DoF Arms Robot",
        publication: "Advances in Robotics (AIR) 2025 (ACM)",
        date: "July 2nd-5th, 2025",
        description: "Impedance control framework for dual 7-DoF humanoid arms that achieves synchronized motion and compliant adaptability against unknown environmental forces. Simulation results validate the framework's ability to ensure robust trajectory tracking and stable interaction within dynamic environments."
      },
      {
        title: "Non-linear fractional order fuzzy PD plus I controller for trajectory optimization of 6-DOF modified Puma 560 robotic arm",
        publication: "Proceedings of Congress on Control, Robotics, and Mechatronics (CRM) 2023. Book: Smart Innovation, Systems and Technologies (Springer)",
        date: "November 11th, 2023",
        description: "Employed the non-integer order calculus to enhance the control action of the non-linear fractional order fuzzy PD plus I (FOFPD+I) controller to control a serial robotic arm."
      }
    ],
    patents: []
  };

  const categories: { id: PubCategory; label: string; icon: React.ElementType }[] = [
    { id: 'journals', label: 'Journals', icon: BookOpen },
    { id: 'conferences', label: 'Conferences', icon: FileText },
    { id: 'patents', label: 'Patents', icon: Lightbulb },
  ];

  return (
    <section id="publications" className="bg-white dark:bg-gray-900 py-20 transition-colors duration-500">
      <div className="section-container">
        <h2 className="section-title text-center">Publications</h2>

        {/* Updates Box */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative rounded-2xl border-2 border-tech-blue/40 dark:border-tech-accent/40 bg-gradient-to-br from-tech-blue/5 to-tech-accent/5 dark:from-tech-blue/10 dark:to-tech-accent/10 p-6 shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-tech-blue/20 to-tech-accent/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-tech-darkblue dark:text-white mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-tech-accent"></span>
              </span>
              <Bell className="w-5 h-5 text-tech-blue dark:text-tech-accent" />
              Updates
            </h3>
            <ul className="space-y-3">
              {updates.map((update, idx) => (
                <li key={idx} className="flex gap-3 items-start group">
                  <Sparkles className="w-4 h-4 mt-1 shrink-0 text-tech-blue dark:text-tech-accent group-hover:scale-125 transition-transform duration-300" />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-tech-blue/15 dark:bg-tech-accent/20 text-tech-blue dark:text-tech-accent">
                        {update.tag}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{update.date}</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{update.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={cn(
                  "flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-medium text-sm sm:text-base transition-all duration-500 border",
                  activeCategory === id
                    ? "bg-gradient-to-r from-tech-blue to-tech-accent text-white shadow-lg scale-105 border-transparent"
                    : "bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-tech-blue/50 dark:hover:border-tech-accent/50 hover:scale-105"
                )}
              >
                <Icon className="w-4 h-4" />
                {label}
                <span className={cn(
                  "text-xs px-1.5 py-0.5 rounded-full",
                  activeCategory === id
                    ? "bg-white/20 text-white"
                    : "bg-tech-blue/10 dark:bg-tech-accent/10 text-tech-blue dark:text-tech-accent"
                )}>
                  {publicationsData[id].length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Publications List */}
        <div className="max-w-3xl mx-auto">
          {publicationsData[activeCategory].length === 0 ? (
            <div className="text-center py-12 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700">
              <Lightbulb className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-500" />
              <p className="text-gray-500 dark:text-gray-400 font-medium">No patents filed yet.</p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Work in progress — updates coming soon.</p>
            </div>
          ) : (
            publicationsData[activeCategory].map((item, index) => (
              <div key={index} className="mb-8 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
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
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Publications;
