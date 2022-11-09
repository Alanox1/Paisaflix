import { useState, useEffect } from 'react'
import {Stack,Text,Image,Box} from "@chakra-ui/react"
import {getTrailers} from "../../../Funciones/funciones"
function Trailers() {
  const [data,setData] = useState(null)
  useEffect(() => {
    getTrailers(setData)
},[])

  return (
   <Stack>
      <Text margin="20px 0px" fontSize={25}>Trailers</Text>
      <Stack direction="row">
        {data ? data.map((el) => (
          <Box key={el._id}>
              <Image  src={el.trailerImage} />
          </Box>

          
          
        )) : ""}
      </Stack>
   </Stack>
  )
}

export default Trailers