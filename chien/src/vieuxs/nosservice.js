

import Footer from '../Composent/footer';
import Image from 'react-bootstrap/Image'
import Image1 from '../images/14.jpg'
import {Link }from 'react-router-dom'
import Navbare1 from '../Composent/Navbar1';
import { Container,Row,Col } from "react-bootstrap";
function Nservice() {
  return (
    <div  >
      
      <Navbare1 />
      <div  data-aos="fade-down" >
      <p className="Nservice ">Nos Services</p>

<Container>
  <Row>
    <Col md={4}>
<p>
Le dressage ou apprentissage du chien s’appuie sur différentes techniques qui ont évolué avec le temps et qui tiennent 
compte des besoins du chien et des objectifs de l’apprentissage.
 Le dressage du chiot est important car il est souvent synonyme de sécurité.

</p>
<Link className="nav-link"  to="/dressage">
<button>voir page dressage</button>
</Link>
    </Col>
    <Col md={3}></Col>
    <Col md={4}>
      <Image src={Image1} alt=""  style={{width:"100%",height:"200px"}}/>
      </Col>
  </Row>

  <Row>
    <Col md={4}>
<p>
Les chiens se font souvent facilement des amis et votre chiot appréciera très probablement d'être en compagnie d'autres chiens. En fait, il saisira probablement toutes les occasions qui lui seront 
offertes pour jouer avec un autre animal, qu'il soit grand ou petit ! 
Comme pour toutes les nouvelles expériences de votre chiot, il est important de le présenter à d'autres animaux avec prudence,
 afin que leur amitié parte sur de bonnes bases.
</p>
<Link className="nav-link"  to="/foyer">
<button>voir page Foyer</button>
</Link>
    </Col>
    <Col md={3}></Col>
    <Col md={4}>
      <Image src={Image1} alt=""  style={{width:"100%",height:"200px"}}/>
      </Col>
  </Row>

  <Row>
    <Col md={4}>
<p>
Si tu veux un chien affectueux et sociable capable de jouer avec les enfants,
 ou un chien qui jappe peu car tu vis en appartement, 
 il vaut mieux en savoir le plus possible sur les races de chiens avant d'adopter une petite boule de poil. 
Voici un petit survol despersonnalités des races de chiens pour faire le bon choix!
</p>
<Link className="nav-link"  to="/race">
<button>voir page Race</button>
</Link>
    </Col>
    <Col md={3}></Col>
    <Col md={4}>
      <Image src={Image1} alt=""  style={{width:"100%",height:"200px"}}/>
      </Col>
  </Row>

</Container>
      <Footer />
    </div>
    </div>
  );
}

export default Nservice;
