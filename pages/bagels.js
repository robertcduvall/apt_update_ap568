import { CheckIcon, CloseIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { Grid, Text, GridItem, Heading, Image, CircularProgress, CircularProgressLabel, Center, Stack, Card, CardBody, Flex, Spacer } from "@chakra-ui/react";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from "@/chatbot/config.js";
import MessageParser from "@/chatbot/MessageParser.js";
import ActionProvider from "@/chatbot/ActionProvider";


export default function Bagels() {
    return (
      <main>
        <Card>
          <CardBody>
            <Center>
              <Text>Bagels.py</Text>
            </Center>
            <Center>
              <Text>ap568</Text>
            </Center>
          </CardBody>
        </Card>
        <Grid
          templateAreas={`"nav main chat"`}
          gridTemplateRows={'100%'}
          gridTemplateColumns={'1fr 1fr 1fr'}
          h='920px'
          gap='0'
          fontWeight='bold'
        >
          <GridItem pl='0' textColor='black' area={'nav'}>
            <Stack spacing={2}>
              <Card>
                <CardBody>
                  <Center>
                    <Heading color='black'>Your Code</Heading>
                  </Center>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Image src="codelight.png" alt="code" fit="fill" height='700px'></Image>
                </CardBody>
              </Card>
            </Stack>
          </GridItem>
          <GridItem pl='2' bg='white' area={'main'}>
            <Stack spacing={2}>
              <Card>
                <CardBody>
                  <Center>
                    <Heading paddingBottom={4} color='black'>Tests Passing</Heading>
                  </Center>
                  <Center>        
                    <CircularProgress value={40} color='blue.400' size='60px'>
                      <CircularProgressLabel>2/5</CircularProgressLabel>
                    </CircularProgress>
                  </Center>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                  <Heading size='md'>Test 1</Heading>
                  <Spacer></Spacer>
                  <CheckIcon color="green"></CheckIcon>
                  </Flex>
                  <Text>
                    Got: 650
                  </Text>
                  <Text>
                    Expected: 650
                  <Text>
                    Case: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
                  </Text>
                  </Text>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                  <Heading size='md'>Test 2</Heading>
                  <Spacer></Spacer>
                  <CloseIcon color='red'></CloseIcon>
                  </Flex>
                  <Text>
                    Got: 17
                  </Text>
                  <Text>
                    Expected: 16
                  <Text>
                    Case: [1, 3, 5, 7]
                  </Text>
                  </Text>
                </CardBody>
              </Card><Card>
                <CardBody>
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                  <Heading size='md'>Test 3</Heading>
                  <Spacer></Spacer>
                  <CloseIcon color='red'></CloseIcon>
                  </Flex>
                  <Text>
                    Got: 639
                  </Text>
                  <Text>
                    Expected: 630
                  <Text>
                    Case: [59, 59, 59, 59, 59, 59, 59, 59, 59, 59]
                  </Text>
                  </Text>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                  <Heading size='md'>Test 4</Heading>
                  <Spacer></Spacer>
                  <CheckIcon color="green"></CheckIcon>
                  </Flex>
                  <Text>
                    Got: 178
                  </Text>
                  <Text>
                    Expected: 175
                  <Text>
                    Case: [11, 22, 33, 44, 55]
                  </Text>
                  </Text>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                  <Heading size='md'>Test 5</Heading>
                  <Spacer></Spacer>
                  <CloseIcon color='red'></CloseIcon>
                  </Flex>
                  <Text>
                    Got: 32
                  </Text>
                  <Text>
                    Expected: 30
                  <Text>
                    Case: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
                  </Text>
                  </Text>
                </CardBody>
              </Card>
            </Stack>
          </GridItem>
          <GridItem pl='0' bg='white' textColor='black' area={'chat'}>
          <Card>
            <CardBody>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
                  <Heading size='md'>Ask the AI TA a question:</Heading>
                  <Spacer></Spacer>
                  <InfoOutlineIcon></InfoOutlineIcon>
                  </Flex>
                  <Text>
                  
                  </Text>
                  <Text fontWeight='light'>
                    - What does line 5 do?
                  <Text>
                   -  Why does test 3 not pass?
                  </Text>
                  </Text>
            </CardBody>
            </Card>
            <Card>
            <CardBody>
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
              wifth
            />
            </CardBody>
              </Card>
          </GridItem>
        </Grid>
      </main>
    );
}
