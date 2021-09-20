

import Footer from '../Composent/footer';
import Image from 'react-bootstrap/Image'
import Image1 from '../images/1.jpg'
import Modaldressage from '../Composent/modaledressage'
import Navbare1 from '../Composent/Navbar1';
import {getcoach} from "../action/coachaction"
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react';
import Navbareuser from '../Composent/navbaruser';
function Dressageuser() {
 //getcoach
  const coachs = useSelector(state=>state.coach)
  const dispatch = useDispatch()
  useEffect(() => {
     dispatch(getcoach());
   },[]);
   console.log(coachs, "did we ?");
 
  return (
    <div >
      
      <Navbareuser />

      <p className="t-dressage">Dressage</p>
      <div class="container-fluid">
        <div class="row bg-dressage">
<div className="col-md-6">
<p class="hist-txt1 " >Les chiens ne pensent pas comme les humains : 
ils obéissent aux codes de communication et d’appréhension du monde de leur espèce.
 S’ils ne reçoivent pas une éducation appropriée, 
 ils ne manqueront pas de développer des comportements en inadéquation avec
  ceux que leurs maîtres attendent d’un animal de compagnie.
   Mais si elle est mise en œuvre pour inculquer des règles au chien,
    une éducation appropriée doit aussi lui fournir un environnement sécurisant 
    (évitant ainsi des réactions intempestives, pouvant aller jusqu’à l’agressivité,
     liées à l’anxiété). Elle implique que ses maîtres, et de façon générale tous les humains
      de son entourage,
 le respecte dans son intégrité et ses peurs.</p>
</div>
  </div>
  <p className="d-Entraineur">Nos Entraîneurs en dressage </p>
   
   
   <div class="w3-container dr-bg">
     <div className="row justify-content-around">
   {coachs.datacoach.map((el)=>(  
  <div class="card shadow p-3 mb-5  rounded card-dres" style={{width:"18rem",marginTop:"17%"}}>
    <img src={el.image} alt="Alps" className="card-img-top" />
    <div class="card-body dr-coach">
    <p>Nom :{el.nom}</p> 
<p>Prenom :{el.prenom}</p>  
 <p>Experience :{el.experience}</p> <br/>
 
    </div>
  </div>
  ))}
   </div>
</div>

   
   
   
   
   
        <Modaldressage />
</div>

<div className="mt-4">
<Footer />
</div>
 


    </div>
  );
}

export default Dressageuser;
