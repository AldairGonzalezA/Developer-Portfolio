import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import MiCuenta from '../../images/MiCuentaNexus.png'
import VistaSpotify from '../../images/VistaSporify.png'
import ClienteVista from '../../images/PeticionesNexus.png'
import FacturasMenu from '../../images/FacturasMenu.png'
import SuperKinal from '../../images/PaginaPrincipalKinal.png'


export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const images = [
    {
      url: MiCuenta,
      title: "Desarrollo Web Moderno",
      description: "Proyectos con tecnologías frontend y backend"
    },
    {
      url: SuperKinal,
      title: "Programación y Algoritmos",
      description: "Soluciones eficientes y código limpio"
    },
    {
      url: ClienteVista,
      title: "Bases de Datos",
      description: "Gestión y optimización de datos"
    },
    {
      url: VistaSpotify,
      title: "Desarrollo Mobile",
      description: "Aplicaciones móviles con tecnologías modernas"
    },
    {
      url: FacturasMenu,
      title: "Trabajo en Equipo",
      description: "Colaboración y metodologías ágiles"
    }
  ];

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-100 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Galería de Proyectos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una muestra visual de las tecnologías y áreas en las que me especializo
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main carousel container */}
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${index === currentIndex ? 'translate-x-0' :
                    index < currentIndex ? '-translate-x-full' : 'translate-x-full'
                  }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{image.title}</h3>
                  <p className="text-lg text-gray-200">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Play/Pause button */}
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            {isAutoPlay ? <Pause size={20} /> : <Play size={20} />}
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-5 gap-4 mt-8 max-w-2xl mx-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-20 rounded-lg overflow-hidden transition-all duration-300 ${index === currentIndex
                  ? 'ring-4 ring-blue-500 scale-105'
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};