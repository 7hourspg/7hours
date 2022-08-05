import React from 'react'
import '../Components/Orderpage.css'
import img from '../Images/contact 34.png'

function Orderpage() {
  return (
    <>
<div className="tp_ordrbtn"  data-aos="zoom-in">
    <h1>Contact Us</h1>
</div>
      <div className="ordr_container">
        <div className="ordr_box1" data-aos="fade-right">
          <img src={img} alt="" />
        </div>
        <div className="ordr_box2"data-aos="fade-left">
          
          <div className="form_contr">
            <form action="https://formspree.io/f/mlevrrpa" method="POST">

              <input type="text" name="Name" id="" placeholder=' Name' />
              <input type="text" name="Mobile" id="" placeholder=' Mobile No.' required minLength={10} maxLength={10} />
              <input type="text" name="Email" id="" placeholder='Email' />
              <textarea name="Message" id="" cols="30" rows="10" placeholder='Enter Message' required minLength={10}></textarea>
              <div className="btn_box">
            <button className='ordn_btn1'>Submit</button>
          </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Orderpage