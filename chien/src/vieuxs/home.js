
import React,{useState} from 'react'
import { Container,Row,Form, Button } from 'react-bootstrap'
import Input from './input'
import {login} from '../action/auth'
import {useDispatch,useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { FaKey } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import { Link } from "react-router-dom"
import Navbare1 from '../Composent/Navbar1'
import Footer from '../Composent/footer'
const LoginForm = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const auth = useSelector(state =>state.userlog)
  const dispatch = useDispatch()
  
  const userLogin =(e)=>{
  e.preventDefault()
  const user = {
      email,
      password
  }
  dispatch(login(user))

}

if(auth.authenticate){
  return <Redirect to={`/profil`} />
}

const ali = ()=>{
  window.location.reload()
}
  return (
    
      <div >
        <Navbare1 />
          <h2 className="text-center mt-5 pt-4 connextion-title">CONNEXION</h2>    
          
              <Row className="bg-conx" >
                      <Form className="form login-form mb-5 p-5" onSubmit={userLogin}>
                          <div className="d-flex mb-3">
                            
                            <Input  placeholder="Ecrivez votre email ici.." type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                          </div>
                          <div className="d-flex">
                            
                            <Input  placeholder="Ecrivez votre mot de passe ici.."  type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                          </div>
                          <div className="d-flex justify-content-center">
                             <Button  className="my-auto top-btn mt-4" type="submit" variant="outline-dark" className="btn-conct"  >Se connecter</Button>
                             <Link to="/register" ><Button  className="my-auto top-btn mt-4"  variant="outline-dark"  className="btn-regist">Cree nouveaux compte </Button></Link>
                          </div>  
                      </Form>
              </Row>
          
          <Footer />
      </div>
  )
}

export default LoginForm