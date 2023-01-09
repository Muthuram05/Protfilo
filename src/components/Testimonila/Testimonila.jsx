import React from 'react'
import './Testimonila.css'
import { testimonialsData } from '../../data/testimonialsData.js'
import leftArrow from '../../assets/leftArrow.png'
import rigthArrow from '../../assets/rightArrow.png'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Arrow from '../../assets/rightArrow.png'
import { Link } from 'react-scroll'

const Testimonila = () => {
  const transition = { type: 'spring', duration: 3 };
  const [selected, setSelected] = useState(0);
  const tlength = testimonialsData.length;
  return (
    <div className="Testimonilas" id='Testimonilas'>
      <div className="left-t">
        <span>Testimonials</span>
        <span className='stroke-text'>What they</span>
        <span>Say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}>{testimonialsData[selected].review}</motion.span>
        <span>
          <span id='name'>{testimonialsData[selected].name}</span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div id='div1'
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div id='div2'
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img onClick={() => {
            selected === 0 ? setSelected(tlength - 1) : setSelected((prev) => prev - 1)
          }}
            src={leftArrow} alt="" />
          <img onClick={() => {
            selected === tlength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)
          }}
            src={rigthArrow} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Testimonila