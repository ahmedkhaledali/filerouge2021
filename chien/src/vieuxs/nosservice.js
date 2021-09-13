

import Footer from '../Composent/footer';
import Image from 'react-bootstrap/Image'
import Image1 from '../images/dressage.png'
import Image2 from '../images/foyer1.png'
import Image3 from '../images/race.png'
import {Link }from 'react-router-dom'
import Navbare1 from '../Composent/Navbar1';
import { Container,Row,Col } from "react-bootstrap";
import React, { useState} from 'react'
function Nservice() {

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
      {isReadMore ? text.slice(0, 250) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
      </p>
    );
    };
    
  return (
    <div  >
      
      <Navbare1 />
      <div  data-aos="fade-down" >
      <p className="Nservice ">Nos Services</p>

<Container>
  <Row>
    <Col md={4}>
<p className="p-dressage">
Le dressage ou apprentissage du chien s’appuie sur différentes techniques qui ont évolué avec le temps et qui tiennent 
compte des besoins du chien et des objectifs de l’apprentissage.
 Le dressage du chiot est important car il est souvent synonyme de sécurité.
</p>
<Link className="nav-link"  to="/dressage">
<button className="dressage-btn">voir page dressage</button>
</Link>
    </Col>
    <Col sm={2}></Col>
    <Col md={4}>
      <Image src={Image1} alt=""  style={{width:"130%",height:"300px"}}/>
      </Col>
  </Row>

  <Row>
    <Col md={4}>
<p className="p-foyer"><ReadMore> 
Les chiens se font souvent facilement des amis et votre chiot appréciera très probablement d'être en compagnie d'autres chiens. En fait, il saisira probablement toutes les occasions qui lui seront 
offertes pour jouer avec un autre animal, qu'il soit grand ou petit ! 
Comme pour toutes les nouvelles expériences de votre chiot, il est important de le présenter à d'autres animaux avec prudence,
 afin que leur amitié parte sur de bonnes bases.</ReadMore>
</p>
<Link className="nav-link"  to="/foyer">
<button className="dressage-btn">voir page Foyer</button>
</Link>
    </Col>
    <Col md={3}></Col>
    <Col md={4}>
      <Image src={Image2} alt=""  style={{width:"135%",height:"367px"}}/>
      </Col>
  </Row>

  <Row>
    <Col md={4}>
<p className="p-race">
Si tu veux un chien affectueux et sociable capable de jouer avec les enfants,
 ou un chien qui jappe peu car tu vis en appartement, 
 il vaut mieux en savoir le plus possible sur les races de chiens avant d'adopter une petite boule de poil. 
Voici un petit survol despersonnalités des races de chiens pour faire le bon choix!
</p>
<Link className="nav-link"  to="/race">
<button className="dressage-btn">voir page Race</button>
</Link>
    </Col>
    <Col md={3}></Col>
    <Col md={4}>
      <Image src={Image3} alt=""  style={{width:"130%",height:"354px"}}/>
      </Col>
  </Row>

</Container>
      <Footer />
    </div>
    </div>
  );
}

export default Nservice;
