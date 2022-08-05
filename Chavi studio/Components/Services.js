import React from 'react'
import '../Components/Services.css'
import images from './Serviceimg'

function Services() {
    return (
        <>
            <div className="glr_cntr">
                <div className="img_ptr">
                    <h1 className='img_ptr_h1'>OFFERS</h1>
                    <div className="img_ctr">
                        <div className="serv_img_box" >

                            {images.map((image) => {
                                return (
                                    <>

                                        <img data-aos="zoom-in" src={image} alt="" />
                                       

                                    </>
                                )
                            })
                            }

                        </div>
                    </div>

                </div>
            </div>
        </>


    )
}


export default Services