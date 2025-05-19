import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './Home/Home'
import Suc from './Component/Sucess/Sucess'



function App () {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path= "/" element = {<Home/>} />
      <Route path= "/sucess" element = {<Suc/> } />
      </Routes>
     </BrowserRouter>

     </>
  )
}
 
export default App
