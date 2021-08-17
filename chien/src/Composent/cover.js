import "react-bootstrap";
import "../App.css";
import video from "../video/video.mp4"

function Cover() {
  return (
    <div >
< video autoPlay loop muted className="video">
  <source src={video} type="video/mp4">
  </source>
</video>
<p className="text1"> Je crois que chaque chien <br /> entre dans notre vie <br />
pour nous enseigner quelque chose <br />
<button class="buton">Prendre rendez-vous</button>
</p>



  {/* <Carousel>
  <Carousel.Item>
    <img
      className="d-block dogs-img"
      src={Image}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 class="text1">First slide label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block dogs-img"
      src={Image1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 class="text1">Second slide label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
 
 
  <Carousel.Item>
    <img
      className="d-block dogs-img"
      src={Image2}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 class="text1">Third slide label</h3>
    </Carousel.Caption>

  </Carousel.Item>

  
</Carousel> */}

    </div>
  );
}

export default Cover;
