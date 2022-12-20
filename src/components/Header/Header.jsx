import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='Header'>
        <h1 className='logo'>Muthu Ram</h1>
        <ul className='header-menu'>
            <li>Home</li>
            <li>Project</li>
            <li>Skills</li>
            <li>Service</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Header