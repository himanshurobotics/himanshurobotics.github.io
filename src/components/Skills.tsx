
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Cpu,
  PenTool,
  Gauge,
  Settings,
  BookOpen
} from 'lucide-react';
import wallpaperSkills from '@/assets/wallpaper-skills.jpg';

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const skillCategories = [
    { id: "all", name: "All Skills", icon: <Settings className="w-5 h-5" /> },
    { id: "programming", name: "Programming", icon: <Code className="w-5 h-5" /> },
    { id: "design", name: "Design & Modeling", icon: <PenTool className="w-5 h-5" /> },
    { id: "control", name: "Control & Automation", icon: <Gauge className="w-5 h-5" /> },
    { id: "languages", name: "Languages", icon: <BookOpen className="w-5 h-5" /> }
  ];

  const skills = [
    { name: "Python", category: "programming", level: 95 },
    { name: "C++", category: "programming", level: 95 },
    { name: "C#", category: "programming", level: 80 },
    { name: "C", category: "programming", level: 85 },
    { name: "MATLAB & Simulink", category: "programming", level: 95 },
    { name: "AI/ML", category: "programming", level: 80 },
    { name: "Embedded-C", category: "programming", level: 85 },
    { name: "Assembly", category: "programming", level: 75 },
    { name: "SolidWorks", category: "design", level: 85 },
    { name: "MSC Adams", category: "design", level: 80 },
    { name: "AutoCAD", category: "design", level: 75 },
    { name: "ANSYS-APDL", category: "design", level: 75 },
    { name: "Robotics", category: "control", level: 95 },
    { name: "Mechatronics", category: "control", level: 95 },
    { name: "Beckhoff TwinCAT", category: "control", level: 90 },
    { name: "Allen-Bradley PLC", category: "control", level: 85 },
    { name: "Siemens PLC", category: "control", level: 85 },
    { name: "NI LabVIEW", category: "control", level: 75 },
    { name: "Parallel Robots", category: "control", level: 95 },
    { name: "Serial Robots", category: "control", level: 95 },
    { name: "Kinematics", category: "control", level: 90 },
    { name: "Dynamics", category: "control", level: 90 },
    { name: "Control Systems", category: "control", level: 85 },
    { name: "Compliant Control", category: "control", level: 90 },
    { name: "Automation", category: "control", level: 90 },
    { name: "Hindi (Native)", category: "languages", level: 100 },
    { name: "English (Fluent)", category: "languages", level: 90 }
  ];

  const filteredSkills = activeTab === "all"
    ? skills
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Wallpaper */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${wallpaperSkills})` }}
      />
      <div className="absolute inset-0 bg-black/80 dark:bg-black/85" />
      <div className="absolute inset-0 bg-[url('./circuit-pattern.svg')] bg-repeat opacity-5" />

      <div className="section-container relative z-10">
        <div className="flex items-center justify-center mb-10 animate-fade-in">
          <div className="h-0.5 w-10 bg-tech-accent"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mx-4 text-white">Skills & Expertise</h2>
          <div className="h-0.5 w-10 bg-tech-accent"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
            <div className="mb-8">
              <div className="overflow-x-auto scrollbar-hide">
                <TabsList className="bg-black/50 backdrop-blur-md border border-tech-accent/20 inline-flex w-max min-w-full justify-start md:justify-center p-1">
                  {skillCategories.map(category => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="data-[state=active]:bg-tech-accent data-[state=active]:text-white text-gray-300 flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 text-xs md:text-sm whitespace-nowrap flex-shrink-0 transition-all duration-300"
                    >
                      <span className="flex-shrink-0">{category.icon}</span>
                      <span className="hidden sm:inline">{category.name}</span>
                      <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-black/50 backdrop-blur-md p-4 rounded-lg border border-tech-accent/20 hover:border-tech-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-tech-accent/10 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-white">{skill.name}</h3>
                      <span className="text-sm text-tech-accent font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-1000"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, #0e76a8, #00bcd4)`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Skills;
