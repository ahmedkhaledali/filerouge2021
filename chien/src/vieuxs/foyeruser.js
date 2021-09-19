

import Footer from '../Composent/footer';
import Image from 'react-bootstrap/Image'
import Image1 from '../images/1.jpg'
import Modaldressage from '../Composent/modalchien'
import Navbare1 from '../Composent/Navbar1';
import {getcoach} from "../action/coachaction"
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react';
import Navbareuser from '../Composent/navbaruser'
import Modalfoyer from '../Composent/modalefoyer';
function Foyeruser() {
 
  return (
    <div >
      
      <Navbareuser /> 
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
   <p>ali</p>
   </div>
</div>

   
   
   
   
   
         <Modalfoyer />
</div>

      <Footer />
    </div>
  );
}

export default Foyeruser;
