import React, { useState } from 'react';
import { Code, Database, Palette, Zap, Globe, Smartphone } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        { name: 'React', level: 85, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 80, color: 'from-blue-600 to-blue-400' },
        { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-orange-500' },
        { name: 'Next.js', level: 75, color: 'from-gray-700 to-gray-500' },
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      skills: [
        { name: 'Python', level: 80, color: 'from-green-500 to-blue-500' },
        { name: 'Node.js', level: 70, color: 'from-green-600 to-green-400' },
        { name: 'Java', level: 65, color: 'from-red-600 to-orange-500' },
      ]
    },
    {
      title: 'Styling',
      icon: Palette,
      skills: [
        { name: 'Tailwind', level: 90, color: 'from-cyan-500 to-blue-500' },
        { name: 'CSS3', level: 85, color: 'from-blue-500 to-purple-500' },
        { name: 'Sass', level: 75, color: 'from-pink-500 to-rose-500' },
      ]
    }
  ];

  const tools = [
    { name: 'VS Code', icon: Code },
    { name: 'Git', icon: Database },
    { name: 'Figma', icon: Palette },
    { name: 'Vite', icon: Zap },
    { name: 'Webpack', icon: Globe },
    { name: 'Responsive', icon: Smartphone }
  ];

  return (
    <section id="habilidades" className={`py-32 relative overflow-hidden ${
      darkMode ? 'bg-black' : 'bg-white'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/4 left-1/4 w-40 h-40 rounded-full ${
          darkMode ? 'bg-gradient-to-r from-purple-900/10 to-blue-900/10' : 'bg-gradient-to-r from-purple-200/30 to-blue-200/30'
        } animate-float blur-2xl`}></div>
        
        <div className={`absolute bottom-1/4 right-1/4 w-32 h-32 ${
          darkMode ? 'bg-gradient-to-r from-pink-900/10 to-purple-900/10' : 'bg-gradient-to-r from-pink-200/30 to-purple-200/30'
        } animate-morphing blur-xl`}></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 fade-in-section">
            <span className={`text-8xl md:text-9xl font-extralight ${
              darkMode ? 'text-white/5' : 'text-black/5'
            }`}>
              02
            </span>
            
            <div className="mt-8">
              <h2 className={`text-sm uppercase tracking-[0.3em] mb-4 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Habilidades Técnicas
              </h2>
              <h3 className={`text-3xl md:text-4xl font-bold leading-tight gradient-text`}>
                Tecnologías que domino
              </h3>
            </div>
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`p-8 rounded-2xl transition-all duration-500 hover:scale-105 card-hover fade-in-section ${
                  darkMode 
                    ? 'bg-gray-900/50 border border-white/10 hover:border-white/20' 
                    : 'bg-white border border-black/10 hover:border-black/20 shadow-lg hover:shadow-xl'
                }`}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${
                    darkMode ? 'bg-gradient-to-r from-purple-900/50 to-blue-900/50' : 'bg-gradient-to-r from-purple-100 to-blue-100'
                  }`}>
                    <category.icon className={`w-6 h-6 ${
                      darkMode ? 'text-purple-300' : 'text-purple-700'
                    }`} />
                  </div>
                  <h4 className={`text-xl font-bold ${
                    darkMode ? 'text-white' : 'text-black'
                  }`}>
                    {category.title}
                  </h4>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, ) => (
                    <div
                      key={skill.name}
                      className="group cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className={`font-medium transition-colors duration-300 ${
                          darkMode ? 'text-gray-200 group-hover:text-white' : 'text-gray-800 group-hover:text-black'
                        }`}>
                          {skill.name}
                        </span>
                        <span className={`text-sm font-bold transition-all duration-300 ${
                          hoveredSkill === skill.name 
                            ? 'scale-110 text-purple-500' 
                            : darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className={`w-full h-2 rounded-full overflow-hidden ${
                        darkMode ? 'bg-white/10' : 'bg-black/10'
                      }`}>
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full`}
                          style={{ 
                            width: `${skill.level}%`,
                            transform: hoveredSkill === skill.name ? 'scaleY(1.2)' : 'scaleY(1)'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools Section */}
          <div className="fade-in-section">
            <h4 className={`text-xl font-bold text-center mb-8 ${
              darkMode ? 'text-white' : 'text-black'
            }`}>
              Herramientas & Tecnologías
            </h4>
            
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  className={`group flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer animate-scale-in ${
                    darkMode 
                      ? 'bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-white/20 hover:border-white/40 text-gray-300 hover:text-white' 
                      : 'bg-gradient-to-r from-gray-100 to-gray-50 border border-black/20 hover:border-black/40 text-gray-700 hover:text-black shadow-md hover:shadow-lg'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <tool.icon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;