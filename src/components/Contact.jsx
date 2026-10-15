// import React from "react";
// import "./Contact.scss";

// const Contact = () => {
//   return (
//     <section className="contact">
//       <div className="contact-heading">
//         <h2>Contact Me</h2>
//         <p>
//           Have a project or opportunity in mind? Feel free to get in touch.
//         </p>
//       </div>

//       <div className="contact-container">

//         <div className="contact-info">
//           <h3>Let's Work Together</h3>

//           <p>
//             I'm always interested in learning new things and working
//             on exciting web development projects.
//           </p>

//           <div className="info-item">
//             <h4>Email</h4>
//             <p>harramsiddiqui152@gmail.com</p>
//           </div>

//           <div className="info-item">
//             <h4>Phone</h4>
//             <p>+92 0315-0228257</p>
//           </div>
//         </div>

//         <form className="contact-form">
//           <input type="text" placeholder="Your Name" />
//           <input type="email" placeholder="Your Email" />
//           <input type="text" placeholder="Subject" />
//           <textarea placeholder="Your Message"></textarea>

//           <button type="submit">Send Message</button>
//         </form>

//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact">
      <div className="contact-heading">
        <h2>Contact Me</h2>
        <p>
          Have a project or opportunity in mind? Feel free to get in touch.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Let's Work Together</h3>

          <p>
            I'm always interested in learning new things and working
            on exciting web development projects.
          </p>

          <div className="info-item">
            <h4>Email</h4>
            <p>harramsiddiqui152@gmail.com</p>
          </div>

          <div className="info-item">
            <h4>Phone</h4>
            <p>+92 0315-0228257</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder=" Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder=" Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          

          <textarea
            name="message"
            placeholder=" Enter Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>
    </section>
  );
};

export default Contact;
