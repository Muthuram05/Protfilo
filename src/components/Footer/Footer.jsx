import React from 'react'
import './Footer.css'
import Github from "../../assets/github.png"
import Insta from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Dev from "../../assets/dev-remove.png"

const Footer = () => {
  return (
    <div className="Footer">
        <hr />
        <div className="footer-item">
            <img src={Github} alt="" srcset="" />
            <img src={Insta} alt="" srcset="" />
            <img src={LinkedIn} alt="" srcset="" />
        </div>
        <div className="logo-f">
            <img src={Dev} alt="" />
            <span>{"<MuthuRam/>"}</span>
        </div>
    </div>
  )
}

export default Footer