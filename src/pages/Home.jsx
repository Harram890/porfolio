import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <>
    <Navbar/>
       <Hero/>
       <About/>
       <Skills/>
       <Project/>
       <Contact/>
    </>
  )
}

export default Home
