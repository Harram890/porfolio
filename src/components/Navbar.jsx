import React from 'react'
import "./Navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>


    <div className="navitems">
       <div className="heading">
         <h2>HARRAM SIDDIQUI</h2>
       </div>
       <div className="buttons">
       <Link to ="/"> <button>HOME</button></Link>
       <Link to = "/about"> <button>ABOUT</button></Link>
        <Link to = "/skills"><button>SKILLS</button></Link>
        <Link to = "/Project"><button>PROJECTS</button></Link>
       <Link to ="/contact"> <button>CONTACT</button></Link>
    
       </div>
    </div>
      
    </>
  )
}

export default Navbar
