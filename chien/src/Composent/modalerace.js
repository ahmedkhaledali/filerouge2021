
import "react-bootstrap";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {useEffect,useState} from 'react';
import Form from 'react-bootstrap/Form'
import { Row,Col } from "react-bootstrap";
import {addrace} from "../action/raceaction"
import { useDispatch} from 'react-redux'


function Modalrace() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

/////////////////////////////////


// récupération val input

const [Input,setInput] = useState(
    {
      id_client: "", 
      couplerace:"",
      date_race:"",
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
     dispatch( addrace(Input.id_client,Input.couplerace,Input.date_race,Input.resultat))
    
     console.log('val input', Input)
   }
  
  
    return (
      <div>
 <Button variant="primary" onClick={handleShow}>
 Remplire formulaire date de Race de votre chien
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>date de votre chien pour Race</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={HandelSubmit}>
  <Form.Group className="mb-3" controlId="formBasicNom">
    <Form.Label>Id_client</Form.Label>
    <Form.Control type="text" placeholder="Enter id client" name="id_client" onChange={HandelChange}/>
 
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox1">
  <Form.Label>couple de race de votre chien</Form.Label>
  <Form.Control type="text" placeholder="Entrer couple de race" name="couplerace" onChange={HandelChange}/>  
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicModel">
    <Form.Label>Date_race</Form.Label>
    <Form.Control type="date"  name="date_race" onChange={HandelChange}/>
  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicCheckbox3">
  <Form.Label>Attende la confirmation  </Form.Label>
  
    <Form.Control type="text" placeholder="Attend la confimation" name="resultat" onChange={HandelChange}/>
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
export default  Modalrace;