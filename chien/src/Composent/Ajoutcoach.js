
import "react-bootstrap";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {useEffect,useState} from 'react';
import Form from 'react-bootstrap/Form'
import { Row,Col } from "react-bootstrap";
import {addcoach} from "../action/coachaction"
import { useDispatch} from 'react-redux'


function Ajoutcoach() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

/////////////////////////////////


// récupération val input

const [Input,setInput] = useState(
    {
      nom : "", 
      prenom : "", 
      mail:"",
      age : "",
      cin:"",
      experience :"",
      image : ""
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
     dispatch( addcoach(Input.nom,Input.prenom,Input.mail,Input.age,Input.cin,Input.experience,Input.image))
    
     console.log('val input', Input)
   }
  
  
    return (
      <div>
 <Button variant="primary" onClick={handleShow}>
 Ajouter Coach
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nouvelle  coach</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={HandelSubmit}>
  <Form.Group className="mb-3" controlId="formBasicNom">
    <Form.Label>Nom de coach</Form.Label>
    <Form.Control type="text" placeholder="Enter nom de coach" name="nom" onChange={HandelChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicModel">
    <Form.Label>Prenom de coach</Form.Label>
    <Form.Control type="text" placeholder="Enter prenom de coach" name="prenom" onChange={HandelChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox1">
  <Form.Label>E-mail</Form.Label>
  <Form.Control type="text" placeholder="Entrer leur mail" name="mail" onChange={HandelChange}/>  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAge">
    <Form.Label>Leur Age</Form.Label>
    <Form.Control type="text" placeholder="Enter Age" name="age" onChange={HandelChange}/>
  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicCheckbox2">
  <Form.Label>Carte Cin</Form.Label>
  <Form.Control type="text" placeholder="Enter Carte cin" name="cin" onChange={HandelChange}/>

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAge">
    <Form.Label>Leur experience</Form.Label>
    <Form.Control type="text" placeholder="Enter anneé d'experience" name="experience" onChange={HandelChange}/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicImage">
    <Form.Label>Image de coach</Form.Label>
    <Form.Control type="text" placeholder="Enter image de chien" name="image" onChange={HandelChange}/>
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
export default  Ajoutcoach;