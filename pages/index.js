import {Button, Badge, ButtonGroup, Spacer, Flex, Card, CardBody, Text, Heading, Center} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleSubmitBagels = () => {
    router.push('/bagels');
  };

  return (
    <main>
    <Card>
      <CardBody>
      <Heading>APT Set 2</Heading>
        Due: February 22, 2024
      </CardBody>
    </Card>

    <Card>
      <CardBody>
      <Heading size='md'>Pancakes</Heading>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Badge colorScheme='blue'>Lecture 9</Badge>
          <Badge colorScheme='red'>Math</Badge>

          <Spacer />
              <ButtonGroup gap='2'>
                  <Button colorScheme='teal'>Read</Button>
                  <Button colorScheme='teal'>Submit</Button>
              </ButtonGroup>
      </Flex>
      </CardBody>
    </Card>

    <Card>
      <CardBody>
      <Heading size='md'>DNAcgratio</Heading>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
              <Badge colorScheme='red'>Math</Badge>
          <Spacer />
              <ButtonGroup gap='2'>
                  <Button colorScheme='teal'>Read</Button>
                  <Button colorScheme='teal'>Submit</Button>
              </ButtonGroup>
      </Flex>
      </CardBody>
    </Card>

    <Card>
      <CardBody>
      <Heading size='md'>Bagels</Heading>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Badge colorScheme='purple'>Lecture 8</Badge>
          <Badge colorScheme='yellow'>Loop</Badge>
          <Badge colorScheme='green'>Challenge</Badge>
          <Spacer />
              <ButtonGroup gap='2'>
                  <Button colorScheme='teal'>Read</Button>
                  <Button colorScheme='teal' onClick={handleSubmitBagels}>Submit</Button>
              </ButtonGroup>
      </Flex>
      </CardBody>
    </Card>
    <Center padding={5}>
    <Text>Uploaded File: Bagels.py</Text>
    </Center>
    <Center>
      <Button>Upload</Button>
    </Center>
    </main>
  );
}
