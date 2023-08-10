import React from 'react'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import cm_face_logo from "../../assets/cm_face_logo.png";

import "./footer.css";

const Footer = () => {
  const linkedinUrl = "https://www.linkedin.com/in/christian-mendez-/";
  const githubUrl = "https://github.com/christian1512-FE";

  return (
    <div className="footer-container">
    <div className="footer-logo">
    <a href="#nav">
      <img src={cm_face_logo} alt="logo" /> 
      </a>
      </div>
    <div className="linkicon">
      <a href={linkedinUrl}>
        <FaLinkedin />
      </a>
      <a href={githubUrl}>
        <FaGithubSquare />
      </a>
    </div>
    <div className="footer-cr">
     All rights reserved © {new Date().getFullYear()} <strong>Christian Mendez</strong>
    </div>
  </div>
  )
}

export default Footer
