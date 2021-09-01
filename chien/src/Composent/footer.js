import "react-bootstrap";
import "../App.css";
import Image from 'react-bootstrap/Image'
import Logo from '../LOGO/logo6.png'
import { Container,Row,Col } from "react-bootstrap";
import {Link }from 'react-router-dom'
import SimpleMap from './maps'

function Footer () {

  
      return (
        <div >
    <Container fluid className="footer">
        <Row  >
     
    <Col md={3} >
    <Image src={Logo} alt="" style={{width : "235px",height:"224px"}}/>
    </Col>

   <Col md={3}>
   <p className="foot-x">Informations de contact</p>
            <div className="f-icone">
             <p><ion-icon name="navigate-circle-outline"></ion-icon>Tunis,Tunis </p>
            <p><ion-icon name="call-outline"></ion-icon> +216 27668918 </p>
            <ion-icon name="mail-outline"></ion-icon><p className="mail">  ali.ahmedkhaled123@gmail.com</p>
        </div>
        </Col>

    <Col md={3} >
        <p className="foot-p" >À propos de nous</p>
    <p className="f-txt">
    Avec Tzul, nous avons pour objectif l’amélioration de la prise en charge 
    médicale des animaux
     de compagnie par les vétérinaires.
Chez l’animondo, on va simplifier la vie en vous assurant
 la sérénité et en garantissant le bien-être et la bonne santé de vos animaux.<br />
    </p>
    </Col>

   <Col md={3} >
       <div>
   <p className="foot-txt">S'abonner</p>
        
            
                <form action="#" method="Post" id="f-f">
                    <input className="ipt"type="text" name="text" placeholder="Enter Your Email Id" />
                    <button type="button" class="tbn">Subscribe<i class="fa fa-envelope"></i></button>
                </form>
            
                </div>
    </Col>

        </Row>
    </Container>
	</div>
);
};

export default Footer;


   {/* <Col xs={{ order: 'last' }}>
            <div className="f-icone">
        <img src="https://img.icons8.com/glyph-neue/30/000000/user-location.png"/> Tunis,Tunis <br />
        <img src="https://img.icons8.com/ios-glyphs/30/000000/phone-office--v2.png"/> +216 27668918 <br />
        <img src="https://img.icons8.com/ios-filled/30/000000/apple-mail.png"/> ali.ahmedkhaled123@gmail.com
        </div>
        </Col> */}

    {/* <Col >
    <div className="f-link" >
    <Link className="nav-link"  to="/">Acceuil</Link>
      <Link  className="nav-link" to="/service">  Nos Services </Link>
      <Link className="nav-link" to="/contact">  Contact </Link>
      </div>
    </Col> */}

    {/* <Col >
    <div className="f-map">
    <SimpleMap />
    </div>
    </Col> */}

    {/* <Col xs={{ order: 'first' }} >
    <Image src={Logo} alt="" style={{width : "160px",height:"150px"}}/>
    <p className="f-txt">
    Avec Tzul, nous avons pour objectif l’amélioration de la prise en charge 
    médicale des animaux
     de compagnie par les vétérinaires.
Chez l’animondo, on va simplifier la vie en vous assurant
 la sérénité et en garantissant le bien-être et la bonne santé de vos animaux.<br />
 <b>Trouvez nous sur : </b><br />
 <img src="https://img.icons8.com/color/40/000000/facebook-circled--v1.png"/>
 <img src="https://img.icons8.com/fluency/40/000000/instagram-new.png"/>
 <img src="https://img.icons8.com/fluency/40/000000/twitter.png"/>

    </p>
    </Col> */}

















