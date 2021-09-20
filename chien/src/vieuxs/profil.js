import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Navbareuser from '../Composent/navbaruser'
import {signout,isUserLoggedIn} from '../action/auth'
import Upduser from '../Composent/updateuser'
import Modalrace from '../Composent/modalerace'
import Modalchien from '../Composent/modalchien'
import Updchien  from "../Composent/updatechien"
import {getchien,deletechien} from "../action/chienaction"
import { Row,Col,Image } from "react-bootstrap";
import {BsTrashFill } from "react-icons/bs"
import {getfoyer,deletfoyer} from "../action/foyeraction"
import {getrace,deletrace} from "../action/raceaction"
import {getdressage,deletdressage} from "../action/dressageaction"
import Footer from '../Composent/footer';


export default function UserProfil (){
    const logout =()=> {window.location.reload(dispatch(signout()))}
    const dispatch=useDispatch()
    const auth = useSelector(state => state.userlog.token)
///////////////////////////////////////////////////

///get
const chien = useSelector(state=>state.chienstore)
const dispatch1 = useDispatch()
useEffect(() => {
   dispatch1 (getchien());
 },[]);
 console.log(chien, "did we ?");
  
 //supp 
const chiendelete =(id)=>{
    dispatch (deletechien(id) )
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
        <div>
<Navbareuser/>
<p className="t-dressage">Mon Profil</p>          
<Col className="profil">
<p>votre Id:{auth._id}</p><br/>
                    <p>Nom :{auth.fullName}</p> <br/> 
                    <p>adress :{auth.adress}</p> <br/>
                    <p>email : {auth.email}</p> <br/>
                    <p>phone: {auth.phone}</p> <br/>
                    <p>role:{auth.role}</p> <br/>
<Upduser id={auth._id} el={auth} />
<button className="btn btn-primary" onClick={logout}> out </button>
</Col>

        {chien.datas.filter((el)=>
        el.id_client === auth._id
        ).map((el)=>(       
            <Row className="get-chien">
 <Image src={el.image} alt="" style={{width:"200px",height:"150px",marginTop:"4%",marginLeft:"5%"}}/>
<Col className="txt-chien">
<p>Nom :{el.nom}</p> <br/>
<p>Model :{el.model}</p> <br/>
<p>Vaccineé : {el.vaccin}</p> <br/>
<p>Age : {el.age}</p> <br/>
</Col>
<Col className="txt-chien">
 <p>Critére :{el.critére}</p> <br/>
 <p>Taille :{el.taille}</p> <br/>
 <p>Date :{el.date}</p> <br/>
 <p>Id_client:{el.id_client}</p>
 <Updchien  id={el._id} el={el}/>
 <button className="btn-supp" onClick={() => chiendelete(el._id)} ><BsTrashFill  className="supprimer"/></button>
</Col>
</Row>
))}            
  <Modalchien />

<p className="d-foyer">Les demandes foyer </p>
        {foyer.datafoyer.filter((el)=>
        el.id_client === auth._id)
        .map((el)=>(       
 <Row  className="justify-content-around p-5 get-chien" >
 <Col xs={5} className="txt-chien">

 <p>Id_client:{el.id_client}</p> <br/>
 <p>Date pré:{el.datepre}</p> <br/>
 <p>Date fin :{el.datefin}</p> <br/>
 <p>Coonfirmation :{el.resultat}</p> <br/>
 
 <button className="btn-supp" onClick={() => foyerdelete(el._id)} ><BsTrashFill  className="supprimer"/></button>


 </Col>
 
<hr></hr>
</Row>

))}

<p className="d-foyer">Les demandes Race </p>
        {race.datarace.filter((el)=>
        el.id_client === auth._id)
        .map((el)=>(       
 <Row  className="justify-content-around p-5 get-chien" >
  
 <Col xs={5} className="txt-chien">
<p>id_client :{el.id_client}</p> <br/>
 <p>date de race:{el.date_race}</p> <br/>
 <p>model de couple  :{el.couplerace}</p> <br/>
 <p>Confirmation :{el.resultat}</p> <br/>
 
 <button className="btn-supp" onClick={() => racedelete(el._id)} ><BsTrashFill  className="supprimer"/></button>
 </Col>
 
</Row>

))}


<p className="d-foyer" >Les demandes Dressage </p>
        {dressage.datadressage.filter((el)=>
        el.id_client === auth._id)
        .map((el)=>(       
 <Row  className="justify-content-around p-5 get-chien" >
 <Col xs={5} className="txt-chien">
<p>id_client :{el.id_client}</p> <br/>
 <p>date de dressage :{el.date_dressage}</p> <br/>
 <p>Confirmation :{el.resultat}</p> <br/>
 
 <button className="btn-supp" onClick={() => dressagedelete(el._id)} ><BsTrashFill  className="supprimer"/></button>


 </Col>
 
<hr></hr>
</Row>

))}
<div className="mt-4">
<Footer />
</div>
        </div>
    )
}
