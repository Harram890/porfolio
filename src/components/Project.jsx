import React from "react";
import "./Project.scss";
import studenterp from "../assets/studenterp.png"
import ecommerce from "../assets/ecommerce.png";
import furniture from "../assets/furniture.png"
import bloom from "../assets/bloom_beyond_portfolio_collage.png"
//

const Project = () => {
  return (
    <section className="projects">

      <div className="projects-heading">
        <h2>My Projects</h2>
        <p>
          Here are some of the projects I have created while learning
          frontend development.
        </p>
      </div>

      <div className="projects-container">

        <div className="project-card">
          <img src={ecommerce} alt="E-Commerce Website" />

          <div className="project-content">
            <h3>E-Commerce Store</h3>
            <p>
             E-Commerce Clothing Website 🛍️  <br />
A modern and responsive e-commerce website built with React, featuring men's, women's, and kids' collections, product browsing, shopping cart functionality, and a dedicated admin panel.  
Designed to deliver a smooth and engaging online shopping experience with a stylish interface.
            </p>

           
          </div>
        </div>


        <div className="project-card">
          <img src={furniture} alt="furniture" />

          <div className="project-content">
            <h3>Furniture website</h3>
            <p>
             Furniture  Website 🛋️ <br /> 
A stylish and responsive furniture shopping website built with React, featuring elegant product displays, category browsing, and a seamless shopping experience.  
Designed to showcase modern furniture with a clean, user-friendly interface.
            </p>

         
          </div>
        </div>


        <div className="project-card">
          <img src={studenterp} alt="studenterp" />

          <div className="project-content">
            <h3>studenterp</h3>
            <p>
            **Student Management System (SMS)** 🎓  
A modern and user-friendly student management dashboard built with React, featuring student records, enrollment management, reports, and organized data visualization.  
Designed to simplify student administration with a clean, professional interface.
            </p>

         
          </div>
        </div>


        <div className="project-card">
          <img src={bloom} alt="ChatGPT Clone" />

          <div className="project-content">
            <h3>Blog website</h3>
            <p>
            Bloom & Beyond  🌸  <br />
A beautiful and responsive blog website built with React, featuring elegant design, inspiring stories, and a soft, modern aesthetic.  
Designed to create a delightful reading experience across devices.
            </p>

           
          </div>
        </div>

      </div>

    </section>
  );
};

export default Project;
