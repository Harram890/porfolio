import React from 'react'
import "./Hero.scss"
import proffpic from "../assets/proff-pic.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="left-side">
          <h2>Hi, I'm Harram Siddiqui</h2>
          <h1>Frontened Developer</h1>

          <p>
            I'm a passionate Frontend Developer
             who loves transforming creative
              ideas into beautiful, interactive, 
              and user-friendly digital experiences. 
              I enjoy exploring modern technologies, designing
               elegant interfaces, and building websites that look amazing and
                work seamlessly across every device.
            For me, coding is more than just writing 
            code — it's about solving problems, bringing imagination to life,
             and continuously learning something new. I'm always excited to take on new challenges, 
             turn inspiration into reality, and grow into a developer who creates meaningful digital
              solutions
          </p>

          <div className="button">
            <Link to="/Project"> <button>View My Projects</button></Link>
            <Link to="/contact"> <button>Contact me</button></Link>
          </div>

        </div>



        <div className="right-side">
          <img src={proffpic} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero
























