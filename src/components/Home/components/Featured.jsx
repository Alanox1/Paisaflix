import { useState, useEffect } from 'react'
import {Stack,Text,Image,Icon} from "@chakra-ui/react"
import { getFeatured} from '../../../Funciones/funciones'
import { Link } from "react-router-dom";
import {AiOutlineClockCircle, AiOutlineEye} from "react-icons/ai"
function Featured() {
  const [info,setInfo] = useState(null)
  useEffect(() => {
    getFeatured(setInfo)
  
},[])


  return (
   <Stack paddingTop={120}>
    <Stack direction="row" justifyContent="space-between">
        <Text fontSize={30}>Featured</Text>
        <Text fontSize={20} color="gold">View More</Text>
    </Stack>
   <Stack direction="row" flexWrap="wrap" spacing="10px">
     {info 
     ? info.map((el) => (
       <Link key={el._id}    onClick={() => getMoviePage(el._id)} to={`/movies/${el._id}`}>
        <Stack position="relative"    >
          <Stack opacity="0.7">
          <Image  cursor="pointer" 
                width="auto" 
                height="100%"   
                
                src={el.coverImage} />
          </Stack>
         
           <Text   position="absolute"
                   top="16px"
                   left="16px"
                   border="5px solid gold"
                   backgroundColor="gold"
                   borderRadius="40%"
                   color="blackAlpha.800"
                   fontSize={18}
                   >{el.genre}
           </Text>
          <Stack bottom="15px" 
                 left="16px"
                 position="absolute"
                 color="white"
                 fontWeight="bold"
                 boxShadow= "inset 100 20 gold" opacity="0.7"
          > 
         
            <Stack direction="row" 
                   fontSize={23} 
                   paddingBottom="25px" 
                  >
              <Stack direction="row"    alignItems="center">
                  <Icon 
                  as={AiOutlineClockCircle} />
                  <Text>{Math.floor(el.duration / 60)}hr {el.duration % 60}mins</Text>
              </Stack>
              <Stack direction="row" alignItems="center" >
                 <Icon as={AiOutlineEye} />
                 <Text color="white" >{el.views.toLocaleString('es-AR')}k views</Text>
              </Stack>
            </Stack>
           
          <Text  color="white" 
                 fontSize={35}
                 fontWeight="bold"
                 >{el.name}</Text>
          </Stack>
        
        </Stack>
        
      </Link>
  ))
   : "" }
   </Stack>
  
      
     
   </Stack>
  )
}

export default Featured