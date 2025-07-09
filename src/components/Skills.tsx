
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

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const skillCategories = [
    {
      id: "all",
      name: "All Skills",
      icon: <Settings className="w-5 h-5" />
    },
    {
      id: "programming",
      name: "Programming",
      icon: <Code className="w-5 h-5" />
    },
    {
      id: "design",
      name: "Design & Modeling",
      icon: <PenTool className="w-5 h-5" />
    },
    {
      id: "control",
      name: "Control & Automation",
      icon: <Gauge className="w-5 h-5" />
    },
    {
      id: "languages",
      name: "Languages",
      icon: <BookOpen className="w-5 h-5" />
    }
  ];

  const skills = [
    // Programming Skills
    {
      name: "Python",
      category: "programming",
      level: 95
    },
    {
      name: "C++",
      category: "programming",
      level: 95
    },
    {
      name: "C#",
      category: "programming",
      level: 80
    },
    {
      name: "C",
      category: "programming",
      level: 85
    },
    {
      name: "MATLAB & Simulink",
      category: "programming",
      level: 95
    },
    {
      name: "AI/ML",
      category: "programming",
      level: 80
    },
    {
      name: "Embedded-C",
      category: "programming",
      level: 85
    },
    {
      name: "Assembly",
      category: "programming",
      level: 75
    },
    
    // Design & Modeling Skills
    {
      name: "SolidWorks",
      category: "design",
      level: 85
    },
    {
      name: "MSC Adams",
      category: "design",
      level: 80
    },
    {
      name: "AutoCAD",
      category: "design",
      level: 75
    },
    {
      name: "ANSYS-APDL",
      category: "design",
      level: 75
    },
    
    // Control & Automation Skills
    {
      name: "Robotics",
      category: "control",
      level: 95
    },
    {
      name: "Mechatronics",
      category: "control",
      level: 95
    },
    {
      name: "Beckhoff TwinCAT",
      category: "control",
      level: 90
    },
    {
      name: "Allen-Bradley PLC",
      category: "control",
      level: 85
    },
    {
      name: "Siemens PLC",
      category: "control",
      level: 85
    },
    {
      name: "NI LabVIEW",
      category: "control",
      level: 75
    },
    {
      name: "Parallel Robots",
      category: "control",
      level: 95
    },
    {
      name: "Serial Robots",
      category: "control",
      level: 95
    },
    {
      name: "Kinematics",
      category: "control",
      level: 90
    },
    {
      name: "Dynamics",
      category: "control",
      level: 90
    },
    {
      name: "Control Systems",
      category: "control",
      level: 85
    },
    {
      name: "Compliant Control",
      category: "control",
      level: 90
    },
    {
      name: "Automation",
      category: "control",
      level: 90
    },
    
    // Languages
    {
      name: "Hindi (Native)",
      category: "languages",
      level: 100
    },
    {
      name: "English (Fluent)",
      category: "languages",
      level: 90
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
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="bg-gray-200">
                {skillCategories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-tech-blue data-[state=active]:text-white flex items-center gap-2"
                  >
                    {category.icon}
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
