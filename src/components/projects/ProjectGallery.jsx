import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

const ProjectGallery = ({ projects, onProjectClick }) => {
  const visualProjects = projects.filter(project => project.images.length > 0);

  return (
    <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }} mt={8} mb={16}>
      <Box mb={8}>
        <Heading size="lg" color="gray.900" mb={2}>
          Galería Visual de Proyectos
        </Heading>
        <Text color="gray.600">
          Capturas de pantalla de proyectos con interfaz visual
        </Text>
      </Box>
      
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {visualProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onProjectClick={onProjectClick}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectGallery;