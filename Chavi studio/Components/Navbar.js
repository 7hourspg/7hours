import '../Components/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Images/CHAVII STUDIOS LOGO-01.png'
import { NavLink } from 'react-router-dom'


import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { RiGalleryLine } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";


function NavScrollExample() {
   
    return (
        <Navbar className='Navbar' bg="black" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    <NavLink to="/home">

                        <img className='chv_logo' src={logo} alt="" />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className='clr' />
                <Navbar.Collapse id="navbarScroll" className='clr'>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', color: 'white' }}
                        navbarScroll
                    >
                    </Nav>
                    <div className="Nav_box">
                        <NavLink to="/home" style={({isActive})=>{return{color:isActive? 'red':''}}} >

                            <div className="Nav_ctr">
                                <AiOutlineHome color={({isActive})=>{return{color:isActive? 'red':''}}} size='1.5rem' />
                                <p>Home</p>
                            </div>
                        </NavLink>
                        <NavLink to="/gallery"  style={({isActive})=>{return{color:isActive? 'red':''}}}>

                            <div className="Nav_ctr">
                                <RiGalleryLine color={({isActive})=>{return{color:isActive? 'red':''}}} size='1.5rem' />
                                <p>Gallery</p>
                            </div>
                        </NavLink>
                        <NavLink to="/services"style={({isActive})=>{return{color:isActive? 'red':''}}}>

                            <div className="Nav_ctr">
                                <MdOutlineWork color={({isActive})=>{return{color:isActive? 'red':''}}} size='1.5rem' />
                                <p>Services</p>
                            </div>
                        </NavLink>
                        <NavLink to="/team"style={({isActive})=>{return{color:isActive? 'red':''}}}>

                            <div className="Nav_ctr">
                                <AiOutlineTeam color={({isActive})=>{return{color:isActive? 'red':''}}} size='1.5rem' />
                                <p>Team</p>
                            </div>
                        </NavLink>
                        <NavLink to="/contact"style={({isActive})=>{return{color:isActive? 'red':''}}}>

                            <div className="Nav_ctr">
                                <HiOutlineMailOpen color={({isActive})=>{return{color:isActive? 'red':''}}} size='1.5rem' />
                                <p>Contact Us</p>
                            </div>
                        </NavLink>
                    </div>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;