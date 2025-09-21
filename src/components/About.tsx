import React from 'react';
import { User, Coffee, Code2, Lightbulb } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="sobre-mi" className={`py-32 relative overflow-hidden ${
      darkMode ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 right-10 w-32 h-32 rounded-full ${
          darkMode ? 'bg-gradient-to-r from-purple-900/20 to-blue-900/20' : 'bg-gradient-to-r from-purple-200/40 to-blue-200/40'
        } animate-float blur-xl`}></div>
        
        <div className={`absolute bottom-20 left-10 w-24 h-24 ${
          darkMode ? 'bg-gradient-to-r from-pink-900/20 to-purple-900/20' : 'bg-gradient-to-r from-pink-200/40 to-purple-200/40'
        } animate-morphing blur-lg`}></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column - Animated Number */}
            <div className="text-center md:text-right fade-in-section">
              <span className={`text-8xl md:text-9xl font-extralight animate-fade-in ${
                darkMode ? 'text-white/5' : 'text-black/5'
              }`}>
                01
              </span>
              
              {/* Floating Icons */}
              <div className="relative mt-8">
                <User className={`absolute -top-4 -right-4 w-8 h-8 animate-float ${
                  darkMode ? 'text-blue-400/60' : 'text-blue-600/60'
                }`} />
                <Code2 className={`absolute top-8 -left-8 w-6 h-6 animate-bounce-slow ${
                  darkMode ? 'text-purple-400/60' : 'text-purple-600/60'
                }`} />
                <Lightbulb className={`absolute -bottom-4 right-8 w-7 h-7 animate-pulse-slow ${
                  darkMode ? 'text-yellow-400/60' : 'text-yellow-600/60'
                }`} />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8 fade-in-section">
              <div className="animate-slide-in-left">
                <h2 className={`text-sm uppercase tracking-[0.3em] mb-4 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Sobre Mí
                </h2>
                <h3 className={`text-3xl md:text-4xl font-bold leading-tight gradient-text mb-6`}>
                  Desarrollador apasionado por crear experiencias digitales únicas
                </h3>
              </div>

              <div className="space-y-6 animate-slide-in-right">
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Soy un desarrollador fullstack junior con más de un año de experiencia 
                  creando interfaces modernas y funcionales. Me especializo en React, Python, Java,
                  TypeScript y las últimas tecnologías web.
                </p>

                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Mi enfoque combina código limpio con diseño intuitivo, siempre buscando 
                  la perfecta armonía entre funcionalidad y estética visual.
                </p>

                {/* Animated Skills Pills */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {['React', 'TypeScript', 'Python', 'Java', 'Node.js'].map((skill, index) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 animate-fade-in ${
                        darkMode 
                          ? 'bg-gradient-to-r from-purple-900/50 to-blue-900/50 text-purple-200 hover:from-purple-800/60 hover:to-blue-800/60' 
                          : 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 hover:from-purple-200 hover:to-blue-200'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                {[
                  { number: '19', label: 'Años', icon: User },
                  { number: '5+', label: 'Proyectos', icon: Code2 },
                  { number: '∞', label: 'Café', icon: Coffee }
                ].map(({ number, label, icon: Icon }, index) => (
                  <div 
                    key={label} 
                    className={`text-center group cursor-pointer animate-scale-in`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="relative">
                      <Icon className={`w-6 h-6 mx-auto mb-2 transition-all duration-300 group-hover:scale-110 ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                      <div className={`text-2xl font-bold transition-all duration-300 group-hover:scale-110 ${
                        darkMode ? 'text-white' : 'text-black'
                      }`}>
                        {number}
                      </div>
                      <div className={`text-xs uppercase tracking-widest ${
                        darkMode ? 'text-gray-500' : 'text-gray-600'
                      }`}>
                        {label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;