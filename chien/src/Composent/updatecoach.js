import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {updatecoach} from "../action/coachaction"
import {useDispatch} from 'react-redux'

const Updcoach = ({el,id}) => {
  const [update,setUpdate]=useState({
      nom:el.nom,
    prenom:el.prenom,
    mail:el.mail,
    age:el.age,
    cin:el.cin,
    experience:el.experience,
    image:el.image
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

    const uptcoach=()=>{
        dispatch (updatecoach(id, update.nom, update.prenom,update.mail ,update.age,update.cin,update.experience,update.image)) 
        console.log("update",update)
        setShow(false)
        }


  return(
    <div>
    <div className='container mt-5'>
    <Button variant="primary" onClick={handleShow}>
 Modifier Coach
      </Button>



<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className="title-modal">Information Coach</Modal.Title>
</Modal.Header>
<Modal.Body>

<Form>
  <Form.Group className="mb-3" controlId="formBasicNom">
    <Form.Label>Nom de coach</Form.Label>
    <Form.Control type="text" placeholder="Enter nom de coach" name="nom" defaultValue={el.nom} onChange={handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicModel">
    <Form.Label>Prenom de coach</Form.Label>
    <Form.Control type="text" placeholder="Enter prenom de coach" name="prenom" defaultValue={el.prenom} onChange={handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox1">
  <Form.Label>E-mail</Form.Label>
  <Form.Control type="text" placeholder="Entrer leur mail" name="mail" defaultValue={el.mail} onChange={handleChange}/>  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAge">
    <Form.Label>Leur Age</Form.Label>
    <Form.Control type="text" placeholder="Enter Age" name="age" defaultValue={el.age} onChange={handleChange}/>
  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicCheckbox2">
  <Form.Label>Carte Cin</Form.Label>
  <Form.Control type="text" placeholder="Enter Carte cin" name="cin" defaultValue={el.cin} onChange={handleChange}/>

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAge">
    <Form.Label>Leur experience</Form.Label>
    <Form.Control type="text" placeholder="Enter anneé d'experience" name="experience" defaultValue={el.experience} onChange={handleChange}/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicImage">
    <Form.Label>Image de coach</Form.Label>
    <Form.Control type="text" placeholder="Enter image de chien" name="image" defaultValue={el.image} onChange={handleChange}/>
  </Form.Group>

  
<Button variant="dark" type="submit"  onClick={uptcoach} >valider</Button>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default Updcoach