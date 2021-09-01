import "react-bootstrap";
import "../App.css";
import chien from '../images/15.jpg'
import Image from 'react-bootstrap/Image'
import { Container,Row,Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'



function Forme() {
  
  return (
   

<div className="section">
<Container>
<Row>
  <Col>
  <p className="texte">
  <span className="contact">En savoir plus sur nous</span> <br/>
Tzul est la première plateforme tunisienne de conseils mettant en relation les propriétaires d'animaux et les vétérinaires.
Notre objectif est celui de vous simplifier la vie en vous aidant à prendre soin de vos animaux et garantir leur bien être à travers un accès rapide aux services vétérinaires et produits d'animalerie.
Cette plateforme ne pourra en aucun cas remplacer votre vétérinaire.
  </p>
 
 <Image src={chien} alt=""    data-aos="fade-down" style={{width : "100%", height : "50%" , borderRadius:"10px"}} />
  </Col>
<Col className="forme">
  <p className="tt1">N'hésitez pas à nous demander quoi que ce soit.</p>
<Form  className="forme1">
  <Form.Group className="mb-3" controlId="formBasicNom">
    <Form.Control type="mail" placeholder="Enter ton mail" name="mail" />
  </Form.Group>
  <FloatingLabel controlId="floatingTextarea2">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
  <button type="submit" id="submit-bbt">
    Submit
  </button>
  </Form>
</Col>

</Row>

</Container>

</div>

  );
}

export default Forme;
