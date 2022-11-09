import { useState, useEffect } from 'react'

import Layout from './components/Layout/Layout'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Home from './components/Home/Home'
import MovieDetails from "./components/MovieDetails/MovieDetails"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {getHeroData} from "../src/Funciones/funciones"
import Loading from './components/Loading/Loading'
import {Stack} from "@chakra-ui/react"
function App() {
 
  const [info,setInfo] = useState(null);
    useEffect(() => {
        getHeroData(setInfo)
        
    },[])
  return (
   <BrowserRouter>
   
    {info ? (<Layout>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies/:_id' element={<MovieDetails />}/> 
      </Routes>
      <Footer />
    </Layout> )
     : (<Stack width="100vw"
               height="100vh"
               justifyContent="center"
               alignItems="center"
               fontSize={40}>
          <Loading />
      </Stack>)}
    </BrowserRouter>
  )
}

export default App
