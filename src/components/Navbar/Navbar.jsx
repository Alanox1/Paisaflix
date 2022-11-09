import {Icon,Stack,Text,Link,Image} from "@chakra-ui/react"
import {BsSearch} from "react-icons/bs"
import foto from "../../assets/imagenPerfil.jpg"
function Navbar() {
  
  return (
    <Stack as="header" direction="row" justifyContent="space-between" paddingTop="20px">
        <Stack direction="row" justifyContent="space-evenly" spacing={100} alignItems="center" >
            <Text fontSize={25}>Paisaflix</Text>
            <Stack as="nav" direction="row" spacing={10}>
                <Link>Home</Link>
                <Link>Contact Us</Link>
                <Link>FAQ</Link>
                <Link>Pricing</Link>
            </Stack>
        </Stack>
        <Stack direction="row" 
               spacing={10}
               alignItems="center"
               fontSize={25}>
            <Icon as={BsSearch} />
            <Image src={foto} 
                   width="50px"
                   height="50px"
                   borderRadius="50%"
            />
            <Text>Soy Paisanox</Text>
        </Stack>
    </Stack>

  )
}

export default Navbar