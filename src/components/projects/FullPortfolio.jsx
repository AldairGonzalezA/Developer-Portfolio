// src/components/projects/FullPortfolio.jsx
import React from "react";
import { ProjectInfoCard } from "./ProjectInfoCard";

export const FullPortfolio = ({ projects }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-extrabold text-indigo-900 mb-3 tracking-tight">
          Explora mi Portafolio Completo
        </h2>
        <p className="text-gray-700 text-xl max-w-2xl mx-auto">
          Un listado detallado de todos los proyectos que he desarrollado.
        </p>
      </div>

      <div className="space-y-10"> {/* Mayor separación entre elementos */}
        {projects.map((project) => (
          <ProjectInfoCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};