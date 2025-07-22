import React from 'react';
import { ArrowRight } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Sobre Mi Trabajo
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Bienvenido a mi portafolio de programación, un espacio donde comparto los proyectos que he desarrollado
              aplicando mis conocimientos en desarrollo web, software y tecnologías modernas. Aquí encontrarás soluciones
              construidas con pasión por el código, utilizando herramientas como JavaScript, React, Spring Boot, MySQL, y más.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cada proyecto refleja mi evolución como desarrollador y mi compromiso con escribir código limpio, funcional y
              orientado a resolver problemas reales. ¡Gracias por visitar y explorar mi trabajo!
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300">
              Ver Proyectos
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Espacio de trabajo de desarrollo"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};