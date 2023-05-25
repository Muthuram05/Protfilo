import React from 'react'
import './Project.css'
import RightArrow from '../../assets/rightArrow.png'

const Project = () => {
  const programsData = [
    {
      image: (
        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
          width="800px" height="800px" viewBox="0 0 46.814 46.813"
          xml="preserve">
          <g>
            <path d="M43.154,15.709v10.354c0,11.247-9.044,20.75-19.747,20.75S3.66,37.311,3.66,26.063V15.709C3.66,11.12,5.47,0.633,21.825,0
		v5.309c-1.779,0.65-3.061,2.344-3.061,4.347v5.684c0,2.003,1.281,3.696,3.061,4.347v4.832c0,0.873,0.709,1.582,1.582,1.582
		s1.582-0.709,1.582-1.582v-4.832c1.778-0.65,3.062-2.344,3.062-4.347V9.657c0-2.003-1.281-3.696-3.062-4.347V0
		C41.345,0.634,43.154,11.12,43.154,15.709z"/>
          </g>
        </svg>
      ),
      heading: "Virtual Mouse",
      details:
        "It provides an infrastructure between the user and the system using only a camera",
      fun:"",
    },
    {
      image: <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
        width="800px" height="800px" viewBox="0 0 974.699 974.699"
        xml="preserve">
        <g>
          <path d="M731.1,107.1C731.1,47.9,683.1,0,623.999,0H350.8c-59.2,0-107.101,48-107.101,107.1v37h487.4V107.1L731.1,107.1z" />
          <path d="M243.699,514.4c0,59.199,48,107.1,107.101,107.1h273.199c59.2,0,107.101-48,107.101-107.1V224.2h-487.4V514.4z" />
          <path d="M307.499,810.1h119.9v104.6c0,33.102,26.9,60,60,60s60-26.898,60-60V810.1h119.9c68.5,0,132.8-27.299,181.1-76.9
       C896.3,684,922.6,618.801,922.6,549.5c0-33.1-26.9-60-60-60c-33.101,0-60,26.9-60,60c0,77.5-60.7,140.6-135.4,140.6h-179.8h-179.9
       c-74.6,0-135.399-63.1-135.399-140.6c0-33.1-26.9-60-60-60c-33.1,0-60,26.9-60,60c0,69.301,26.4,134.5,74.2,183.699
       C174.699,782.801,239,810.1,307.499,810.1z"/>
        </g>
      </svg>,
      heading: "WebAssistance",
      details:
        "WebAssistance is a virtual assistant to design software application",
    },
    {
      image: <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
        x="0px" y="0px" width="122.879px" height="119.799px" viewBox="0 0 122.879 119.799"
        enable-background="new 0 0 122.879 119.799" xml="preserve"><g>
          <path d="M49.988,0h0.016v0.007C63.803,0.011,76.298,5.608,85.34,14.652c9.027,9.031,14.619,21.515,14.628,35.303h0.007v0.033v0.04 h-0.007c-0.005,5.557-0.917,10.905-2.594,15.892c-0.281,0.837-0.575,1.641-0.877,2.409v0.007c-1.446,3.66-3.315,7.12-5.547,10.307 l29.082,26.139l0.018,0.016l0.157,0.146l0.011,0.011c1.642,1.563,2.536,3.656,2.649,5.78c0.11,2.1-0.543,4.248-1.979,5.971 l-0.011,0.016l-0.175,0.203l-0.035,0.035l-0.146,0.16l-0.016,0.021c-1.565,1.642-3.654,2.534-5.78,2.646 c-2.097,0.111-4.247-0.54-5.971-1.978l-0.015-0.011l-0.204-0.175l-0.029-0.024L78.761,90.865c-0.88,0.62-1.778,1.209-2.687,1.765 c-1.233,0.755-2.51,1.466-3.813,2.115c-6.699,3.342-14.269,5.222-22.272,5.222v0.007h-0.016v-0.007 c-13.799-0.004-26.296-5.601-35.338-14.645C5.605,76.291,0.016,63.805,0.007,50.021H0v-0.033v-0.016h0.007 c0.004-13.799,5.601-26.296,14.645-35.338C23.683,5.608,36.167,0.016,49.955,0.007V0H49.988L49.988,0z M50.004,11.21v0.007h-0.016 h-0.033V11.21c-10.686,0.007-20.372,4.35-27.384,11.359C15.56,29.578,11.213,39.274,11.21,49.973h0.007v0.016v0.033H11.21 c0.007,10.686,4.347,20.367,11.359,27.381c7.009,7.012,16.705,11.359,27.403,11.361v-0.007h0.016h0.033v0.007 c10.686-0.007,20.368-4.348,27.382-11.359c7.011-7.009,11.358-16.702,11.36-27.4h-0.006v-0.016v-0.033h0.006 
        c-0.006-10.686-4.35-20.372-11.358-27.384C70.396,15.56,60.703,11.213,50.004,11.21L50.004,11.21z"/></g></svg>,
      heading: "Nano-Search ",
      details:
        "A search engine is a software system designed to carry out web searches.",
    },
    {
      image: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /> </svg>,
      heading: "Shopbazzer",
      details:
        "E-commerce is the activity of electronically buying or selling of products on online services or over the Internet.",
    },
  ];

  return (

    <div className='Project' id='Project'>
      <div className="project-header">
        <span >Explore my</span>
        <span className='stroke-text'> Skills  & Project</span>
        <span >unique ideas</span>
      </div>
      <div className='program-categories' >
        {programsData.map((data) =>
          <div className='category'>
            {data.image}
            <span>{data.heading}</span>
            <span>{data.details}</span>
            <div className="read-more" >
              <span>Read-More</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        )}
        {/* react 
node
flutter
django
flask
php
static project 
python 
Ai */}
      </div>
    </div>
  )
}

export default Project