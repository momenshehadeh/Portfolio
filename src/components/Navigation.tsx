import React, { useState } from 'react';
import { Home, User, Briefcase, Mail, FileText, Menu, X, BinaryIcon } from 'lucide-react';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', icon: <Home size={20} />, href: '#Home' },
  { label: 'About', icon: <User size={20} />, href: '#about' },
  { label: 'Work', icon: <Briefcase size={20} />, href: '#work' },
  { label: 'Contact', icon: <Mail size={20} />, href: '#contact' },
  {
    label: 'CV',
    icon: <FileText size={20} />,
    href: 'https://drive.google.com/file/d/14Pvf_c4lKed7bH6VsuPS90UPwYEUG2D5/view?usp=sharing'
  },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 h-16 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
      <a href="home" className="text-xl font-bold text-indigo-600">
      <span className="flex items-center">
        <BinaryIcon />
        <span className="ml-1">Momen Shehadeh</span>
      </span>
      </a>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center space-x-1 text-indigo-600  hover:text-indigo-800  transition-colors"
              {...(item.label === 'CV' ? { download: true } : {})}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
                {...(item.label === 'CV' ? { download: true } : {})}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
