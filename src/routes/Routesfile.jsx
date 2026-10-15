import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Project from '../components/Project'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'

const Routesfile = () => {
  return (
    <>

      <Navbar/>
    

      <Routes>
       
         <Route path ="/" element ={<Home/>}/>
           <Route path ="/about" element ={< About/>}/> 
             <Route path ="/skills" element ={< Skills/>}/> 
               <Route path ="/Project" element ={<Project/>}/> 
                 <Route path ="/contact" element ={< Contact/>}/> 

     
     
      </Routes>
      
    </>
  )
}

export default Routesfile

