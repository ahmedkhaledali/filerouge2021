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
import {getchien,deletechien, updatechien} from "../action/chienaction"
import {getuser,userdelete} from "../action/auth"
import {getcoach,deletecoach} from "../action/coachaction"
import {getcontact,deletecontact} from "../action/contactaction"
import {getfoyer,deletfoyer} from "../action/foyeraction"
import {getrace,deletrace} from "../action/raceaction"
import {getdressage,deletdressage} from "../action/dressageaction"
import {useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Updteuser from "../Composent/updateuser";
import Updatedressage from"../Composent/updatedressage"
import Ajoutcoach from "../Composent/Ajoutcoach";
import Updcoach from "../Composent/updatecoach"
import {BsTrashFill } from "react-icons/bs"
import Updrace from "../Composent/updaterace";
import Updfoyer from "../Composent/updatefoyer";
function Dashborad  () {

//getchien
  const chien = useSelector(state=>state.chienstore)
const dispatch = useDispatch()
useEffect(() => {
   dispatch(getchien());
 },[]);
 console.log(chien, "did we ?");

//delet
const chiendelete =(id)=>{
  dispatch (deletechien(id) )
  console.log("rr",(id))
}


//getcoach
const coachs = useSelector(state=>state.coach)
const dispatch2 = useDispatch()
useEffect(() => {
   dispatch2(getcoach());
 },[]);
 console.log(coachs, "did we ?");

//deletcoach
const coachdelete =(id)=>{
  dispatch (deletecoach(id) )
  console.log("rr",(id))
}




//GETuser

const user = useSelector(state=>state.data)
const dispatch1 = useDispatch()
useEffect(() => {
   dispatch1(getuser());
 },[]);
 console.log(user, "did we ?");

//deletuser
const deleteuser =(id)=>{
  dispatch (userdelete(id) )
  console.log("rr",(id))
}

//getcontact

const contacts = useSelector(state=>state.contact)
const dispatch3 = useDispatch()
useEffect(() => {
   dispatch3(getcontact());
 },[]);
 console.log(contacts, "did we ?");

//deletcontact
const contactdelete =(id)=>{
  dispatch (deletecontact(id) )
  console.log("rr",(id))
}

//getfoyer
const foyer = useSelector(state=>state.foyer)
const dispatch4 = useDispatch()
useEffect(() => {
   dispatch4(getfoyer());
 },[]);
 console.log(foyer, "did we ?");

//deletfoyer
const foyerdelete =(id)=>{
  dispatch (deletfoyer(id) )
  console.log("rr",(id))
}



//getrace
const race = useSelector(state=>state.race)
const dispatch5 = useDispatch()
useEffect(() => {
   dispatch5(getrace());
 },[]);
 console.log(race, "did we ?");

//deletrace0
const racedelete =(id)=>{
  dispatch (deletrace(id) )
  console.log("rr",(id))
}



//getdressage
const dressage = useSelector(state=>state.dressage)
const dispatch6 = useDispatch()
useEffect(() => {
   dispatch6(getdressage());
 },[]);
 console.log(dressage, "did we ?");

//deletdressage
const dressagedelete =(id)=>{
  dispatch (deletdressage(id) )
  console.log("rr",(id))
}






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
          <Ajoutcoach />
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="sixth">Messagerie Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="seventh">Tous les chiens</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
   

        <h1 style={{textAlign:"center"}}>Les demandes Dressage </h1>
        {dressage.datadressage.map((el)=>(       
 <Row  className="justify-content-around p-5" >
 <Col xs={5} className="txt-get">
<p>id_client :{el.id_client}</p> <br/>
 <p>date de dressage :{el.date_dressage}</p> <br/>
 <p>Confirmation :{el.resultat}</p> <br/>
 
 <Updatedressage  id={el._id} el={el}/>
 <button className="btn-supp" onClick={() => dressagedelete(el._id)} ><BsTrashFill  className="supprimer"/></button>


 </Col>
 
<hr></hr>
</Row>

))}








</Tab.Pane>

        <Tab.Pane eventKey="second">
        <h1 style={{textAlign:"center"}}>Les demandes Race </h1>
        {race.datarace.map((el)=>(       
 <Row  className="justify-content-around p-5" >
  
 <Col xs={5} className="txt-get">
<p>id_client :{el.id_client}</p> <br/>
 <p>date de race:{el.date_race}</p> <br/>
 <p>model de couple  :{el.couplerace}</p> <br/>
 <p>Confirmation :{el.resultat}</p> <br/>
 
 <Updrace  id={el._id} el={el}/>
 <button className="btn-supp" onClick={() => racedelete(el._id)} ><BsTrashFill  className="supprimer"/></button>


 </Col>
 
<hr></hr>
</Row>

))}

        </Tab.Pane>
        <Tab.Pane eventKey="third">

        <h1 style={{textAlign:"center"}}>Les demandes foyer </h1>
        {foyer.datafoyer.map((el)=>(       
 <Row  className="justify-content-around p-5" >
 <Col xs={5} className="txt-get">

 <p>Id_client:{el.id_client}</p> <br/>
 <p>Date pré:{el.datepre}</p> <br/>
 <p>Date fin :{el.datefin}</p> <br/>
 <p>Coonfirmation :{el.resultat}</p> <br/>
 
 <Updfoyer   id={el._id} el={el}/>
 <button className="btn-supp" onClick={() => foyerdelete(el._id)} ><BsTrashFill  className="supprimer"/></button>


 </Col>
 
<hr></hr>
</Row>

))}

        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
        <h1 style={{textAlign:"center"}}>Les users </h1>
        {user.dataClient.map((el)=>(       
 <Row  className="justify-content-around p-5" >  
 <Col xs={5} className="txt-get" >
<p>Nom :{el.fullName}</p> <br/>
<p>adress :{el.adress}</p> <br/>
<p>email : {el.email}</p> <br/>
<p>phone: {el.phone}</p> <br/>
 </Col>
 <Col className="txt-get">
 <p>role:{el.role}</p> <br/>
 <button  className="btn-supp" onClick={() => deleteuser(el._id)}><BsTrashFill  className="supprimer"/></button>
 </Col>
</Row>

))}
        </Tab.Pane>
        <Tab.Pane eventKey="fivth">
        <h1 style={{textAlign:"center"}}>Coach </h1>
        {coachs.datacoach.map((el)=>(       
 <Row  className="justify-content-around p-5" >
 <Col>
 <Image src={el.image} alt="" style={{width:"100px",height:"100px"}}/>
 </Col>
 <Col xs={5} className="txt-get">
<p>Nom :{el.nom}</p> <br/>
<p>Prenom :{el.prenom}</p> <br/>
<p>Email : {el.mail}</p> <br/>
<p>Age : {el.age}</p> <br/>
 </Col>
 <Col className="txt-get">
 <p>Carte Cin :{el.cin}</p> <br/>
 <p>Experience :{el.experience}</p> <br/>
 <button  className="btn-supp" onClick={() => coachdelete(el._id)}><BsTrashFill  className="supprimer"/></button>
<Updcoach  id={el._id} el={el}/>
 </Col>
</Row>
))}
        </Tab.Pane>
        <Tab.Pane eventKey="sixth">
    

        <h1 style={{textAlign:"center"}}>Contacts </h1>
        {contacts.datacontact.map((el)=>(       
 <Row  className="justify-content-around p-5" >
 <Col xs={5} className="txt-get">
<p>Mail :{el.mail}</p> <br/>
<p>commentaire :{el.commentaire}</p> <br/>
 </Col>
 <button onClick={() => contactdelete(el._id)}><BsTrashFill /> </button>

</Row>
))}
        </Tab.Pane>
        <Tab.Pane eventKey="seventh">


        <h1 style={{textAlign:"center"}}>Les chiens</h1>
{chien.datas.map((el)=>(       
<Row  className="justify-content-around p-5" >

<Col>
<Image src={el.image} alt="" style={{width:"200px",height:"150px"}}/>
</Col>
<Col xs={5} className="txt-get">
<p>Nom :{el.nom}</p> <br/>
<p>Model :{el.model}</p> <br/>
<p>Vaccineé : {el.vaccin}</p> <br/>
<p>Age : {el.age}</p> <br/>
</Col>
<Col className="txt-get">
<p>Critére :{el.critére}</p> <br/>
<p>Taille :{el.taille}</p> <br/>
<p>Date :{el.date}</p> <br/>
<p>Id_client:{el.id_client}</p>

<button className="btn-supp" onClick={() => chiendelete(el._id)} ><BsTrashFill  className="supprimer"/></button>
</Col>
</Row>

))}   

</Tab.Pane>


      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
    </div>
  );
}

export default Dashborad;


