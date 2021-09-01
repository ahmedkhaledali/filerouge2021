import "react-bootstrap";
import "../App.css";
import Image from 'react-bootstrap/Image'
import { Container,Row,Col } from "react-bootstrap";
import Image1 from '../images/123.jpg'
import Image2 from '../images/159.jpg'
import Image3 from '../images/753.jpg'
import Image4 from '../images/10.jpg'
import Image5 from '../images/11.jpg'
import Image6 from '../images/43.jpg'


function Chiens() {
  return (
    <div className="row justify-content-center">
        <div className="col-md-2">
        <Image src={Image1} className="model"/>
        </div>
        <div className="col-md-2">
        <Image src={Image2} className="model"/>
        </div>
        <div className="col-md-2">
        <Image src={Image3} className="model"/>
        </div>
        <div className="col-md-2">
        <Image src={Image4} className="model"/>
        </div>
        <div className="col-md-2">
        <Image src={Image5} className="model"/>
        </div>
        <div className="col-md-2">
        <Image src={Image6} className="model"/>
        </div>
    </div>
  );
}

export default Chiens;
