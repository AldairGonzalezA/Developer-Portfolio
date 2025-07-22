
import React, { useState } from "react";
import { projects } from "../../data/projectsData"; // Importa tus datos
import  Header  from "../../components/projects/Header.jsx";
import  Navigation from "../../components/projects/NavigationTabs.jsx";
import  ProjectGallery from "../../components/projects/ProjectGallery.jsx";
import  ProjectDetail  from "../../components/projects/ProjectDetail.jsx";
import PortfolioView from "../../components/projects/PortfolioView.jsx";
import  ImageModal  from "../../components/common/ImageModal.jsx";
import theme from './theme.js'
import { ChakraProvider, Box } from "@chakra-ui/react";

export const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState('gallery');
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setActiveTab('detail');
  };

  const handleBackToGallery = () => {
    setSelectedProject(null);
    setActiveTab('gallery');
  };

  const handleImageExpand = (image) => {
    setExpandedImage(image);
  };

  const handleImageModalClose = () => {
    setExpandedImage(null);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bgGradient="linear(to-br, gray.50, gray.100)">
        {/* Header */}
        <Header 
          selectedProject={selectedProject} 
          onBackToGallery={handleBackToGallery} 
        />

        {/* Navigation Tabs */}
        {!selectedProject && (
          <Navigation 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />
        )}

        {/* Gallery View */}
        {activeTab === 'gallery' && (
          <ProjectGallery 
            projects={projects} 
            onProjectClick={handleProjectClick} 
          />
        )}

        {/* Project Detail View */}
        {activeTab === 'detail' && selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onImageExpand={handleImageExpand} 
          />
        )}

        {/* Portfolio View */}
        {activeTab === 'portfolio' && (
          <PortfolioView projects={projects} />
        )}

        {/* Expanded Image Modal */}
        <ImageModal
          isOpen={!!expandedImage}
          onClose={handleImageModalClose}
          imageSrc={expandedImage}
        />
      </Box>
    </ChakraProvider>
  );
};