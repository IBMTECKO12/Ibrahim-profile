import React, { useState } from 'react';
import { Layout, Card, Tag, Divider, Button } from 'antd';
import { GithubOutlined, GlobalOutlined, MailOutlined } from '@ant-design/icons';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const { Content } = Layout;

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
    }
  };

  return (
    <Layout className="min-h-screen bg-white">
      <Header scrollToSection={scrollToSection} currentSection={currentSection} />
      <Content>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;