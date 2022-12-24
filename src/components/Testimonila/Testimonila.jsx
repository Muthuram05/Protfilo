import React from 'react'
import './Testimonila.css'
import { testimonialsData } from '../../data/testimonialsData.js'
import leftArrow from '../../assets/leftArrow.png'
import rigthArrow from '../../assets/rightArrow.png'
import { useState } from 'react'
const Testimonila = () => {
  const [selected, setSelected] = useState(0);
  const tlength = testimonialsData.length;
  return (
    <div className="Testimonilas">
      <div className="left-t">
        <span>Testimonials</span>
        <span className='stroke-text'>What they</span>
        <span>Say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span id='name'>{testimonialsData[selected].name}</span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div id='div1'></div>
        <div id='div2'></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img onClick={()=>{
            selected === 0?setSelected(tlength -1):setSelected((prev)=>prev-1)
          }} 
          src={leftArrow} alt="" />
          <img onClick={()=>{
            selected === tlength-1?setSelected(0):setSelected((prev)=>prev+1)
          }} 
          src={rigthArrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testimonila