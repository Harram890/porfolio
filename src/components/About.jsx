import React from 'react'
import proffpic from "../assets/proff-pic.png"
import "./About.scss"

const About = () => {
  return (
    <>

    
     <section className="about">
       <div className="about-left">
    <h2>About Me</h2>

    <h1>Frontend Developer</h1>

    <p>
      I'm a passionate Frontend Developer and a Matric student
      who enjoys creating modern, responsive and user-friendly
      websites.
    </p>

    <p>
      I have learned HTML, CSS, JavaScript, Bootstrap and React,
      and I'm continuously improving my frontend development
      skills by building real-world projects.
    </p>

   
  </div>

  <div className="about-right">
    <img src={proffpic} alt="Profile" />
  </div>
     </section>

    </>
  )
}

export default About
