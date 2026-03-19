
import React from 'react';
import { Calendar, BookOpen } from 'lucide-react';
import wallpaperPublications from '@/assets/wallpaper-publications.jpg';

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
      publication: "Advances in Robotics (AIR) 2025",
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
    <section id="publications" className="relative py-20 overflow-hidden">
      {/* Wallpaper */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${wallpaperPublications})` }}
      />
      <div className="absolute inset-0 bg-black/80 dark:bg-black/85" />
      <div className="absolute inset-0 bg-[url('./circuit-pattern.svg')] bg-repeat opacity-5" />

      <div className="section-container relative z-10">
        <div className="flex items-center justify-center mb-10 animate-fade-in">
          <div className="h-0.5 w-10 bg-tech-accent"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mx-4 text-white">Publications</h2>
          <div className="h-0.5 w-10 bg-tech-accent"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {publicationsData.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-black/50 backdrop-blur-md p-6 rounded-lg border border-tech-accent/20 hover:border-tech-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-tech-accent/10 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 shrink-0 bg-tech-accent/10 rounded-full border border-tech-accent/30 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-tech-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-lg font-medium text-tech-accent mt-1">{item.publication}</p>
                <div className="flex flex-wrap gap-4 mt-2 text-gray-400 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-tech-accent/70" />
                    <span>{item.date}</span>
                  </div>
                </div>
                {item.description && (
                  <p className="mt-3 text-gray-300">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
