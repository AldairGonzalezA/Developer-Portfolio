import { Box, Image, Text, Heading, Badge, Button, Flex } from '@chakra-ui/react';
import { Eye, Calendar, Star } from 'lucide-react';

const ProjectCard = ({ project, onProjectClick }) => {
  return (
    <Box
      bg="white"
      rounded="xl"
      shadow="sm"
      overflow="hidden"
      role="group"
      transition="all 0.3s"
      _hover={{ shadow: 'lg' }}
    >
      <Box position="relative" overflow="hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          w="full"
          h="48"
          objectFit="cover"
          transition="transform 0.3s"
          _groupHover={{ transform: 'scale(1.05)' }}
        />
        {project.featured && (
          <Box position="absolute" top={3} left={3}>
            <Badge
              bg="orange.500"
              color="white"
              px={2}
              py={1}
              rounded="full"
              fontSize="xs"
              fontWeight="medium"
              display="flex"
              alignItems="center"
              gap={1}
            >
            </Badge>
          </Box>
        )}
        <Box
          position="absolute"
          inset={0}
          bg="blackAlpha.600"
          opacity={0}
          transition="all 0.3s"
          display="flex"
          alignItems="center"
          justifyContent="center"
          _groupHover={{ opacity: 1 }}
        >
          <Button
            leftIcon={<Eye size={16} />}
            bg="white"
            color="gray.900"
            fontWeight="medium"
            transform="translateY(8px)"
            transition="all 0.3s"
            _groupHover={{ transform: 'translateY(0)' }}
            onClick={() => onProjectClick(project)}
          >
            Ver detalles
          </Button>
        </Box>
      </Box>
      <Box p={6}>
        <Heading size="md" color="gray.900" mb={2}>
          {project.title}
        </Heading>
        <Text color="gray.600" fontSize="sm" mb={3} noOfLines={2}>
          {project.description}
        </Text>
        <Flex align="center" justify="space-between" fontSize="sm" color="gray.500">
          <Flex align="center" gap={1}>
            <Calendar size={14} />
            <Text>{project.year}</Text>
          </Flex>
          <Badge bg="success.100" color="success.700" px={2} py={1} rounded="full">
            {project.status}
          </Badge>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProjectCard;