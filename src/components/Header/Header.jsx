import React from 'react'
import "./Header.css"
import Bar from '../../assets/bars.png'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div className='Header'>
      <h1 className='logo'>Muthu Ram</h1>
      {(menuOpened === false && mobile === true) ?
        (<div
          style={{
            backgroundColor: 'var(--appColor)',
            padding: '0.5rem',
            borderRadius: '5px'
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img src={Bar} style={{ width: '2.5rem', height: '2rem' }} />
        </div>) :

        (<ul className='header-menu'>
          <li>
            <Link to='Hero'
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}>Home</Link>
          </li>
          <li>
            <Link to='Project'
            onClick= {()=> setMenuOpened(false)}
            span={true}
            smooth={true}>Project</Link></li>
          <li><Link to='Reason'
            onClick= {()=> setMenuOpened(false)}
            span={true}
            smooth={true}>Demo</Link></li>
          <li>
            <Link to='Testimonilas'
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >Testimonials</Link>
          </li>
          <li><Link to='joinus'
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}>Contact</Link></li>
        </ul>)
      }
    </div>
  )
}

export default Header