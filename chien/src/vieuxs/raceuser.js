

import Footer from '../Composent/footer';
import Image from 'react-bootstrap/Image'
import Image1 from '../images/1.jpg'
import Modaldressage from '../Composent/modalchien'
import Navbare1 from '../Composent/Navbar1';
import {getcoach} from "../action/coachaction"
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react';
import Navbareuser from '../Composent/navbaruser';
import Modalrace from '../Composent/modalerace';
function Raceuser() {

  return ( 
    <div >
      
      <Navbareuser />
      <p className="t-dressage">Race</p>
      <div class="container-fluid"> 
        <div class="row bg-race">
<div className="col-md-6">
<p class="hist-txt2 " >Caractéristiques des races
 de chiens pour faire le bon choix<br/>
 On dit que souvent
  les chiens ressemblent à leur maître.
   Si c'est parfois vrai pour l'aspect physique,
    il en est autrement pour le caractère! De plus,
     un chien doit convenir à ton style de vie et/ou celui de ta famille.
Si tu veux un chien affectueux et sociable capable de jouer avec les enfants,
 ou un chien qui jappe peu car tu vis en appartement, 
 il vaut mieux en savoir le plus possible sur les races de chiens avant d'adopter 
 une petite boule de poil. 
Voici un petit survol despersonnalités des races de chiens pour faire le bon choix!
 
 
 </p>
</div>
  </div>
  
   
   

   <div class="w3-container dr-bg">
     <div className="row justify-content-around">
   <p>ali</p>
   </div>
</div>

   
   
   
   <Modalrace />
   
       </div>

      <Footer />
    </div>
  );
}

export default Raceuser;
