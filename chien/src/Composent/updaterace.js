import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {updaterace} from "../action/raceaction"
import {useDispatch} from 'react-redux'

const Updrace = ({el,id}) => {
  const [update,setUpdate]=useState({nom:el.nom,
    model:el.model,
    taille:el.taille,
    critére:el.critére,
    age:el.age,
    image:el.image,
    vaccin:el.vaccin,
    date:el.date,
    couplerace:el.couplerace
      
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
        dispatch (updaterace(id, update.nom, update.model,update.taille ,update.critére,update.age,update.image,update.vaccin,update.date,update.couplerace)) 
        console.log("update",update)
        setShow(false)
        }


  return(
    <div>
    <div className='container mt-5'>
  
    <Button variant="primary" onClick={handleShow}>
 Modifier votre chien
      </Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className="title-modal">Information de mon chien</Modal.Title>
</Modal.Header>
<Modal.Body>

<Form   >
  <Form.Group className="mb-3" controlId="formBasicNom">
    <Form.Label>Nom de chien</Form.Label>
    <Form.Control type="text" placeholder="Enter nom de chien" name="nom" defaultValue={el.nom}  onChange={handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicModel">
    <Form.Label>Model de chien</Form.Label>
    <Form.Control type="text" placeholder="Enter model de chien" name="model" defaultValue={el.model}  onChange={handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox1">
  <Form.Label>Vaccineé</Form.Label>
  <Form.Control type="text" placeholder="repondre Oui  ou bien Non" name="vaccin" defaultValue={el.vaccin}  onChange={handleChange}/>

  
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicCheckbox2">
  <Form.Label>Taille</Form.Label>
  <Form.Control type="text" placeholder="Enter taille de chien" name="taille" defaultValue={el.taille}  onChange={handleChange}/>

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAge">
    <Form.Label>Age de chien</Form.Label>
    <Form.Control type="text" placeholder="Enter age de chien" name="age" defaultValue={el.age}  onChange={handleChange}/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicImage">
    <Form.Label>Image de chien</Form.Label>
    <Form.Control type="text" placeholder="Enter image de chien" name="image" defaultValue={el.image}  onChange={handleChange}/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicDate">
    <Form.Label>Date Dressage de chien</Form.Label>
    <Form.Control type="text" placeholder="Enter la date " name="date" defaultValue={el.date}  onChange={handleChange}/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicCheckbox3">
  <Form.Label>Critére</Form.Label>
  
    <Form.Control type="text" placeholder="Enter la Critére de chien " name="critére" defaultValue={el.critére}  onChange={handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox3">
  <Form.Label>couple de chien </Form.Label>
  
    <Form.Control type="text" placeholder="Enter couple de chien  " name="couplerace" defaultValue={el.couplerace}  onChange={handleChange}/>
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