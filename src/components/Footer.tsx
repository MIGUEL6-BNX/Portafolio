import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-16 border-t ${
      darkMode 
        ? 'bg-gray-950 border-white/10' 
        : 'bg-gray-50 border-black/10'
    }`}>
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left - Logo */}
            <div className={`text-xl font-light tracking-wider ${
              darkMode ? 'text-white' : 'text-black'
            }`}>
              DevCraft
            </div>

            {/* Center - Links */}
            <div className="flex gap-8">
              {[
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:luismiguel10608@gmail.com', label: 'Email' }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className={`transition-all duration-300 hover:scale-110 ${
                    darkMode 
                      ? 'text-gray-600 hover:text-white' 
                      : 'text-gray-400 hover:text-black'
                  }`}
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Right - Copyright */}
            <div className={`text-sm ${
              darkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
              © {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;