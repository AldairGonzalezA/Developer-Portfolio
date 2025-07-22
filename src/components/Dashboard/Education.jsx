import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

export const EducationSection = () => {
  const education = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: "Diversificado Perito en Computación",
      period: "2022-2025",
      institution: "Centro Educativo Técnico Labora KINAL",
      description: "Formación técnica especializada en desarrollo de software y tecnologías de la información."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-600" />,
      title: "Prácticas Diversificado",
      period: "18/08/2025 - 25/10/2025",
      institution: "Desarrolladora de Proyectos San Miguel",
      description: "Experiencia práctica en desarrollo de proyectos reales en entorno empresarial."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Educación y desarrollo"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-6">Educación y Experiencia</h2>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-white/10 rounded-lg p-3">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-blue-300 font-medium mb-2">{item.period}</p>
                      <p className="text-gray-300 font-medium mb-3">{item.institution}</p>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};