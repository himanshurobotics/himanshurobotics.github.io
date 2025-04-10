
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const skillCategories = [
    {
      id: "all",
      name: "All Skills"
    },
    {
      id: "industry",
      name: "Industry Knowledge"
    },
    {
      id: "tools",
      name: "Tools & Technologies"
    }
  ];

  const skills = [
    {
      name: "Robotics",
      category: "industry",
      level: 95,
      institute: "Indian Institute of Technology (Indian School of Mines), Dhanbad"
    },
    {
      name: "Mechatronics",
      category: "industry",
      level: 90,
      institute: "Indian Institute of Technology (Indian School of Mines), Dhanbad"
    },
    {
      name: "Beckhoff TwinCAT",
      category: "tools",
      level: 85,
      institute: "Senior Research Fellow at Indian Institute of Technology (Indian School of Mines), Dhanbad"
    },
    {
      name: "Python",
      category: "tools",
      level: 88,
      institute: "Senior Research Fellow at Indian Institute of Technology (Indian School of Mines), Dhanbad"
    },
    {
      name: "Industrial Robotics",
      category: "industry",
      level: 92,
      institute: "Senior Research Fellow at Indian Institute of Technology (Indian School of Mines), Dhanbad"
    },
    {
      name: "Compliant Parallel Robots",
      category: "industry",
      level: 90,
      institute: "Senior Research Fellow at Indian Institute of Technology (Indian School of Mines), Dhanbad"
    },
    {
      name: "C++",
      category: "tools",
      level: 85,
      institute: "Senior Research Fellow at Indian Institute of Technology (Indian School of Mines), Dhanbad"
    },
    {
      name: "C (Programming Language)",
      category: "tools",
      level: 83
    },
    {
      name: "Python (Programming Language)",
      category: "tools",
      level: 88
    },
    {
      name: "PLC Programming",
      category: "tools",
      level: 80
    },
    {
      name: "Microcontrollers",
      category: "tools",
      level: 85
    },
    {
      name: "Automation",
      category: "industry",
      level: 87,
      institute: "Senior Research Fellow at Indian Institute of Technology (Indian School of Mines), Dhanbad"
    },
    {
      name: "Instrumentation",
      category: "industry",
      level: 85
    },
    {
      name: "SolidWorks",
      category: "tools",
      level: 82,
      institute: "Senior Research Fellow at Indian Institute of Technology (Indian School of Mines), Dhanbad"
    },
    {
      name: "LabVIEW",
      category: "tools",
      level: 75
    },
    {
      name: "Matlab",
      category: "tools",
      level: 90,
      institute: "Senior Research Fellow at Indian Institute of Technology (Indian School of Mines), Dhanbad"
    },
    {
      name: "Simulink",
      category: "tools",
      level: 85,
      institute: "Indian Institute of Technology (Indian School of Mines), Dhanbad"
    },
    {
      name: "ANSYS",
      category: "tools",
      level: 75
    },
    {
      name: "Assembly Language",
      category: "tools",
      level: 70,
      institute: "Senior Research Fellow at Indian Institute of Technology (Indian School of Mines), Dhanbad"
    },
    {
      name: "AutoCAD",
      category: "tools",
      level: 78
    },
    {
      name: "Java",
      category: "tools",
      level: 70
    },
    {
      name: "NI LabVIEW",
      category: "tools",
      level: 75
    },
    {
      name: "Embedded C",
      category: "tools",
      level: 80,
      institute: "Senior Research Fellow at Indian Institute of Technology (Indian School of Mines), Dhanbad"
    },
    {
      name: "AutoCAD M",
      category: "tools",
      level: 75
    },
    {
      name: "MSC Adams",
      category: "tools",
      level: 80
    },
    {
      name: "ANSYS-APDL",
      category: "tools",
      level: 75
    },
    {
      name: "Embedded electronics programming",
      category: "tools",
      level: 82
    },
    {
      name: "Proteus",
      category: "tools",
      level: 78
    },
    {
      name: "MPLAB",
      category: "tools",
      level: 72
    },
    {
      name: "Vehicle Dynamics",
      category: "industry",
      level: 75
    }
  ];

  const filteredSkills = activeTab === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Skills & Expertise</h2>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-200">
                {skillCategories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-tech-blue data-[state=active]:text-white"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSkills.map((skill, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-tech-darkblue">{skill.name}</h3>
                      <span className="text-sm text-tech-blue font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-tech-blue h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    {skill.institute && (
                      <p className="text-xs text-gray-500 mt-2">{skill.institute}</p>
                    )}
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
