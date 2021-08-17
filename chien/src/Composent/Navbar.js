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
function Navbare() {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
      if(window.scrollY >= 200){
      setColorchange(true);
      }
      else{
      setColorchange(false);
      }
  };
  window.addEventListener('scroll', changeNavbarColor);




    return (
      <div>
<Navbar class="navbar " fixed="top"  className={colorChange ? 'navbar colorChange' : 'navbar'}>
<Navbar.Brand><Image src={Logo} class="logo"/></Navbar.Brand>
  <Navbar.Collapse id="navbarScroll">  
    <Nav className="mx-auto ">
      <Link className="nav-link"  to="/">Acceuil</Link>
      <Link  className="nav-link" to="/service">  Nos Services </Link>
      <Link className="nav-link" to="/contact">  Contact </Link>
      <img src="https://img.icons8.com/fluency-systems-regular/50/000000/user.png"/>
    </Nav>
  </Navbar.Collapse>
  
</Navbar>

</div>
    )
}
export default  Navbare;