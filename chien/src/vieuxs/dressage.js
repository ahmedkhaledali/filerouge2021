

import Footer from '../Composent/footer';
import Image from 'react-bootstrap/Image'
import Image1 from '../images/1.jpg'
import Modaldressage from '../Composent/modalchien'
import Navbare1 from '../Composent/Navbar1';
function Dressage() {
  return (
    <div >
      
      <Navbare1 />
      
      <div class="container-fluid">
        <div class="row">
<div class="col-md-6 p-4 ">
    <p class="hist-txt p-5" >Le dressage ou apprentissage du chien s’appuie sur différentes techniques qui ont évolué avec le temps et qui tiennent compte des besoins du chien et des objectifs de l’apprentissage. Le dressage du chiot est important car il est souvent synonyme de sécurité.</p>
</div>
<div class="col-md-6">
<Image src={Image1} class="img-hist"/>
</div>
        </div>
         <Modaldressage />
</div>

      <Footer />
    </div>
  );
}

export default Dressage;
