import { ChakraProvider } from '@chakra-ui/react'

import LandingPage from '../src/components/templates/LandingPage';
import './App.css'

function App() {
  console.log(">>>")
  return (
    <ChakraProvider>
      <LandingPage />
    </ChakraProvider>
  )
}

export default App
