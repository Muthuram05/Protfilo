import React from 'react'
import './Footer.css'
import Github from "../../assets/github.png"
import Insta from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Dev from "../../assets/dev-remove.png"

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-link">
          <img src={Github} alt="" srcset="" onClick="www.github.com/muthuram05"/>
          <img src={Insta} alt="" srcset="" />
          <img src={LinkedIn} alt="" srcset="" />
          </div>
          <div className="logo-f">
            <img src={Dev} alt="" />
            <p>{"<MuthuRam/>"}</p>
          </div>
      </div>
      <div className="blur blur-f1"></div>
      <div className="blur blur-f2"></div>
    </div>
  )
}

export default Footer