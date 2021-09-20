import "react-bootstrap";
import "../App.css";
import Image from 'react-bootstrap/Image'
import Image1 from '../images/1.jpg'


function Histoire() {
  return (
    <div class="container-fluid">
        <div class="row">
<div class="col-md-6">
<Image src={Image1}  class="img-hist img-fluid"/>
</div>
<div class="col-md-6 p-4 histoire">
    <p class="titre-txt">Notre Histoire</p>
    <p class="hist-txt" >Nous faisons du toilettage depuis de nombreuses années maintenant 
        et nous aimons chaque partie de notre travail! 
        Nous offrons un environnement très chaleureux et convivial
         pour vos animaux de compagnie.
          Notre équipe professionnelle a veillé à ce que votre animal de compagnie 
          reçoive toujours le plus haut niveau de soins, 
        car nous traitons tous les animaux de compagnie comme s'ils étaient les nôtres !</p>
</div>
        </div>
    </div>
  );
}

export default Histoire;
