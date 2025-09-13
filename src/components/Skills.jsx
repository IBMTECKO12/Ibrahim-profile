import React from 'react';
import { Card, Divider } from 'antd';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["HTML", "JavaScript", "TypeScript"]
    },
    {
      title: "Libraries & Frameworks",
      skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", 
               "React Router", "Framer Motion", "Ant Design"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "NPM", "Figma", "Slack", "Trello", 
               "Vercel", "Netlify", "Firebase"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-md text-center">
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;