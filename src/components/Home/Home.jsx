import { useState } from 'react'
import {Box} from "@chakra-ui/react"
import Hero from './components/Hero'
import Trailers from './components/Trailers';
import Featured from './components/Featured';
function Home({children}) {
  
  return (
    <Box>
      <Hero />
      <Trailers />
      <Featured />
    </Box>
  )
}

export default Home