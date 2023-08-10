import React from 'react'
import cm_funny_logo from "../../assets/cm_funny_logo.png";

import  "./header.css";


function Header() {
  return (
    <div className="header-container">
      <div className="face_logo">
        <img src={cm_funny_logo} alt="logo" />
      </div>
    </div>
  )
}

export default Header
