import React from 'react';
import { Bell, Sparkles } from 'lucide-react';

const Updates = () => {
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

  return (
    <section id="updates" className="py-12">
      <div className="section-container">
        <h2 className="section-title text-center">Latest Updates</h2>
        <div className="max-w-3xl mx-auto">
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
      </div>
    </section>
  );
};

export default Updates;
