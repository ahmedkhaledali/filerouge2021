
import "react-bootstrap";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {useEffect,useState} from 'react';
import Form from 'react-bootstrap/Form'
import { Row,Col } from "react-bootstrap";
import {addfoyer} from "../action/foyeraction"
import { useDispatch} from 'react-redux'


function Modalfoyer() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

/////////////////////////////////


// récupération val input

const [Input,setInput] = useState(
    {
      id_client:"", 
      datepre:"",
      datefin:"",
      resultat:""
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
     dispatch( addfoyer(Input.id_client,Input.datepre,Input.datefin,Input.resultat))
    
     console.log('val input', Input)
   }
  
  
    return (
      <div>
 <Button variant="primary" onClick={handleShow}>
 Remplire date de  foyer de votre chien
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
    <Form.Label>Id_Client</Form.Label>
    <Form.Control type="text" placeholder="Enter Id Client" name="id_client" onChange={HandelChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox3">
  <Form.Label>Date pré</Form.Label>
  
    <Form.Control type="date" placeholder="Enter la date de pré " name="datepre" onChange={HandelChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox3">
  <Form.Label>Date fin</Form.Label>
  
    <Form.Control type="date" placeholder="Enter la date de fin " name="datefin" onChange={HandelChange}/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicCheckbox3">
  <Form.Label>Attende la confirmation  </Form.Label>
  
    <Form.Control type="text" placeholder="Attend la confimation " name="resultat" onChange={HandelChange}/>
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
export default  Modalfoyer;