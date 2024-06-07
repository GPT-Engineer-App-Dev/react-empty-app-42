import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      <Flex
        as="nav"
        bg="blue.500"
        color="white"
        padding="1.5rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading size="md">Hello World App</Heading>
      </Flex>
      <Container
        centerContent
        maxW="container.md"
        height="calc(100vh - 80px)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={4}
      >
        <VStack spacing={4} textAlign="center">
          <Heading as="h1" size="2xl">
            Hello World!
          </Heading>
          <Text fontSize="xl">Welcome to your new React application.</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;