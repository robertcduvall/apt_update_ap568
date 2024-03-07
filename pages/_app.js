import "@/styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
