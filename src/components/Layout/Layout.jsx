import { useState } from 'react'

import {Box,Container} from "@chakra-ui/react"
function Layout({children}) {
  const [count, setCount] = useState(0)

  return (
    <Container position="relative" maxWidth="container.xl">{children}</Container>
  )
}

export default Layout