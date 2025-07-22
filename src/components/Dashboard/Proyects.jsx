import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
      }}
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-lg mx-4 text-center transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Portafolio de Proyectos
        </h1>
        <p className="text-lg text-gray-600 mb-2 italic">
          "La creatividad es la inteligencia divirtiéndose."
        </p>
        <p className="text-sm text-gray-500 mb-6">
          - Albert Einstein
        </p>
        <div className="flex justify-center">
          <button 
            onClick={() => navigate('/projects')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors duration-300 shadow-md">
            Ver Portafolio
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};