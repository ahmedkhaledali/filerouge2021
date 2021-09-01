import "react-bootstrap";
import "../App.css";
import service from '../images/18.jpg'
import service1 from '../images/21.jpg'
import service2 from '../images/6.jpg'
import Carousel from 'react-bootstrap/Carousel'
import { Container,Row,Col } from "react-bootstrap";



function Temoi() {
  return (
    <div>
  <div class="container-fuild temo">
<div class="row d-flex justify-content-between">
<div className="cr-bg">
  <div class="card-group">
  <div class="col-md-4">
  <div class="card1 card-primary text-center">
      <img class=" crl" src={service} alt="Card image cap" />
      <div class="card-body">
        <p class="card-txt">
        Tzul offre un service exceptionnel et j'y enverrai à nouveau mon chien sans poser de questions. Je fais confiance à cette équipe et je n'irais nulle part ailleurs.
         Un toilettage et un service cinq étoiles!
        </p>
      </div>
    </div>
  </div>

  <div class="col-md-4">
  <div class="card1 card-primary text-center">
      <img class=" crl" src={service2} alt="Card image cap"/>
      <div class="card-body">
        <p class="card-txt">
        Vous êtes absolument incroyable ! Nous sommes heureux d'avoir trouvé quelqu'un qui peut toiletter nos animaux de la bonne manière et de la façon dont nous voulons qu'ils soient soignés.
         Merci beaucoup à vous les gars.
         </p>
      </div>
    </div>
  </div>
  <div class="col-md-4">

  <div class="card1 card-primary text-center">
      <img class=" crl" src={service1} alt="Card image cap"/>
      <div class="card-body">
        <p class="card-txt">
        J'ai essayé de nombreux toiletteurs avant Pets Grooming. Personnel vraiment sympathique, bon prix et surtout un chien heureux et bien soigné.
         Vous faites un travail formidable et vous êtes le meilleur.
          </p>
      </div>
      
    </div>

  </div>


</div>

  </div>
 
   
 
   
  </div>
</div>
          
      
      




        </div>
    
  );
}

export default  Temoi;
