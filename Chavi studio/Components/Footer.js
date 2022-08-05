import React from 'react'
import { SiInstagram } from 'react-icons/si';
import { BsFacebook } from 'react-icons/bs';
import { IoLogoTwitter } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import '../Components/Footer.css'

function Footer() {
  return (
    <>
      <div className="foot_container ">
        <div className="foot_box1 m_from_lft_rt">Copyright &copy; <strong>Chavi Studio</strong></div>
        <div className="contact_dtl m_from_lft_rt">

          <p>
            <div className="mrt">
              <AiOutlineMail />
            </div>
            rajakaniket2000@gmail.com</p>
          <p>
            <div className="mrt">
              <FiPhoneCall />
            </div>
            7319365233 , 6297134330
          </p>
          <p>
            <div className="mrt">
              <GoLocation/>
            </div>
           PATNA (BIHAR)  : ASANSOL (WEST BENGAL)
          </p>
        
        </div>
        <div className="foot_box2 m_from_lft_rt">
          <li className='l1'>
            <a href="https://www.instagram.com/chavi_studio219/"target="_blank">

          <SiInstagram />
            </a>
          </li> 
          <li className='l2'>
            <BsFacebook /></li>

          <li className='l3'>
            <IoLogoTwitter />
            </li>
        </div>
      </div>
    </>
  )
}

export default Footer