
import  Navbare from '../Composent/Navbar';
import Cover from '../Composent/cover';
import Histoire from '../Composent/histoire'
import Center from '../Composent/center'
import Service from '../Composent/service';
import Temoi from '../Composent/temoi'
import Footer from '../Composent/footer';
import Chiens from '../Composent/chien';
import Navbareuser from '../Composent/navbaruser';
function Acceuiluser() {
  return (
    <div >
      
      <Navbareuser />
      <Cover />
      <Histoire />
      <Center />
      <Service />
      <Temoi />
      <Chiens />
      <div className="mt-4">
<Footer />
</div>
 
    </div>
  );
}

export default Acceuiluser;
