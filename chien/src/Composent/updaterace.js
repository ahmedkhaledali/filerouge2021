import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {updaterace} from "../action/raceaction"
import {useDispatch} from 'react-redux'

const Updrace = ({el,id}) => {
  const [update,setUpdate]=useState({id_client:el.id_client,
    couplerace:el.couplerace,
    date_race:el.date_race,
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

    const updrace=()=>{
        dispatch (updaterace(id, update.id_client, update.couplerace,update.date_race ,update.resultat)) 
        console.log("update",update)
        setShow(false)
        }


  return(
    <div>
    <div className='container mt-5'>
  
    <Button variant="primary" onClick={handleShow}>
 Modifier votre race de chien
      </Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className="title-modal">Modifier dressage de chien</Modal.Title>
</Modal.Header>
<Modal.Body>

<Form   >
  <Form.Group className="mb-3" controlId="formBasicNom">
    <Form.Label>Id_client</Form.Label>
    <Form.Control type="text"  name="id_client" defaultValue={el.id_client}  onChange={handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicModel">
    <Form.Label>Couple de chien</Form.Label>
    <Form.Control type="text" name="couplerace" defaultValue={el.couplerace}  onChange={handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox1">
  <Form.Label>Date de race</Form.Label>
  <Form.Control type="text"  name="date_race" defaultValue={el.date_race}  onChange={handleChange}/>

  
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicCheckbox2">
  <Form.Label>Confirmation</Form.Label>
  <Form.Control type="text"  name="resultat" defaultValue={el.resultat}  onChange={handleChange}/>

  </Form.Group>

 
  <Button className="ms-3  mt-3" variant="secondary" onClick={handleClose}>  
Close
</Button>

<Button variant="dark" type="submit"  onClick={updrace} >valider</Button>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default Updrace