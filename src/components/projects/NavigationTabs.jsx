import { Box, Button, Flex } from '@chakra-ui/react';
import { Eye, Code } from 'lucide-react';

const Navigation = ({ activeTab, onTabChange }) => {
  return (
    <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }} mt={8}>
      <Flex bg="gray.200" p={1} rounded="lg" w="fit-content">
        <Button
          leftIcon={<Eye size={18} />}
          variant={activeTab === 'gallery' ? 'solid' : 'ghost'}
          colorScheme={activeTab === 'gallery' ? 'brand' : 'gray'}
          bg={activeTab === 'gallery' ? 'white' : 'transparent'}
          color={activeTab === 'gallery' ? 'brand.600' : 'gray.600'}
          shadow={activeTab === 'gallery' ? 'sm' : 'none'}
          onClick={() => onTabChange('gallery')}
          px={6}
          py={3}
          rounded="md"
          fontWeight="medium"
          transition="all 0.2s"
          _hover={{
            color: activeTab === 'gallery' ? 'brand.600' : 'gray.900'
          }}
        >
          Vista de Proyectos
        </Button>
        <Button
          leftIcon={<Code size={18} />}
          variant={activeTab === 'portfolio' ? 'solid' : 'ghost'}
          colorScheme={activeTab === 'portfolio' ? 'brand' : 'gray'}
          bg={activeTab === 'portfolio' ? 'white' : 'transparent'}
          color={activeTab === 'portfolio' ? 'brand.600' : 'gray.600'}
          shadow={activeTab === 'portfolio' ? 'sm' : 'none'}
          onClick={() => onTabChange('portfolio')}
          px={6}
          py={3}
          rounded="md"
          fontWeight="medium"
          transition="all 0.2s"
          _hover={{
            color: activeTab === 'portfolio' ? 'brand.600' : 'gray.900'
          }}
        >
          Portafolio Completo
        </Button>
      </Flex>
    </Box>
  );
};

export default Navigation;