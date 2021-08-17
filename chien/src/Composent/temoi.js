import "react-bootstrap";
import "../App.css";
import service from '../images/18.jpg'
import service1 from '../images/5.jpg'
import service2 from '../images/3.jpg'
import Carousel from 'react-bootstrap/Carousel'




function Temoi() {
  return (
    <div>
    <p class="titre-txt pb-5 p-5" style={{textAlign:'center'}}>Témoignage</p>
      <div className="cr-bg">
<div className="card">
<div id="carouselExampleSlidesOnly" class="carousel slide img-cr" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={service} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={service1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={service2} class="d-block w-100" alt="..." />
    </div>
  </div>
</div>
</div>
</div>




{/*         
        <p class="titre-txt pb-5 p-5" style={{textAlign:'center'}}>Témoignage</p>
<Carousel className="cr-bg">
  <Carousel.Item>

  {/* <div class="card" style={{width: '18rem'}}>
  <img src={service} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div> */}
  {/* <div class="card ">
  <img src={service} alt="Avatar" className="img-cr"/>
  <div class="text-cr ">
    <p>Vous êtes absolument incroyable ! 
      Nous sommes heureux d'avoir trouvé quelqu'un qui peut toiletter nos animaux<br/>
       de la bonne manière et de la manière que nous souhaitons qu'ils soient soignés.
       Merci beaucoup à vous les gars</p> 
  </div>
</div>
  </Carousel.Item>
  <Carousel.Item> */}
  {/* <div class="card" style={{width: '18rem'}}>
  <img src={service1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div> */}


  {/* <div class="card ">
  <img src={service1} alt="Avatar" className="img-cr "/>
  <div class="text-cr ">
    <p>Tzul offre un service exceptionnel et j'y enverrai 
      à nouveau mon chien sans poser de questions. <br/>
       Je fais confiance à cette équipe et je n'irais nulle part ailleurs.
       Un toilettage et un service cinq étoiles!</p> 
  </div>
</div>
    
  </Carousel.Item>
  <Carousel.Item> */}

  {/* <div class="card" style={{width: '18rem'}}>
  <img src={service2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div> */}

  {/* <div class="card ">
  <img src={service2} alt="Avatar" className="img-cr "/>
  <div class="text-cr ">
  
    <p>J'ai essayé de nombreux toiletteurs avant Tzul.
       Personnel vraiment sympathique, bon prix et surtout un chien heureux et bien soigné.<br />
       Vous faites un travail formidable et vous êtes le meilleur.</p> 
  </div>
</div>
  </Carousel.Item>
</Carousel> */} 



        </div>
    
  );
}

export default  Temoi;
