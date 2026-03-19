import React from 'react';
import { Calendar } from 'lucide-react';

const Publications = () => {
  const publicationsData = [
    {
      title: "Forward Kinematics Solution of a 6-DOF All-Revolute Parallel Manipulator Using Neural Network",
      publication: "International Journal of Computational Methods (World Scientific)",
      date: "September 26th, 2025",
      description: "Neural Network-based Forward Kinematics solver for 6-DOF All-Revolute Parallel Manipulators to ensure high-accuracy positioning in real-time applications. The approach uniquely integrates the model with a digital twin and physical hardware, facilitating seamless virtual mapping and compliant manipulation."
    },
    {
      title: "Adaptive Impedance Control for Synchronized and Compliant Manipulation in the Dual 7-DoF Arms Robot",
      publication: "Advances in Robotics (AIR) 2025 (ACM)",
      date: "July 2nd-5th, 2025",
      description: "Impedance control framework for dual 7-DoF humanoid arms that achieves synchronized motion and compliant adaptability against unknown environmental forces. Simulation results validate the framework's ability to ensure robust trajectory tracking and stable interaction within dynamic environments."
    },
    {
      title: "Framework for implementing and investigating sensorless force control for collaborative manipulation using parallel robots",
      publication: "Multibody System Dynamics (Springer)",
      date: "June 30th, 2025",
      description: "Implementing and evaluating indirect force control strategies (impedance and admittance control) for all revolute parallel manipulators to ensure safe and efficient human-robot interaction by mitigating high interaction forces while maintaining their inherent benefits like high accuracy, stiffness and backdrivability."
    },
    {
      title: "Non-linear fractional order fuzzy PD plus I controller for trajectory optimization of 6-DOF modified Puma 560 robotic arm",
      publication: "Proceedings of Congress on Control, Robotics, and Mechatronics (CRM) 2023. Book: Smart Innovation, Systems and Technologies (Springer)",
      date: "November 11th, 2023",
      description: "Employed the non-integer order calculus to enhance the control action of the non-linear fractional order fuzzy PD plus I (FOFPD+I) controller to control a serial robotic arm."
    }
  ];

  return (
    <section id="publications" className="bg-white dark:bg-gray-900 py-20 transition-colors duration-500">
      <div className="section-container">
        <h2 className="section-title text-center">Publications</h2>
        
        <div className="max-w-3xl mx-auto">
          {publicationsData.map((item, index) => (
            <div key={index} className="mb-8">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
