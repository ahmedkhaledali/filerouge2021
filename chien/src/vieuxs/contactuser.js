
import  Navbare1 from '../Composent/Navbar1';
import Footer from '../Composent/footer';
import Forme from '../Composent/contactfrom';
import SimpleMap from '../Composent/maps';
import Formecontactuser from '../Composent/contactfromuser';
import Navbareuser from '../Composent/navbaruser';
function Contactuser() {
  return (
    <div >
      
      <Navbareuser />
      <Formecontactuser />
  <SimpleMap />
      <Footer />
    </div>
  );
}

export default Contactuser;
