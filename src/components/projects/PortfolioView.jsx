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
  TagLabel,
  VStack
} from '@chakra-ui/react';
import { Calendar, Star, Code, Github, ExternalLink, Download } from 'lucide-react';

const PortfolioView = ({ projects }) => {
  return (
    <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }} mt={8} mb={16}>
      <Box mb={8}>
        <Heading size="lg" color="gray.900" mb={2}>
          Portafolio Completo
        </Heading>
        <Text color="gray.600">
          Todos mis proyectos con información detallada
        </Text>
      </Box>

      <VStack spacing={8} align="stretch">
        {projects.map((project) => (
          <Box
            key={project.id}
            bg="white"
            rounded="xl"
            shadow="sm"
            overflow="hidden"
            transition="all 0.3s"
            _hover={{ shadow: 'md' }}
          >
            <Box p={8}>
              <Flex align="flex-start" justify="space-between" mb={6}>
                <Box flex={1}>
                  <Flex align="center" gap={3} mb={2}>
                    <Heading size="lg" color="gray.900">
                      {project.title}
                    </Heading>
                    {project.featured && (
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
                        <Star size={12} fill="currentColor" />
                        Destacado
                      </Badge>
                    )}
                  </Flex>
                  <Text color="gray.600" fontSize="lg" lineHeight="relaxed">
                    {project.description}
                  </Text>
                </Box>
                <Box textAlign="right" ml={6}>
                  <Flex align="center" gap={2} fontSize="sm" color="gray.500" mb={2}>
                    <Calendar size={14} />
                    <Text>{project.year}</Text>
                  </Flex>
                  <Badge bg="success.100" color="success.700" px={3} py={1} rounded="full" fontSize="sm" fontWeight="medium">
                    {project.status}
                  </Badge>
                </Box>
              </Flex>

              {/* Skills */}
              <Box mb={6}>
                <Heading size="sm" color="gray.900" mb={3} display="flex" alignItems="center" gap={2}>
                  <Code size={16} />
                  Habilidades Aprendidas
                </Heading>
                <Flex wrap="wrap" gap={2}>
                  {project.skills.map((skill, index) => (
                    <Tag
                      key={index}
                      bg="blue.50"
                      color="blue.700"
                      px={3}
                      py={1}
                      rounded="full"
                      fontSize="sm"
                      fontWeight="medium"
                      border="1px"
                      borderColor="blue.200"
                    >
                      <TagLabel>{skill}</TagLabel>
                    </Tag>
                  ))}
                </Flex>
              </Box>

              {/* Images */}
              {project.images.length > 0 && (
                <Box mb={6}>
                  <Heading size="sm" color="gray.900" mb={3}>
                    Capturas del Proyecto
                  </Heading>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    {project.images.map((image, index) => (
                      <Box
                        key={index}
                        rounded="lg"
                        overflow="hidden"
                        shadow="sm"
                        transition="all 0.3s"
                        _hover={{ shadow: 'md' }}
                      >
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          w="full"
                          h="48"
                          objectFit="cover"
                        />
                      </Box>
                    ))}
                  </SimpleGrid>
                </Box>
              )}

              {/* Code Images */}
              {project.codeImages.length > 0 && (
                <Box mb={6}>
                  <Heading size="sm" color="gray.900" mb={3}>
                    Capturas del Código
                  </Heading>
                  <SimpleGrid columns={1} spacing={4}>
                    {project.codeImages.map((image, index) => (
                      <Box
                        key={index}
                        rounded="lg"
                        overflow="hidden"
                        shadow="sm"
                        transition="all 0.3s"
                        _hover={{ shadow: 'md' }}
                      >
                        <Image
                          src={image}
                          alt={`${project.title} code screenshot ${index + 1}`}
                          w="full"
                          h="64"
                          objectFit="cover"
                        />
                      </Box>
                    ))}
                  </SimpleGrid>
                </Box>
              )}

              {/* Actions */}
              <Box pt={4} borderTop="1px" borderColor="gray.100">
                <Heading size="sm" color="gray.900" mb={4}>
                  Enlaces del Proyecto
                </Heading>
                <Flex wrap="wrap" gap={3}>
                  <Button
                    as="a"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    leftIcon={<Github size={16} />}
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
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      leftIcon={<ExternalLink size={16} />}
                      colorScheme="brand"
                      fontWeight="medium"
                    >
                      Backend
                    </Button>
                  )}
                  
                </Flex>
              </Box>
            </Box>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default PortfolioView;