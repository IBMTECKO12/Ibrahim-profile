import React from 'react';
import { Card, Timeline } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';

const About = () => {
  const timelineItems = [
    {
      children: 'Booting up developer environment',
    },
    {
      children: 'Frontend specialist: React, Next.js',
    },
    {
      children: 'Experienced in building scalable applications',
    },
    {
      children: 'Strong foundation in JavaScript',
    },
    {
      children: 'Ready to build, learn, and deliver',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card className="shadow-md">
              <h3 className="text-xl font-semibold mb-4">Hi, I'm Aribisala Ibrahim</h3>
              <p className="text-gray-600 mb-6">
                I'm a passionate frontend developer with a knack for creating seamless user experiences. 
                My journey in web development started with a curiosity for how websites work, and it has blossomed into a fulfilling career. 
                I specialize in React and Next.js, and I love building applications that are not only functional but also visually appealing.
              </p>
              <Timeline className="text-gray-400" items={timelineItems} />
            </Card>
          </div>
          <div>
            <Card className="shadow-md h-full">
              <div className="flex items-center mb-4">
                <EnvironmentOutlined className="text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">Time Zone</h3>
              </div>
              <p className="text-gray-600">
                I am based in Lagos, Nigeria, and open to work anywhere within Lagos or remotely.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;