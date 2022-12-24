import React from 'react'
import './Testimonila.css'
import {testimonialsData } from '../../data/testimonialsData.js'
import { useState } from 'react'
const Testimonila = () => {
    const[selected,setSelected] = useState(0);
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
        <div className="right-t"></div>
    </div>
  )
}

export default Testimonila