import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import { ArrowLeft } from 'lucide-react';

const Header = ({ selectedProject, onBackToGallery }) => {
  return (
    <Box bgGradient="linear(to-br, gray.900, gray.800)"  py={16} shadow="sm" borderBottom="1px" borderColor="gray.200">
      <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }} py={6}>
        <Flex align="center" justify="space-between">
          <Box>
            <Heading size="xl" color="white" mb={2}>
              {selectedProject ? selectedProject.title : 'Mi Portafolio'}
            </Heading>
            <Text color="gray.600">
              {selectedProject 
                ? 'Detalles del proyecto' 
                : 'Explora mis proyectos y capacidades de desarrollo'
              }
            </Text>
          </Box>
          {selectedProject && (
            <Button
              leftIcon={<ArrowLeft size={16} />}
              variant="outline"
              colorScheme="white"
              onClick={onBackToGallery}
              color="white"
            >
              Volver a la galería
            </Button>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;