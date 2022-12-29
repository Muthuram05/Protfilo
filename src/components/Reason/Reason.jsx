import React from 'react'
import './Reason.css'
import Image1 from '../../assets/image1.png'
import Image2 from '../../assets/image2.png'
import Image3 from '../../assets/image3.png'
import Image4 from '../../assets/image4.png'
import Tick from '../../assets/tick.png'
import Cv2 from '../../assets/opencv.png'
import Mp from '../../assets/mediapipe.png'

const Reason = () => {
  return (
    <div className="Reason" id="Reason">
      <div className='left-r'>
        <div className='r-l'>
          <img src={Image1} alt="" srcset="" />
        </div>
        <div className='r-r'>
          <img src={Image2} alt="" srcset="" />
          <div className='inner'>
            <img src={Image3} alt="" srcset="" />
            <img src={Image4} alt="" srcset="" />
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='right-r'>
        <span>Some Project</span>
        <div>
          <span className='stroke-text'>Ai </span>
          <span>Project</span>
        </div>
        <div className='details-r'>
          <div>
            <img src={Tick} alt=""></img>
            <span>Reduced time for data-heavy tasks</span>
          </div>
          <div>
            <img src={Tick} alt=""></img>
            <span>Delivers consistent results</span>
          </div>
          <div>
            <img src={Tick} alt=""></img>
            <span>24x7 Availability</span>
          </div>
          <div>
            <img src={Tick} alt=""></img>
            <span>AI-powered virtual agents are always available</span>
          </div>
        </div>
        <span style={{ color: 'var(--gray)' }}>
          AI TOOLS
        </span>
        <div className="Tools">
          <img src={Cv2} alt="" />
          <img src={Mp} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Reason