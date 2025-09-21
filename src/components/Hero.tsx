import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Code, Zap, Star } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="inicio" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-black' : 'bg-white'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className={`floating-shape floating-shape-1 w-20 h-20 ${
          darkMode ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20' : 'bg-gradient-to-r from-purple-300/30 to-blue-300/30'
        } rounded-full animate-float blur-sm`}></div>
        
        <div className={`floating-shape floating-shape-2 w-16 h-16 ${
          darkMode ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20' : 'bg-gradient-to-r from-pink-300/30 to-purple-300/30'
        } animate-morphing`}></div>
        
        <div className={`floating-shape floating-shape-3 w-12 h-12 border-2 ${
          darkMode ? 'border-blue-500/30' : 'border-blue-400/40'
        } animate-rotate`}></div>

        {/* Animated lines */}
        <div className={`absolute top-1/4 right-1/4 w-px h-32 ${
          darkMode ? 'bg-gradient-to-b from-transparent via-white/20 to-transparent' : 'bg-gradient-to-b from-transparent via-black/20 to-transparent'
        } animate-pulse-slow`}></div>
        
        <div className={`absolute bottom-1/3 left-1/3 w-32 h-px ${
          darkMode ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' : 'bg-gradient-to-r from-transparent via-black/20 to-transparent'
        } animate-pulse-slow`} style={{ animationDelay: '1s' }}></div>

        {/* Interactive cursor follower */}
        <div 
          className={`absolute w-4 h-4 rounded-full pointer-events-none transition-all duration-300 ${
            darkMode ? 'bg-blue-500/30' : 'bg-blue-400/40'
          } blur-sm`}
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Icons */}
          <div className="flex justify-center gap-8 mb-8 fade-in-section">
            <Code className={`w-8 h-8 animate-bounce-slow ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <Zap className={`w-8 h-8 animate-pulse-slow ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
            <Star className={`w-8 h-8 animate-float ${darkMode ? 'text-pink-400' : 'text-pink-600'}`} />
          </div>

          {/* Main Content */}
          <div className="space-y-8 fade-in-section">
            <div className="space-y-6">
              <p className={`text-sm uppercase tracking-[0.3em] animate-fade-in stagger-1 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                FullStack Developer
              </p>
              
              <h1 className={`text-6xl md:text-8xl font-bold leading-none animate-slide-up stagger-2 ${
                darkMode ? 'text-white' : 'text-black'
              }`}>
                Miguel Fonce
                <br />
                <span className="gradient-text animate-fade-in stagger-3">
                  DEVELOPER
                </span>
              </h1>
            </div>

            <div className="max-w-md mx-auto animate-fade-in stagger-4">
              <p className={`text-lg font-light leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Creando experiencias digitales increíbles con código limpio, 
                diseño moderno y animaciones que cobran vida.
              </p>
            </div>

            {/* Animated CTA Button */}
            <div className="animate-scale-in stagger-5">
              <button className={`px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 glow-hover ${
                darkMode 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500' 
                  : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
              }`}>
                
                Ver Mi Trabajo
                
              </button>
            </div>
          </div>

          {/* Social Links with Hover Effects */}
          <div className="flex justify-center gap-8 mt-16 animate-fade-in stagger-6">
            {[
              { Icon: Github, href: 'https://github.com/MIGUEL6-BNX', label: 'GitHub', color: 'hover:text-gray-400' },
              { Icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
              { Icon: Mail, href: 'mailto:luismiguel10608@gmail.com', label: 'Email', color: 'hover:text-green-400' }
            ].map(({ Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                className={`p-4 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-2 glow-hover ${
                  darkMode 
                    ? `text-gray-500 ${color} hover:bg-white/5` 
                    : `text-gray-600 ${color} hover:bg-black/5`
                }`}
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          {/* Animated Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <div className={`flex flex-col items-center gap-2 ${
              darkMode ? 'text-gray-500' : 'text-gray-600'
            }`}>
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <ArrowDown className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;