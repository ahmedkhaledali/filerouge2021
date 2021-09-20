import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {updateuser} from "../action/auth"
import {useDispatch} from 'react-redux'

const Upduser = ({el,id}) => {
  const [update,setUpdate]=useState({fullName:el.fullName,
    phone:el.phone,
    adress:el.adress,
    email:el.email,
    password:el.password,
    role:el.role
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

    const uptuser=()=>{
        dispatch (updateuser(id, update.fullName, update.phone,update.adress,update.email ,update.password,update.role)) 
        console.log("update",update)
        
        }


  return(
    <div>
    <div className='container mt-5'>
   
    <Button variant="primary" onClick={handleShow}>
 Modifier votre compt
      </Button>
<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className="title-modal">Information de mon chien</Modal.Title>
</Modal.Header>
<Modal.Body>

<Form  onSubmit={uptuser}  >
  <Form.Group className="mb-3" controlId="formBasicNom">
    <Form.Label>Nom </Form.Label>
    <Form.Control type="text" placeholder="Enter votre nom" name="fullName" defaultValue={el.fullName}  onChange={handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicModel">
    <Form.Label>Numéro de telephone</Form.Label>
    <Form.Control type="text" placeholder="Enter ton numéro de telephone" name="phone" defaultValue={el.phone}  onChange={handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox1">
  <Form.Label>Ton Adress</Form.Label>
  <Form.Control type="text" placeholder="Entrer ton adress" name="adress" defaultValue={el.adress}  onChange={handleChange}/>

  
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicCheckbox2">
  <Form.Label>Email</Form.Label>
  <Form.Control type="text" placeholder="Enter ton email" name="email" defaultValue={el.email}  onChange={handleChange}/>

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAge">
    <Form.Label>Mot de passe </Form.Label>
    <Form.Control type="text" placeholder="Enter ton mot de passe" name="password" defaultValue={el.password}  onChange={handleChange}/>
  </Form.Group>


  <Button className="ms-3  mt-3" variant="secondary" onClick={handleClose}>  
Close
</Button>

<Button variant="dark" type="submit"  >valider</Button>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default Upduser