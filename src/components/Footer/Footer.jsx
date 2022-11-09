import {Button,Stack,Text,Link,Icon} from "@chakra-ui/react"
import {AiOutlineArrowRight} from "react-icons/ai"
import {TfiLocationPin} from "react-icons/tfi"
import {BiMessageDetail} from "react-icons/bi"
import {BsTelephone} from "react-icons/bs"
function Footer() {
  
  return (
    <Stack position="relative">
<Stack paddingTop="200px" 
           direction="row">
        <Stack width="40%">
          <Text fontSize={60}>Paisaflix</Text>
          <Text>Join Newsletters</Text>
          <Button width="60%"
                  colorScheme="black"
                  border="1px solid gray"
                  padding={8}
                  justifyContent="space-between"
            >
              <Text color="gray">Insert your mail here</Text>
              <Icon color="black"  backgroundColor="gold" size="lg"  fontSize={30} as={AiOutlineArrowRight} />
          </Button>
        </Stack>
       <Stack width="60%" 
              justifyContent="space-evenly" 
              direction="row"
              >
              <Stack spacing={30}>
                  <Text fontWeight="bold">Product</Text>
                  <Text>Movies</Text>
                  <Text>TV Show</Text>
                  <Text>Videos</Text>
                </Stack>

                <Stack spacing={30}>
                  <Text fontWeight="bold">Media Group</Text>
                  <Text>Nice Studio</Text>
                  <Text>Nice News</Text>
                  <Text>Nice TV</Text>
                </Stack>

                <Stack spacing={30}>
                  <Text fontWeight="bold">Sitemap</Text>
                  <Text>About</Text>
                  <Text>Careers</Text>
                  <Text>Press</Text>
                </Stack>
       </Stack>
     
    </Stack>
    <Stack direction="row"
           width="50%"
           alignItems="center"
           gap="10px"
           fontSize={14}
           padding="100px 0px"
           >
        <Text direction="row"> <Icon as={TfiLocationPin} />8819 Enrique Martinez, Bs As., 90280</Text>
        <Text> <Icon as={BiMessageDetail} />alannm54@gmail.com</Text>
        <Text><Icon as={BsTelephone} />+271 386-647-3637</Text>
      </Stack>
    </Stack>
    

  )
}

export default Footer