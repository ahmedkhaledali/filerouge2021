
import  Navbare from '../Composent/Navbar';
import Cover from '../Composent/cover';
import Histoire from '../Composent/histoire'
import Center from '../Composent/center'
import Service from '../Composent/service';
import Temoi from '../Composent/temoi'
import Footer from '../Composent/footer';
function Acceuil() {
  return (
    <div >
      
      <Navbare />
      <Cover />
      <Histoire />
      <Center />
      <Service />
      <Temoi />
      <Footer />
    </div>
  );
}

export default Acceuil;
