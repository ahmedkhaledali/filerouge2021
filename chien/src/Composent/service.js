import "react-bootstrap";
import "../App.css";
import "video.js/dist/video-js.css";
import Image from 'react-bootstrap/Image'
import service from '../images/4.jpg'
import Logo from '../LOGO/logo6.png'
import {Link }from 'react-router-dom'
import {useSelector} from 'react';




function Service() {


  return (
      <div class="container">
    <div class="row text-center">
    <p class="titre-txt pb-5 p-3" style={{textAlign:'center'}}>Nos Services</p>

    {/* <div class=" d-flex srvs text-center">
        <span></span><img src={Logo} alt="" class="f"/><span></span>
    </div> */}
        <div class="col-md-4">
            
            <p class="sr2">Fidélitée</p>
            <Link className="nav-link"  to="/dressage"><p class="sr2" ><img src="https://img.icons8.com/offices//000000/dog-footprint.png" class="ic-sr me-4"/>Dressage</p></Link>
        </div>
        <div class="col-md-4">
        <img class="srve" src={service}  />
        </div>
        <div class="col-md-4">
        <Link className="nav-link"  to="/foyer"> <p class="sr1"><img src="https://img.icons8.com/emoji/40/000000/paw-prints.png"  class="ic-sr me-4"/>Race</p></Link>
        <Link className="nav-link"  to="/race"> <p class="sr1"><img src="https://img.icons8.com/office/40/000000/dog-house.png"class="ic-sr me-4 "/>Foyer</p></Link>
        </div>
       
        </div>
        </div>
    
  );
}

export default  Service;
