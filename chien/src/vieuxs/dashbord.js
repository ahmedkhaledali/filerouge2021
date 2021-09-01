import "react-bootstrap";
import "../App.css";
import { Row,Col,Sonnet } from "react-bootstrap";
import TabPane from 'react-bootstrap/TabPane'
import TabContent from 'react-bootstrap/TabContent'
import TabContainer from 'react-bootstrap/TabContainer'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Nav from "react-bootstrap/Nav";
import Histoire from "../Composent/histoire";
import Footer from "../Composent/footer";
import Topnav from "../Composent/topnav";
import Image from 'react-bootstrap/Image'
import {getchien} from "../action/chienaction"
import {useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'

function Dashborad  () {

//getchien
  const chien = useSelector(state=>state.chienstore)
const dispatch = useDispatch()
useEffect(() => {
   dispatch(getchien());
 },[]);
 console.log(chien, "did we ?");


  return (
    <div >
      
      <Topnav/>
<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column side">
        <Nav.Item>
          <Nav.Link eventKey="first">Demande Dressage</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Demande Race</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Demande Foyer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">Notre Utilisateurs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fivth">Notre entreneurs </Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <h1 style={{textAlign:"center"}}>Les demandes </h1>
        {chien.datas.map((el)=>(       
 <Row  className="justify-content-around p-5" >
  
 <Col>
 <Image src={el.image} alt="" style={{width:"100px",height:"100px"}}/>
 </Col>
 <Col xs={5}>
<p>Nom :{el.nom}</p> <br/>
<p>Model :{el.model}</p> <br/>
<p>Vaccineé : {el.vaccin}</p> <br/>
<p>Age : {el.age}</p> <br/>
 </Col>
 <Col>
 <p>Critére :{el.critére}</p> <br/>
 <p>Taille :{el.taille}</p> <br/>
 <p>Date :{el.date}</p> <br/>
 <button>Confirmation</button>
 </Col>
<hr></hr>
</Row>

))}
  
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Footer/>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <Footer/>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
          <Footer/>
        </Tab.Pane>
        <Tab.Pane eventKey="fivth">
          <Footer/>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
    </div>
  );
}

export default Dashborad;
