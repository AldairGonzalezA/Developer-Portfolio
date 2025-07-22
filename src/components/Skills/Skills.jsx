import React, { useEffect, useState } from 'react';

const SkillBar = ({ skill, value }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth(value);
    }, 200); // pequeña pausa para mejorar la animación

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{skill}</h3>
        <span className="text-sm font-bold text-blue-600">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const skills = [
    { skill: 'JavaScript', value: 85 },
    { skill: 'Java', value: 75 },
    { skill: 'React', value: 85 },
    { skill: 'Node.js', value: 80 },
    { skill: 'Java EE', value: 25 },
    { skill: 'MySQL', value: 87 },
    { skill: 'MongoDB', value: 80 },
    { skill: 'GitHub', value: 75 },
    { skill: 'Ionic', value: 30 },
    { skill: 'Github', value: 88},
    { skill: 'HTML', value: 80},
    { skill: 'CCS', value: 75},
    
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Mis Habilidades</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo para crear soluciones innovadoras
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillItem, index) => (
            <SkillBar key={index} skill={skillItem.skill} value={skillItem.value} />
          ))}
        </div>
      </div>
    </section>
  );
};
