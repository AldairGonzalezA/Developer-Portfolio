import React from 'react';
import { User, Calendar, Code } from 'lucide-react';

export const PersonalInfo = () => {
  const personalData = [
    {
      icon: <User className="w-5 h-5 text-blue-600" />,
      label: "Nombre Completo",
      value: "Aldair Alejandro González Araujo"
    },
    {
      icon: <Calendar className="w-5 h-5 text-green-600" />,
      label: "Edad",
      value: "18 años"
    },
    {
      icon: <Code className="w-5 h-5 text-purple-600" />,
      label: "Años Desarrollando",
      value: "3 años"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-6">Datos Generales</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              Soy estudiante dedicado a las ciencias de la computación con experiencia en desarrollo de software
              y tecnologías web. A lo largo de mi trayectoria académica, he demostrado sólidas habilidades para la resolución
              de problemas, pasión por el aprendizaje y compromiso para ofrecer resultados de calidad.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              He trabajado exitosamente en varios proyectos, enfocándome en desarrollo backend con Spring Boot, 
              administración de bases de datos usando MySQL y desarrollo frontend con React y JavaScript. 
              Estoy ansioso por aplicar mis habilidades en entornos del mundo real y seguir creciendo como desarrollador.
            </p>
            <div className="space-y-4 mt-8">
              {personalData.map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-lg p-4">
                  {item.icon}
                  <div>
                    <span className="font-semibold text-gray-200">{item.label}:</span>
                    <span className="ml-2 text-white">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Lugar de trabajo"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};