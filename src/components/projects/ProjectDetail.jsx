import { 
  Box, 
  Heading, 
  Text, 
  Badge, 
  Flex, 
  SimpleGrid, 
  Image, 
  Button,
  Tag,
  TagLabel
} from '@chakra-ui/react';
import { Calendar, Star, Code, Eye, Github, ExternalLink, Download } from 'lucide-react';

const ProjectDetail = ({ project, onImageExpand }) => {
  return (
    <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }} mt={8} mb={16}>
      <Box bg="white" rounded="xl" shadow="sm" overflow="hidden">
        {/* Project Header */}
        <Box
          bgGradient="linear(to-r, brand.600, brand.700)"
          color="white"
          p={8}
        >
          <Flex align="center" gap={3} mb={4}>
            <Heading size="xl">{project.title}</Heading>
            {project.featured && (
              <Badge
                bg="orange.500"
                color="white"
                px={3}
                py={1}
                rounded="full"
                fontSize="sm"
                fontWeight="medium"
                display="flex"
                alignItems="center"
                gap={1}
              >
                <Star size={14} fill="currentColor" />
                Destacado
              </Badge>
            )}
          </Flex>
          <Text color="blue.100" fontSize="lg" lineHeight="relaxed" mb={4}>
            {project.description}
          </Text>
          <Flex align="center" gap={6} fontSize="sm">
            <Flex align="center" gap={2}>
              <Calendar size={16} />
              <Text>Año: {project.year}</Text>
            </Flex>
            <Badge bg="success.500" color="white" px={3} py={1} rounded="full" fontWeight="medium">
              {project.status}
            </Badge>
          </Flex>
        </Box>

        <Box p={8}>
          {/* Skills Section */}
          <Box mb={8}>
            <Heading size="md" color="gray.900" mb={4} display="flex" alignItems="center" gap={2}>
              <Code size={20} />
              Habilidades Aprendidas
            </Heading>
            <Flex wrap="wrap" gap={3}>
              {project.skills.map((skill, index) => (
                <Tag
                  key={index}
                  bg="blue.50"
                  color="blue.700"
                  px={4}
                  py={2}
                  rounded="full"
                  fontSize="sm"
                  fontWeight="medium"
                  border="1px"
                  borderColor="blue.200"
                  transition="all 0.2s"
                  _hover={{ bg: 'blue.100' }}
                >
                  <TagLabel>{skill}</TagLabel>
                </Tag>
              ))}
            </Flex>
          </Box>

          {/* Project Images Gallery */}
          {project.images.length > 0 && (
            <Box mb={8}>
              <Heading size="md" color="gray.900" mb={4}>
                Galería del Proyecto
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                {project.images.map((image, index) => (
                  <Box
                    key={index}
                    position="relative"
                    role="group"
                    cursor="pointer"
                    rounded="lg"
                    overflow="hidden"
                    shadow="md"
                    transition="all 0.3s"
                    _hover={{ shadow: 'lg' }}
                    onClick={() => onImageExpand(image)}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      w="full"
                      h="48"
                      objectFit="cover"
                      transition="transform 0.3s"
                      _groupHover={{ transform: 'scale(1.05)' }}
                    />
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
                      <Box
                        bg="white"
                        color="gray.900"
                        px={3}
                        py={1}
                        rounded="lg"
                        fontWeight="medium"
                        transform="translateY(8px)"
                        transition="all 0.3s"
                        display="flex"
                        alignItems="center"
                        gap={2}
                        _groupHover={{ transform: 'translateY(0)' }}
                      >
                        <Eye size={16} />
                        Ampliar
                      </Box>
                    </Box>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          )}

          {/* Code Images Gallery */}
          {project.codeImages.length > 0 && (
            <Box mb={8}>
              <Heading size="md" color="gray.900" mb={4}>
                Capturas del Código
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                {project.codeImages.map((image, index) => (
                  <Box
                    key={index}
                    position="relative"
                    role="group"
                    cursor="pointer"
                    rounded="lg"
                    overflow="hidden"
                    shadow="md"
                    transition="all 0.3s"
                    _hover={{ shadow: 'lg' }}
                    onClick={() => onImageExpand(image)}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} code screenshot ${index + 1}`}
                      w="full"
                      h="64"
                      objectFit="cover"
                      transition="transform 0.3s"
                      _groupHover={{ transform: 'scale(1.05)' }}
                    />
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
                      <Box
                        bg="white"
                        color="gray.900"
                        px={3}
                        py={1}
                        rounded="lg"
                        fontWeight="medium"
                        transform="translateY(8px)"
                        transition="all 0.3s"
                        display="flex"
                        alignItems="center"
                        gap={2}
                        _groupHover={{ transform: 'translateY(0)' }}
                      >
                        <Eye size={16} />
                        Ampliar
                      </Box>
                    </Box>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          )}

          {/* Action Buttons */}
          <Box bg="gray.50" rounded="lg" p={6}>
            <Heading size="md" color="gray.900" mb={4}>
              Enlaces del Proyecto
            </Heading>
            <Flex wrap="wrap" gap={4}>
              <Button
                as="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<Github size={18} />}
                bg="gray.900"
                color="white"
                fontWeight="medium"
                transition="all 0.2s"
                _hover={{ bg: 'gray.800' }}
              >
                Ver Repositorio
              </Button>
              
              {project.githubUrlBackend && (
                <Button
                as="a"
                href={project.githubUrlBackend}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<Github size={18} />}
                bg="gray.900"
                color="white"
                fontWeight="medium"
                transition="all 0.2s"
                _hover={{ bg: 'gray.800' }}
              >
                Ver Repositorio Backend
              </Button>
              )}
              
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDetail;