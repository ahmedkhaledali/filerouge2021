

import Footer from '../Composent/footer';
import Image from 'react-bootstrap/Image'
import Image1 from '../images/niche.jpg'
import Image2 from '../images/niche1.jpeg'
import Image3 from '../images/niche2.jpg'
import Image4 from '../images/niche3.jpg'

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
   <Image src={Image1} alt="niche" className="img-niche"/>
   <Image src={Image2} alt="niche" className="img-niche"/>
   <Image src={Image3} alt="niche" className="img-niche"/>
   <Image src={Image4} alt="niche" className="img-niche"/>
   </div>
</div>

   
   
   
   
         <Modalfoyer />
</div>

<div className="mt-4">
<Footer />
</div>
 
    </div>
  );
}

export default Foyeruser;
