import "react-bootstrap";
import "../App.css";
import chien from '../images/15.jpg'
import Image from 'react-bootstrap/Image'
import { Container,Row,Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import {addContact} from '../action/contactaction'
import { useDispatch} from 'react-redux'
import {useEffect,useState} from 'react';

function Formecontactuser() {

  
// récupération val input

const [Input,setInput] = useState(
  {
    mail : "", 
    commentaire : "" 
    
  }
)
const dispatch = useDispatch()

//////////////
  const HandelChange=(e)=>{
      const {name,value}= e.target 
      setInput({ ...Input,  [name]: value});
      }

//add 
const HandelSubmit=(e)=>{
  e.preventDefault()
   dispatch( addContact (Input.mail,Input.commentaire))
  
   console.log('val input', Input)
 }


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
<Form onSubmit={HandelSubmit} className="forme1">
  <Form.Group className="mb-3" controlId="formBasicNom">
    <Form.Control type="mail" placeholder="Enter ton mail" name="mail" onChange={HandelChange}/>
  </Form.Group>

  <FloatingLabel controlId="floatingTextarea2">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here" 
      style={{ height: '100px' }}
      name="commentaire"
      onChange={HandelChange}
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

export default Formecontactuser;
