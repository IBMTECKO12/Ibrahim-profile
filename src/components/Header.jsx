import React from 'react';
import { Menu } from 'antd';

const Header = ({ scrollToSection, currentSection }) => {
  const menuItems = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'projects', label: 'Projects' },
    { key: 'skills', label: 'Skills' },
    { key: 'contact', label: 'Contact' },
  ];

  const handleMenuClick = (e) => {
    scrollToSection(e.key);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">IBM</div>
          <Menu
            mode="horizontal"
            selectedKeys={[currentSection]}
            onClick={handleMenuClick}
            items={menuItems}
            className="border-0"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;