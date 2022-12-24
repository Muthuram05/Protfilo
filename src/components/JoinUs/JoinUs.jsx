import React from 'react'
import { useRef } from 'react'
import './JoinUs.css'
import emailjs from '@emailjs/browser'

const JoinUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vf1xct2', 'template_tiyf55g', form.current, 'RvlX4cKLWdp1UQopG')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className="joinus" id='joinus'>
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">CONTACT</span>
                    <span>US</span>
                </div>
                <div>
                    <span>READY TO</span>
                    <span className="stroke-text">JOIN US</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder='Enter Your email' />
                    <button className='btn btn-j'>Contact Now</button>
                </form>
            </div>
        </div>
    )
}

export default JoinUs