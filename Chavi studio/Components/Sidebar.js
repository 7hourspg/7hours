import React, { useState, useEffect } from 'react'
import '../Components/Sidebar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineWork } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiGalleryLine } from "react-icons/ri";
import { Link } from 'react-router-dom'


function Sidebar() {
    const [size, setSize] = useState([window.innerWidth])
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerWidth])
        };
        window.addEventListener('resize', handleResize)
    }, [])


    const [isopen, setIsopen] = useState(false)
    const toggle = () => {
        setIsopen(!isopen)
    }
    {
        var fsize = size <= 600 ? '1.5rem' : '2rem'
    }
    return (
        <>

            <div className="containere" style={{ width: isopen ? '20rem' : '3rem', backgroundColor: isopen ? 'rgb(120, 74, 74)' : ' transparent' }}>
                <div className="box1">
                    <h2 style={{ paddingLeft: '10px', color: 'white', display: isopen ? 'block' : 'none' }}>MenuBar</h2>
                    <button className='togglebtn' onClick={toggle} style={{ backgroundColor: isopen ? 'rgb(120, 74, 74)' : ' transparent' }}  ><GiHamburgerMenu /></button>
                </div>
                <div className="menu_box" style={{ display: isopen ? 'block' : 'none' }}>

                    <Link to="/home">
                        <div onClick={toggle} className="box1 box-common">

                            <AiOutlineHome color='white' size={fsize} /><p style={{ display: isopen ? 'block' : 'none' }} >Home</p>
                        </div>
                    </Link>
                    <Link to="/gallery">

                        <div onClick={toggle} className="box1 box-common">< RiGalleryLine color='white' size={fsize} /><p style={{ display: isopen ? 'block' : 'none' }} >Gallery</p></div>

                    </Link>
                    <Link to="/services">

                        <div onClick={toggle} className="box1 box-common"><MdOutlineWork color='white' size={fsize} /><p style={{ display: isopen ? 'block' : 'none' }} >Services</p></div>
                    </Link>
                    <Link to="/team">

                        <div onClick={toggle} className="box1 box-common"><AiOutlineTeam color='white' size={fsize} /><p style={{ display: isopen ? 'block' : 'none' }} >Team</p></div>
                    </Link>
                    <Link to="/contact">

                        <div onClick={toggle} className="box1 box-common"><HiOutlineMailOpen color='white' size={fsize} /><p style={{ display: isopen ? 'block' : 'none' }} >Contact Us</p></div>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Sidebar