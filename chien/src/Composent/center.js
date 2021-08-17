import React, { useState} from 'react'
import "react-bootstrap";
import "../App.css";
import "video.js/dist/video-js.css";
import Image from 'react-bootstrap/Image'
import Logo from '../LOGO/logo6.png'


const ReadMore = ({ children }) => {
const text = children;
const [isReadMore, setIsReadMore] = useState(true);
const toggleReadMore = () => {
	setIsReadMore(!isReadMore);
};
return (
	<p className="text">
	{isReadMore ? text.slice(0, 150) : text}
	<span onClick={toggleReadMore} className="read-or-hide">
		{isReadMore ? "...read more" : " show less"}
	</span>
	</p>
);
};

const Center = () => {

  
      return (
        <div class="row p-5">
            <p class="titre-txt " style={{textAlign:'center'}}>Découvrire notre center</p>
            <div class="col-md-4 p-5">
            <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/m4OHlWmMMc4?start=37"
             title="YouTube video player" 
             frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
    </div>
    <div class="col-md-2"></div>

	
	<div class="col-md-6 txt ">
	
		<p class="hist-txt p-5"><ReadMore> Tzul Center est un centre d'éducation et de bien-être du chien d'un genre nouveau. 
 Au sein d'infrastructures de qualité, nous vous accueillons , au cœur de la nature. 
 Chacun de nos services est assuré et encadré par un ou plusieurs professionnels.

 Nous souhaitons nous démarquer par notre esprit positif 
 et notre approche qualitative dans l'ensemble des domaines touchant au chien.
  Notre spécificité réside dans notre approche globale du chien,
   ce qui nous différencie nettement des approches classiques.
  	</ReadMore>
 </p>

   <iframe width="250" height="150" src="https://www.youtube.com/embed/jIhobThpcX8?controls=0&amp;start=49" 
  title="YouTube video player" frameborder="0" allow="accelerometer;
   autoplay; clipboard-write; encrypted-media; 
  gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="250" height="150" src="https://www.youtube.com/embed/w2TKiFiwsaI?controls=0&amp;start=49" class="ms-5"
title="YouTube video player" frameborder="0" allow="accelerometer;
 autoplay; clipboard-write; encrypted-media;
 gyroscope; picture-in-picture" allowfullscreen></iframe>


	</div>
	</div>
);
};

export default Center;




















