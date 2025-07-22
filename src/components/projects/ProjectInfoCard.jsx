// src/components/projects/ProjectInfoCard.jsx
import React from "react";
import { Github, ExternalLink, Download, Code, Calendar, Star, FlaskConical, Link } from "lucide-react"; // Nuevos iconos

export const ProjectInfoCard = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1"> {/* Sombra y elevación */}
      <div className="p-8">
        <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h3 className="text-3xl font-extrabold text-indigo-900">
                {project.title}
              </h3>
              {project.featured && (
                <span className="bg-rose-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 shadow-md">
                  <Star size={14} fill="currentColor" />
                  Destacado
                </span>
              )}
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mt-2">
              {project.description}
            </p>
          </div>
          <div className="text-right ml-6 flex-shrink-0">
            <div className="flex items-center gap-2 text-base text-gray-500 mb-2 justify-end">
              <Calendar size={16} className="text-indigo-500" />
              <span className="font-medium">{project.year}</span>
            </div>
            <span
              className={`px-4 py-1.5 rounded-full text-sm font-bold uppercase ${
                project.status === "Finalizado"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-amber-100 text-amber-700"
              } shadow-sm`}
            >
              {project.status}
            </span>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h4 className="font-bold text-xl text-indigo-900 mb-4 flex items-center gap-2">
            <FlaskConical size={20} className="text-indigo-600" />
            Tecnologías Utilizadas
          </h4>
          <div className="flex flex-wrap gap-3">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium border border-indigo-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Images */}
        {project.images.length > 0 && (
          <div className="mb-8">
            <h4 className="font-bold text-xl text-indigo-900 mb-4">
              <Link size={20} className="inline-block mr-2 text-indigo-600" />
              Capturas del Proyecto
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <img
                    src={image}
                    alt={`${project.title} captura ${index + 1}`}
                    className="w-full h-52 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Code Images */}
        {project.codeImages.length > 0 && (
          <div className="mb-8">
            <h4 className="font-bold text-xl text-indigo-900 mb-4">
              <Code size={20} className="inline-block mr-2 text-indigo-600" />
              Fragmentos de Código
            </h4>
            <div className="grid grid-cols-1 gap-5">
              {project.codeImages.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <img
                    src={image}
                    alt={`${project.title} captura de código ${index + 1}`}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-4 pt-6 border-t border-indigo-50">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-gray-900 transition-colors duration-200 flex items-center gap-2 shadow-sm"
          >
            <Github size={18} />
            Ver Repositorio
          </a>

          {project.githubUrlBackend && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2 shadow-sm"
            >
              <ExternalLink size={18} />
              Backend
            </a>
          )}

        </div>
      </div>
    </div>
  );
};