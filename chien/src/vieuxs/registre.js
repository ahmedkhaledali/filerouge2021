import { Container,Row,Form, Button } from 'react-bootstrap'
import Input from "./input"
import { signup} from '../action/registreuser'
import {useDispatch,useSelector} from 'react-redux'
import {useState,useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import { FaUserAlt, FaMapMarkerAlt, FaPhoneAlt, FaKey } from "react-icons/fa"
import { GrMail } from "react-icons/gr"


const RegisterUserForm = (props) => {

   const [fullName, setFullName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [phone, setPhone] = useState('')
   const [adress, setadress] = useState('')
   const [error, setError] = useState('')
   const auth = useSelector((state) => state.data);
   const user = useSelector((state) => state.user);
   const dispatch = useDispatch();
   
   useEffect(() => {
      if (!user.loading) {
        setFullName("");
        setPhone("");
        setadress("");
        setEmail("");
        setPassword("");
      }
    }, [user.loading]);
  
    const userSignup = (e) => {
      e.preventDefault();
  
      const user = {
        fullName,
        phone,
        adress,
        email,
        password,
      };
  
      dispatch(signup(user));
    };

 if(auth.authenticate){
   return <Redirect to={`/connexion`} />
 }
 
 if (user.loading) {
   return <p>Loading...!</p>;
 }

   return (
       <div>
           <h2 className="text-center mt-5 pt-4 connextion-title">INSCRIPTION</h2>    
           <Container>
               <Row>
                       <Form className="form register-user-form mb-5" onSubmit={userSignup}>
                           <div className="d-flex mb-3">
                             
                             <Input  placeholder="Ecrivez votre nom et prénom ici.." type="text" onChange={(e)=>{setFullName(e.target.value)}}/>
                           </div>
                           <div className="d-flex mb-3">
                           
                             
                             <Input  placeholder="Ecrivez votre téléphone ici.." type="text" onChange={(e)=>{setPhone(e.target.value)}}/>
                           </div>
                           <div className="d-flex mb-3">
                             
                             <Input  placeholder="Ecrivez votre adress ici.." type="text" onChange={(e)=>{setadress(e.target.value)}}/>
                           </div>
                           <div className="d-flex mb-3">
                             <GrMail  className="mr-2 mt-2 logo-login"/>
                             <Input  placeholder="Ecrivez votre email ici.." type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                           </div>
                           <div className="d-flex">
                          
                             <Input  placeholder="Ecrivez votre mot de passe ici.."  type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                           </div>
                           <div className="d-flex justify-content-center">
                              <Button  className="my-auto top-btn mt-4" type="submit" variant="outline-dark">S'inscrire</Button>
                           </div>
                       </Form>
               </Row>
           </Container>
           
       </div>
   )
 }
 
 export default RegisterUserForm