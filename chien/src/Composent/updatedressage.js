import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';

import {useDispatch} from 'react-redux'
import { updatedressage } from '../action/dressageaction';

const Updatedressage = ({el,id}) => {
  const [update,setUpdate]=useState({id_client:el.id_client,
    date_dressage:el.date_dressage,
      resultat:el.resultat
    })
    
  const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
  
    
    
    // handelInput
    const handleChange=(e)=>{
        const {name,value}=e.target
        setUpdate({
            ...update,
            [name]:value
        })
        console.log("input",update)
    }
    // update Menu

    const upddressage=()=>{
        dispatch (updatedressage(id,update.id_client,update.date_dressage,update.resultat)) 
        console.log("update",update)
        setShow(false)
        }


  return(
    <div>
    <div className='container mt-5'>
  
    <Button variant="primary" onClick={handleShow}>
 modification mon salle dressage
      </Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className="title-modal">Information date dressage chien</Modal.Title>
</Modal.Header>
<Modal.Body>

<Form   >
  <Form.Group className="mb-3" controlId="formBasicNom">
    <Form.Label>Id_client</Form.Label>
    <Form.Control type="text"  name="id_client" defaultValue={el.id_client}  onChange={handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox3">
  <Form.Label>Date de dressage</Form.Label>
  
    <Form.Control type="date"  name="date_dressage" defaultValue={el.date_dressage}  onChange={handleChange}/>
  </Form.Group>




  <Form.Group className="mb-3" controlId="formBasicCheckbox3">
  <Form.Label>Confirmation</Form.Label>
  
    <Form.Control type="text"   name="resultat" defaultValue={el.resultat}  onChange={handleChange}/>
  </Form.Group>



  <Button className="ms-3  mt-3" variant="secondary" onClick={handleClose}>  
Close
</Button>

<Button variant="dark" type="submit"  onClick={upddressage} >valider</Button>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default Updatedressage;