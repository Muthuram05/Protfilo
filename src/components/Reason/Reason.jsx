import React from 'react'
import './Reason.css'
import Image1 from '../../assets/image1.png'
import Image2 from '../../assets/image2.png'
import Image3 from '../../assets/image3.png'
import Image4 from '../../assets/image4.png'
const Reason = () => {
  return (
    <div className="Reason" id="Reason">
        <div className='left-r'>
            <img src={Image1} alt="" srcset="" />
            <img src={Image2} alt="" srcset="" />
            <img src={Image3} alt="" srcset="" />
            <img src={Image4} alt="" srcset="" />
        </div>
        <div className='right-r'>
            <span></span>
        </div>
    </div>
  )
}

export default Reason