import React from 'react'
import '../Components/Profile.css'
import team1 from '../Images/profile.png'
import team2 from '../Images/profile 2.png'


function Profile() {
  return (
   <>
   <div className="tm_container">
    <div className="tm_box1">
        <div className="imgbox">
            {/* <img src={team1} alt="" /> */}
        </div>
        <div className="text_box">
            <h2 className='h2'>ANIKET  RAJAK</h2>
            <p className='p'>FOUNDER , EDITOR</p>
            <div className="resume">

           Graphic designer with 2+ years of experience in creating digital posters,photography, digital design, designing logos, business catalouges and brochures, and is persuing BFA from college of arts and craft, patna .Had designed 100+ posters in a year.
            </div>
        </div>
    </div>
    <div className="tm_box2">
        <div className="imgbox">
            {/* <img src={team2} alt="" /> */}
        </div>
        <div className="text_box">
            <h2 className='h2'>SWETA SHEKHAR</h2>
            <p className='p'>CO-FOUNDER, MANAGER</p>
            <div className="resume">

         Graphic designer, illustrator and mandala designer with 2+ year  of experience. persuing degree in BFA from art college , patna posses excellence services and had created illustration and mandalas over 100+ in a year .
            </div>
        </div>
    </div>
   
   </div>
   </>
  )
}

export default Profile