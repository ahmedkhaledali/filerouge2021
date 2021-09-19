

import Footer from '../Composent/footer';
import Image from 'react-bootstrap/Image'
import Image1 from '../images/race.jpeg'
import Image2 from '../images/race1.jpeg'
import Image3 from '../images/race3.jpg'
import Image4 from '../images/race2.jpeg'
import Modaldressage from '../Composent/modalchien'
import Navbare1 from '../Composent/Navbar1';
import {getcoach} from "../action/coachaction"
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react';
function Race() {

  return ( 
    <div >
      
      <Navbare1 />
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
   <Image src={Image1} alt="niche" className="img-niche"/>
   <Image src={Image2} alt="niche" className="img-niche"/>
   <Image src={Image3} alt="niche" className="img-niche"/>
   <Image src={Image4} alt="niche" className="img-niche"/>
   </div>
</div>


   
   
   
   
   
        
</div>

      <Footer />
    </div>
  );
}

export default Race;
