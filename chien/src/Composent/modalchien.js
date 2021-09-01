
import "react-bootstrap";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {useEffect,useState} from 'react';
import Form from 'react-bootstrap/Form'
import { Row,Col } from "react-bootstrap";
import {addChien} from "../action/chienaction"
import { useDispatch} from 'react-redux'


function Modaldressage() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

/////////////////////////////////


// récupération val input

const [Input,setInput] = useState(
    {
      nom : "", 
      model : "", 
      vaccin:"",
      taille : "",
      critére:"",
      age :"",
      image : "",
      date : ""
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
     dispatch( addChien(Input.nom,Input.model,Input.vaccin,Input.taille,Input.age,Input.image,Input.date,Input.critére))
    
     console.log('val input', Input)
   }
  
  
    return (
      <div>
 <Button variant="primary" onClick={handleShow}>
 Remplire formulaire de dressage de votre chien
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Fichier de votre chien</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={HandelSubmit}>
  <Form.Group className="mb-3" controlId="formBasicNom">
    <Form.Label>Nom de chien</Form.Label>
    <Form.Control type="text" placeholder="Enter nom de chien" name="nom" onChange={HandelChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicModel">
    <Form.Label>Model de chien</Form.Label>
    <Form.Control type="text" placeholder="Enter model de chien" name="model" onChange={HandelChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox1">
  <Form.Label>Vaccineé</Form.Label>
  <Form.Control type="text" placeholder="repondre Oui  ou bien Non" name="vaccin" onChange={HandelChange}/>

  {/* <Row>
      <Col >
    <Form.Check type="checkbox" label="Oui" />
    </Col>
    <Col>  
      <Form.Check type="checkbox" label="Nom" />
      </Col>
      </Row> */}
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicCheckbox2">
  <Form.Label>Taille</Form.Label>
  <Form.Control type="text" placeholder="Enter taille de chien" name="taille" onChange={HandelChange}/>


  {/* <Row>
   <Col xs={{order: 'first' }}>
    <Form.Check type="checkbox" label="Petit" />
    </Col>
    <Col xs={{order: 'second' }}>
    <Form.Check type="checkbox" label="Moyen" />
    </Col>
    <Col xs={{order: 'third' }}>
    <Form.Check type="checkbox" label="Grand" />
    </Col>
    </Row> */}

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAge">
    <Form.Label>Age de chien</Form.Label>
    <Form.Control type="text" placeholder="Enter age de chien" name="age" onChange={HandelChange}/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicImage">
    <Form.Label>Image de chien</Form.Label>
    <Form.Control type="text" placeholder="Enter image de chien" name="image" onChange={HandelChange}/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicDate">
    <Form.Label>Date Dressage de chien</Form.Label>
    <Form.Control type="text" placeholder="Enter la date " name="date" onChange={HandelChange}/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicCheckbox3">
  <Form.Label>Critére</Form.Label>
  {/* <Row>
   <Col xs={{order: 'first' }}>
    <Form.Check type="checkbox" label="Affectueux" />
    </Col>
    <Col xs={{order: 'second' }}>
    <Form.Check type="checkbox" label="Calme" />
    </Col>
    <Col xs={{order: 'third' }}>
    <Form.Check type="checkbox" label="Protecteur" />
    </Col>
    </Row> */}
    <Form.Control type="text" placeholder="Enter la Critére de chien " name="critére" onChange={HandelChange}/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>  



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        
        </Modal.Footer>
      </Modal>

  

</div>
    )
}
export default  Modaldressage;