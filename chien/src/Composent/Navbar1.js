import React, { Component,useState } from "react";
import "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Logo from '../LOGO/logo6.png'
import Container from 'react-bootstrap/Container'
import {Link }from 'react-router-dom'
function Navbare1() {

  const [colorChange, setColorchange] = useState(false);
  const [logoChange, setLogochange] = useState(false);
  const changeNavbarColor = () =>{
      if(window.scrollY >= 200){
      setColorchange(true);
      setLogochange(true);
      }
      else{
      setColorchange(false);
      setLogochange(false);
      }
  };
  window.addEventListener('scroll', changeNavbarColor);
    return (
      <div>
<Navbar className="navbar1" fixed="top"  className={colorChange ? 'navbar1 colorChange' : 'navbar1'}>
<Navbar.Brand><Image src={Logo} className={logoChange ? 'logo logoChange' : 'logo'}/></Navbar.Brand>
  <Navbar.Collapse id="navbarScroll">  
    <Nav className="mx-auto ">
      <Link className="nav-link"  to="/">Acceuil</Link>
      <Link  className="nav-link" to="/service">  Nos Services </Link>
      <Link className="nav-link" to="/contact">  Contact </Link>
    </Nav>
    <Link  to="/connexion"><ion-icon name="log-in-outline" id="i-login"></ion-icon></Link> 
  </Navbar.Collapse>
  
</Navbar>

</div>
    )
}
export default  Navbare1;