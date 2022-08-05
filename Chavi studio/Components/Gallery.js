import React from 'react'
import '../Components/Gallery.css'
import images from './Galleryimg'
import mandalsimg from './Mandals'
import photography from './Photography'
import smediapstr from './Socialmedia'


function Gallery() {
    return (
        <>
            <div className="glr_cntr">
                <div className="img_ptr">
                    <h1 className='img_ptr_h1'>illustration poster</h1>
                    <div className="img_ctr">
                        <div className="img_box">

                            {
                                images.map((image) => {

                                    return (
                                        <>
                                            <img data-aos="zoom-in" src={image} alt="" />

                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="img_ptr">
                    <h1 className='img_ptr_h1'>Social media posters</h1>
                    <div className="img_ctr">
                        <div className="img_box">

                            {
                                smediapstr.map((image) => {

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
                <div className="img_ptr">
                    <h1 className='img_ptr_h1'>photography</h1>
                    <div className="img_ctr">
                        <div className="img_box">

                            {
                                photography.map((image) => {

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
                <div className="img_ptr">
                    <h1 className='img_ptr_h1'>mandalas</h1>
                    <div className="img_ctr">
                        <div className="img_box">

                            {
                                mandalsimg.map((image) => {

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

export default Gallery