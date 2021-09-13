import { Container,Row,Form, Button,Col } from 'react-bootstrap'
import Input from "./input"
import { signup} from '../action/registreuser'
import {useDispatch,useSelector} from 'react-redux'
import {useState,useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import { FaUserAlt, FaMapMarkerAlt, FaPhoneAlt, FaKey } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import Navbare1 from '../Composent/Navbar1'
import Footer from '../Composent/footer'
import Image from 'react-bootstrap/Image'
import Image1 from '../images/18.jpg'
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
         <Navbare1 />
          
           <Container>
               <Row>
               <h2 className="text-center  pt-4 connextion-title">INSCRIPTION</h2>   
                    <Col>
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
                            
                             <Input  placeholder="Ecrivez votre email ici.." type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                           </div>
                           <div className="d-flex">
                          
                             <Input  placeholder="Ecrivez votre mot de passe ici.."  type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                           </div>
                           <div className="d-flex justify-content-center">
                              <Button  className="my-auto top-btn mt-4" type="submit" variant="outline-dark">S'inscrire</Button>
                           </div>
                       </Form>
                       </Col>
                       <Col>
                       <Image src={Image1} alt="" className="img-regsitre"  />
                       
                       </Col>
               </Row>
           </Container>
           <Footer />
       </div>
   )
 }
 
 export default RegisterUserForm