import React, { useCallback } from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Optional callback when particles are loaded
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: 'transparent',
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#3b82f6',
              },
              links: {
                color: '#3b82f6',
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-white/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src="/images/ibrahim.jpg" 
              alt="Aribisala Ibrahim" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Hi, I'm Aribisala Ibrahim
        </h1>
        
        <div className="mb-8">
          <span className="text-xl md:text-2xl text-gray-600 mr-2">I build web solutions with</span>
          <span className="text-xl md:text-2xl font-semibold text-blue-600 animate-pulse">React, Next.js and Tailwind CSS.</span>
        </div>
        
        <div className="mb-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button 
            type="primary" 
            size="large" 
            href="/files/Ibrahim resume.docx"
            target="_blank"
            rel="noopener noreferrer"
            icon={<DownloadOutlined />}
            className="bg-blue-600 hover:bg-blue-700 h-12 px-6 text-lg flex items-center"
          >
            View Resume
          </Button>
          
          <Button 
            size="large"
            className="h-12 px-6 text-lg border-blue-600 text-blue-600 hover:bg-blue-50 flex items-center"
            onClick={() => {
              const element = document.getElementById('projects');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View Projects
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full">JS</span>
            <span className="text-xs text-gray-500 mt-1">Expert</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium bg-purple-100 text-purple-800 px-3 py-1 rounded-full">TS</span>
            <span className="text-xs text-gray-500 mt-1">Proficient</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium bg-green-100 text-green-800 px-3 py-1 rounded-full">React</span>
            <span className="text-xs text-gray-500 mt-1">Specialist</span>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-600 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;