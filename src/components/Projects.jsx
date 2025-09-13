import React from 'react';
import { Card, Tag, Divider } from 'antd';
import { GithubOutlined, GlobalOutlined } from '@ant-design/icons';

// Import project images
import Owambe from '/images/owambe.jpg';
import Studybuddy from '/images/StudybuddyAI.jpg';
import StudentDashboard from '/images/studentdashboard.jpg';
import Mssn from '/images/mssn.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Owambe Events",
      description: "Owambe Events is a social media platform that allows users to create and share events. Built with React, Tailwind CSS, and Firebase, it features user authentication, real-time data updates, and responsive design.",
      technologies: ["React", "Vite", "Tailwind CSS", "React Router", "Firebase", "Vercel"],
      demoLink: "https://owambeclient.vercel.app/",
      codeLink: "https://github.com/IBMTECKO12/owambeclient",
      image: Owambe,
      imageAlt: "Tickets Project Screenshot"
    },
    {
      title: "StudyBuddy AI",
      description: "StudyBuddy AI is an AI-powered study assistant that helps students with their academic needs. It uses Gemini API 2.5 to provide personalized study plans, answer questions, and generate practice quizzes. Built with React, Tailwind CSS, and Vercel.",
      technologies: ["React", "Vite", "Tailwind CSS", "React Router", "Firebase", "Vercel", "Gemini API"],
      demoLink: "https://studybuddy-ai-rho.vercel.app/",
      codeLink: "https://github.com/IBMTECKO12/studybuddy-ai",
      image: Studybuddy,
      imageAlt: "StudyBuddy AI Project Screenshot"
    },
    {
      title: "Student Dashboard",
      description: "A responsive student dashboard application that allows students to track their academic progress, view grades, and manage assignments. Built with React, Tailwind CSS, and React Router.",
      technologies: ["React", "Tailwind CSS", "React Router", "Vite", "Vercel", "Firebase"],
      demoLink: "https://student-dashboard-rosy-three.vercel.app/",
      codeLink: "https://github.com/IBMTECKO12/Student_Dashboard",
      image: StudentDashboard,
      imageAlt: "Student Dashboard Project Screenshot"
    },
    {
      title: "MSSN Ojokoro Area Council Website",
      description: "A website for the Muslim Students' Society of Nigeria (MSSN) Ojokoro Area Council. The site provides information about the council's activities, events, and initiatives. Built with React and Tailwind CSS.",
      technologies: ["React", "Vite", "Tailwind CSS", "React Router", "Vercel"],
      demoLink: "https://mssn-ojokoro-area-council.vercel.app/",
      codeLink: "https://github.com/IBMTECKO12/mssn-ojokoro-area-council",
      image: Mssn,
      imageAlt: 'MSSN Ojokoro Area Council Project Screenshot'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">My Recent Projects</h2>
        <p className="text-gray-600 text-center mb-12">Here are some of the projects I've worked on</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="shadow-md h-full overflow-hidden"
              cover={
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading='lazy'
                  />
                </div>
              }
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="mb-4">
                {project.technologies.map((tech, i) => (
                  <Tag key={i} color="blue" className="mb-2">
                    {tech}
                  </Tag>
                ))}
              </div>
              
              <Divider />
              
              <div className="flex justify-between">
                <a href={project.demoLink} className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <GlobalOutlined className="mr-1" /> Live Demo
                </a>
                <a href={project.codeLink} className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                  <GithubOutlined className="mr-1" /> Code
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;