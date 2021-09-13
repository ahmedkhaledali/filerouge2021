

import Footer from '../Composent/footer';
import Image from 'react-bootstrap/Image'
import Image1 from '../images/1.jpg'
import Modaldressage from '../Composent/modalchien'
import Navbare1 from '../Composent/Navbar1';
import {getcoach} from "../action/coachaction"
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react';
function Foyer() {
 //getcoach
  const coachs = useSelector(state=>state.coach)
  const dispatch = useDispatch()
  useEffect(() => {
     dispatch(getcoach());
   },[]);
   console.log(coachs, "did we ?");

  return (
    <div >
      
      <Navbare1 />
      <p className="t-dressage">Foyer</p>
      <div class="container-fluid">
        <div class="row bg-foyer">
<div className="col-md-6">
<p class="hist-txt3 " >
   
Lorsque vous devez vous séparer de votre chien temporairement,
 pour un voyage, des vacances, un déplacement professionnel ou toute autre raison,
  vous devez vous assurer qu’il soit convenablement gardé.
   En effet, il ne s’agit pas que d’une séparation de quelques heures le temps
    de votre travail ou d’une sortie, mais d’une séparation de plusieurs jours,
     voire plusieurs semaines ou mois. 
     Dans ce cas, il est indispensable de veiller au bien-être
 de votre toutou en préparant son hébergement dans des conditions optimales.
 
 </p>
</div>
  </div>
  
   
   
   <div class="w3-container dr-bg">
     <div className="row justify-content-around">
   {coachs.datacoach.map((el)=>(  
  <div class="card shadow p-3 mb-5  rounded card-dres" style={{width:"18rem",marginTop:"17%"}}>
    <img src={el.image} alt="Alps" className="card-img-top" />
    <div class="card-body dr-coach">
    <p>Nom :{el.nom}</p> 
<p>Prenom :{el.prenom}</p>  
 <p>Experience :{el.experience}</p> <br/>

    </div>
  </div>
  ))}
   </div>
</div>

   
   
   
   
   
    
</div>

      <Footer />
    </div>
  );
}

export default Foyer;
