import React from 'react'
import './Footer.css'
import Github from "../../assets/github.png"
import Insta from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Dev from "../../assets/dev-remove.png"

const Footer = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-link">
          <img src={Github} onClick={() => openInNewTab('https://github.com/muthuram05')}/>
          <img src={Insta} onClick={() => openInNewTab('https://www.instagram.com/ram_vishwa123/')} />
          <img src={LinkedIn}  onClick={() => openInNewTab('https://www.linkedin.com/in/muthuram05/')}/>
          </div>
          <div className="logo-f">
            <img src={Dev} alt="" />
            <p>{"MuthuRam"}</p>
          </div>
      </div>
      <div className="blur blur-f1"></div>
      <div className="blur blur-f2"></div>
    </div>
  )
}

export default Footer