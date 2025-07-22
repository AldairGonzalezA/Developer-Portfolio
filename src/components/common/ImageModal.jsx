import { 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalCloseButton, 
  Image, 
  Box, 
  Text 
} from '@chakra-ui/react';

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
      <ModalOverlay bg="blackAlpha.900" />
      <ModalContent bg="transparent" shadow="none" maxW="90vw" maxH="90vh">
        <ModalCloseButton
          bg="white"
          color="gray.900"
          rounded="full"
          size="lg"
          fontWeight="bold"
          fontSize="xl"
          transition="all 0.2s"
          _hover={{ bg: 'gray.100' }}
          zIndex={2}
        />
        <Box position="relative" w="full" h="full" display="flex" alignItems="center" justifyContent="center">
          <Image
            src={imageSrc}
            alt="Imagen ampliada"
            maxW="full"
            maxH="full"
            objectFit="contain"
            rounded="lg"
            shadow="2xl"
          />
          <Box
            position="absolute"
            bottom={4}
            left="50%"
            transform="translateX(-50%)"
            bg="blackAlpha.700"
            color="white"
            px={4}
            py={2}
            rounded="lg"
            fontSize="sm"
          >
            <Text>Haz clic fuera de la imagen para cerrar</Text>
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;