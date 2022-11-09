import { useEffect, useState } from 'react'
import {Stack,Text,Image,Button} from "@chakra-ui/react"
import {getHeroData} from "../../../Funciones/funciones"

function Hero() {
    const [info,setInfo] = useState(null);
    useEffect(() => {
        getHeroData(setInfo)
    },[])
    
   
  return (
    <Stack as="main" direction="row">
        {info 
         ?<><Stack width="40%">
              <Text marginTop="70px" fontSize={60}>{info.name}</Text>
              <Text paddingBottom="40px" color="gold" fontSize={20}>{String("★").repeat(info.rating).padEnd(5,"☆")}</Text>
              <Text width="75%" color="gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
              <Stack padding="30px 0px">
                <Text>Genre : {info.genre}</Text>
                <Text>Duration : {Math.floor(info.duration / 60)}hr {info.duration % 60}mins</Text>
                <Text>Ratings : {info.rating}</Text>
              </Stack>
              <Button colorScheme="yellow"
                      borderRadius={50}
                      width="60%"
                      size="lg"
                      >Watch now</Button>
           </Stack> 
            <Stack zIndex="-1" position="absolute" top="0px" right="0" width="60%">
                <Image src={info.coverImage} />
           </Stack>  
           </>
        : ""
        }
        
    </Stack>
  )
}

export default Hero