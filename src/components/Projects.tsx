import React from 'react';
import { ExternalLink, Github, ArrowUpRight, Code, Database, Palette, Zap, Globe, Smartphone } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const getTechIcon = (tech: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'React': <Code className="w-4 h-4" />,
      'TypeScript': <Code className="w-4 h-4" />,
      'JavaScript': <Code className="w-4 h-4" />,
      'Python': <Code className="w-4 h-4" />,
      'Java': <Code className="w-4 h-4" />,
      'Next.js': <Globe className="w-4 h-4" />,
      'Tailwind': <Palette className="w-4 h-4" />,
      'CSS Grid': <Palette className="w-4 h-4" />,
      'Node.js': <Database className="w-4 h-4" />,
      'API': <Database className="w-4 h-4" />,
      'Charts.js': <Zap className="w-4 h-4" />,
      'Framer Motion': <Zap className="w-4 h-4" />,
      'Responsive': <Smartphone className="w-4 h-4" />
    };
    return icons[tech] || <Code className="w-4 h-4" />;
  };

  const projects = [
    {
      id: 1,
      title: 'Royal - Fernet',
      description: 'Plataforma de comercio electrónico moderna con carrito de compras, sistema de pagos integrado y panel de administración. Diseño responsive y optimizado para conversiones.',
      image: 'https://raw.githubusercontent.com/MIGUEL6-BNX/Portafolio/refs/heads/main/img/royal.png',
      tech: ['Next.js', 'JavaScript', 'Tailwind', 'Node.js', 'Python'],
      year: '2025',
      status: 'Completado',
      github: '#',
      demo: 'https://royal-fernet.vercel.app/'
    },
    {
      id: 2,
      title: 'OpenMind-main',
      description: 'Aplicativo para gestion de proyectos y trabajos en equipos maximisando la productividad y organizacion.',
      image: 'https://raw.githubusercontent.com/MIGUEL6-BNX/Portafolio/refs/heads/main/img/open.png',
      tech: ['HTML', 'JavaScript', 'node.js'],
      year: '2025',
      status: 'Completado',
      github: '#',
      demo: 'https://www.openmindcol.online/'
    },
    {
      id: 3,
      title: 'AnimeVerse',
      description: 'Aplicativo web para la recolecion y visualisacion de animes para toda clase de publico totalmente gratis.',
      image: 'https://raw.githubusercontent.com/MIGUEL6-BNX/Portafolio/refs/heads/main/img/verse.png',
      tech: ['React', 'JavaScript', 'node.js', 'Python', 'Responsive'],
      year: '2025',
      status: 'Completado',
      github: '#',
      demo: 'https://anime-verse-omega.vercel.app/dashboard'
    },
    {
      id: 4,
      title: 'P.E.P.S',
      description: 'Aplicación web que facilita la busqueda y reservacion de pensiones para estudiantes.',
      image: 'https://raw.githubusercontent.com/MIGUEL6-BNX/Portafolio/refs/heads/main/img/peps.png',
      tech: ['HTML', 'JavaScript', 'CSS', 'Python', ],
      year: '2024',
      status: 'Completado',
      github: '#',
      demo: 'https://miguel6-bnx.github.io/Tienda-Virtual/'
    }
  ];

  return (
    <section id="proyectos" className={`py-32 ${
      darkMode ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <span className={`text-8xl md:text-9xl font-extralight ${
              darkMode ? 'text-white/5' : 'text-black/5'
            }`}>
              03
            </span>
            <div className="mt-8">
              <h2 className={`text-sm uppercase tracking-[0.3em] mb-4 ${
                darkMode ? 'text-gray-500' : 'text-gray-400'
              }`}>
                Proyectos Destacados
              </h2>
              <h3 className={`text-3xl md:text-4xl font-light leading-tight ${
                darkMode ? 'text-white' : 'text-black'
              }`}>
                Trabajos recientes
              </h3>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                  darkMode 
                    ? 'bg-black border border-white/10 hover:border-white/20' 
                    : 'bg-white border border-black/10 hover:border-black/20 shadow-lg hover:shadow-xl'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    darkMode 
                      ? 'bg-black/60 group-hover:bg-black/40' 
                      : 'bg-black/20 group-hover:bg-black/10'
                  }`}></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Completado'
                        ? darkMode 
                          ? 'bg-green-900/50 text-green-300 border border-green-500/30'
                          : 'bg-green-100 text-green-800 border border-green-200'
                        : darkMode
                          ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-500/30'
                          : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                        darkMode 
                          ? 'bg-white/10 text-white hover:bg-white/20' 
                          : 'bg-black/10 text-white hover:bg-black/20'
                      }`}
                      aria-label="Ver código en GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                        darkMode 
                          ? 'bg-white/10 text-white hover:bg-white/20' 
                          : 'bg-black/10 text-white hover:bg-black/20'
                      }`}
                      aria-label="Ver demo en vivo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className={`text-xl font-light ${
                      darkMode ? 'text-white' : 'text-black'
                    }`}>
                      {project.title}
                    </h4>
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      {project.year}
                    </span>
                  </div>

                  <p className={`text-sm leading-relaxed mb-6 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <div
                        key={tech}
                        className={`flex items-center gap-2 px-3 py-1.5 text-xs border transition-colors duration-300 ${
                          darkMode 
                            ? 'border-white/20 text-gray-300 hover:border-white/40 hover:bg-white/5' 
                            : 'border-black/20 text-gray-700 hover:border-black/40 hover:bg-black/5'
                        }`}
                      >
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 border-2 border-transparent transition-colors duration-300 pointer-events-none ${
                  darkMode 
                    ? 'group-hover:border-white/20' 
                    : 'group-hover:border-black/20'
                }`}></div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="mt-20 text-center">
            <a
              href="#"
              className={`inline-flex items-center gap-3 px-8 py-4 border transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'border-white/20 text-gray-300 hover:border-white/40 hover:bg-white/5' 
                  : 'border-black/20 text-gray-700 hover:border-black/40 hover:bg-black/5'
              }`}
            >
              <span className="text-sm uppercase tracking-widest">Ver todos los proyectos</span>
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;