import React, { useState } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado! Te responderé pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className={`py-32 ${
      darkMode ? 'bg-black' : 'bg-white'
    }`}>
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <span className={`text-8xl md:text-9xl font-extralight ${
                  darkMode ? 'text-white/5' : 'text-black/5'
                }`}>
                  04
                </span>
              </div>
              
              <div>
                <h2 className={`text-sm uppercase tracking-[0.3em] mb-4 ${
                  darkMode ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  Contacto
                </h2>
                <h3 className={`text-3xl md:text-4xl font-light leading-tight mb-8 ${
                  darkMode ? 'text-white' : 'text-black'
                }`}>
                  Trabajemos juntos
                </h3>
                <p className={`text-lg font-light leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas 
                  y ayudarte a convertirlas en realidad.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 pt-8">
                <a
                  href="mailto:juan.dev@email.com"
                  className={`group flex items-center gap-4 transition-all duration-300 ${
                    darkMode 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  <Mail size={20} />
                  <span className="text-lg font-light">luismiguel10608@gmail.com</span>
                  <ArrowUpRight 
                    size={16} 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  />
                </a>

                <div className={`text-sm ${
                  darkMode ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  <p>La Guajira, Colombia</p>
                  <p>Disponible para proyectos remotos</p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    required
                    className={`w-full bg-transparent border-b pb-4 text-lg font-light transition-colors duration-300 focus:outline-none ${
                      darkMode 
                        ? 'border-white/20 text-white placeholder-gray-500 focus:border-white' 
                        : 'border-black/20 text-black placeholder-gray-400 focus:border-black'
                    }`}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    required
                    className={`w-full bg-transparent border-b pb-4 text-lg font-light transition-colors duration-300 focus:outline-none ${
                      darkMode 
                        ? 'border-white/20 text-white placeholder-gray-500 focus:border-white' 
                        : 'border-black/20 text-black placeholder-gray-400 focus:border-black'
                    }`}
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntame sobre tu proyecto..."
                    required
                    rows={4}
                    className={`w-full bg-transparent border-b pb-4 text-lg font-light transition-colors duration-300 focus:outline-none resize-none ${
                      darkMode 
                        ? 'border-white/20 text-white placeholder-gray-500 focus:border-white' 
                        : 'border-black/20 text-black placeholder-gray-400 focus:border-black'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className={`group flex items-center gap-4 text-sm uppercase tracking-widest transition-all duration-300 hover:gap-6 ${
                    darkMode 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  Enviar mensaje
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;