import React, { useEffect } from 'react'
import '../Components/Landingpage.css';
import image from '../Images/CHAVII STUDIOS LOGO-01.png'
import image2 from '../Images/BACKGROUND IMAGE 2.png'
import { Link } from "react-router-dom";

function Landingpage() {
  return (<>

    <div className="landingbox">
      {/* <img src={image} className='logo' /> */}
      <div className="box_container">
        <div className="box">
          <h1 className='bx_h1' data-aos="zoom-in">CHAVI</h1>
          <h2 data-aos="fade-up">Get anything within art</h2>
        <Link to="/contact">
          <button  className='orderbtn' data-aos="zoom-out-up"  >Contact Us</button> 
        </Link>
        </div>
        <div data-aos="zoom-out"  className="lnd_box2">
          <img src={image2} />
        </div>
      </div>
    </div>
  </>
  )
}

export default Landingpage