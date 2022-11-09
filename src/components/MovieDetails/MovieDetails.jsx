import { useState,useEffect } from 'react'
import {Image,Text,Stack,Button,Icon} from "@chakra-ui/react"
 import { getMoviePage } from "../../Funciones/funciones"
import Loading from '../Loading/Loading'
import {useParams,Link} from "react-router-dom"
import {AiOutlineArrowLeft} from "react-icons/ai"
function MovieDetails() {
  const [data,setData] = useState(null)
  const params = useParams()
  useEffect(() => {
    getMoviePage(params._id,setData)
  },[])
  return (
    <Stack>
       {data ?<Stack direction="row">
        <Stack width="40%">
        <Link to={"/"} replace>
              <Icon cursor="pointer" margin="30px 0px" fontSize={30} as={AiOutlineArrowLeft} /> 
        </Link>
                   
                     <Text marginTop="70px" fontSize={60}>{data.name}</Text>
                     <Text paddingBottom="40px" color="gold" fontSize={25}>{String("★").repeat(data.rating).padEnd(5,"☆")}</Text>
                     <Text width="75%" color="gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
                   <Stack padding="30px 0px">
                       <Text>Genre : {data.genre}</Text>
                       <Text>Duration : {Math.floor(data.duration / 60)}hr {data.duration % 60}mins</Text>
                       <Text>Ratings : {data.rating}</Text>
                  </Stack>

                  <Button colorScheme="yellow"
                      borderRadius={50}
                      width="60%"
                      size="lg"
                      >Watch now</Button>
                       <Stack>
                  <Text margin="20px 0px" fontSize={25}>Trailer</Text>
                  <Image width="50%" src={data.trailerImage} />
                </Stack>
                </Stack>
                <Stack  width="60%" >
                  <Image zIndex="-1" width="60%" height="60%" position="absolute" top="0px" right="0px" src={data.coverImage}/>
                </Stack>

               
             </Stack>  
       : <Loading />} 
     
    </Stack>
   
  )
}

export default MovieDetails
