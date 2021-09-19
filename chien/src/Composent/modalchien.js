
import "react-bootstrap";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {useEffect,useState,useSelector} from 'react';
import Form from 'react-bootstrap/Form'
import {addChien} from "../action/chienaction"
import { useDispatch} from 'react-redux'



export default function Modalchien({id}) {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

/////////////////////////////////

/////////////////////////////

// récupération val input

const [Input,setInput] = useState(
    {
      nom : "", 
      model : "",
      taille : "",
      critére:"",
      age :"",
      image : "", 
      vaccin:"",
      date : "",
      id_client: ""
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

     dispatch ( addChien (Input.nom,Input.model,Input.taille,Input.critére,Input.age,Input.image,Input.vaccin,Input.date,Input.id_client))
    
     console.log('val input', Input)
   }
  

    return (
      <div>
 <Button variant="primary" onClick={handleShow}>
 Entrer votrer  chien 
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
        <Form >
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

  
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicCheckbox2">
  <Form.Label>Taille</Form.Label>
  <Form.Control type="text" placeholder="Enter taille de chien" name="taille" onChange={HandelChange}/>

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
    <Form.Control type="date" placeholder="Enter la date " name="date" onChange={HandelChange}/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicCheckbox3">
  <Form.Label>Critére</Form.Label>
  
    <Form.Control type="text" placeholder="Enter la Critére de chien " name="critére" onChange={HandelChange}/>
  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicCheckbox3">
  <Form.Label>Client_id</Form.Label>
  
    <Form.Control type="text"  name="id_client" onChange={HandelChange}/>
  </Form.Group>

  


  
  <Button variant="primary" type="submit" onClick={HandelSubmit}>
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
