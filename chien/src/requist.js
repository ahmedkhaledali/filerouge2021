import Axios from "axios"
import {GET_CHIEN_API} from "./shared/apiURL"
import {ADD_CHIEN_API} from "./shared/apiURL"
import {GET_USER_API} from "./shared/apiURL"
import {GET_COACH_API} from "./shared/apiURL"
import {ADD_COACH_API} from "./shared/apiURL"
import {GET_CONTACT_API} from "./shared/apiURL"
import {ADD_CONTACT_API} from "./shared/apiURL"
import {GET_FOYER_API} from "./shared/apiURL"
import {ADD_FOYER_API} from "./shared/apiURL"
import {GET_RACE_API} from "./shared/apiURL"
import {ADD_RACE_API} from "./shared/apiURL"



//chien
export const fetchChien=()=>
Axios.get(GET_CHIEN_API,{
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }).then(res=>res.data)


  export const fetchAddChien = (nom,model,taille,critére,age,image,vaccin,date) =>
  Axios.post(ADD_CHIEN_API,{nom,model,taille,critére,age,image,vaccin,date}).then(res=>res.data)


//

export const deleteChiens=(id)=> {
  Axios.delete(`http://localhost:5003/app/suppchien/${id}`).then(res=>res.data)
}

///////////////////////////////////////////////////////////////////////////

///user
export const fetchuser=()=>
Axios.get(GET_USER_API,{
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }).then(res=>res.data)

///deleteuser

export const deleteUser=(id)=> {
  Axios.delete(`http://localhost:5003/app/suppuser/${id}`).then(res=>res.data)
}

//


//coach
export const fetchcoach=()=>
Axios.get(GET_COACH_API,{
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }).then(res=>res.data)

//addcoach
  export const fetchAddCoach= (nom,prenom,mail,age,cin,experience,image) =>
  Axios.post(ADD_COACH_API,{nom,prenom,mail,age,cin,experience,image}).then(res=>res.data)


//deletecoach

export const deleteCoach=(id)=> {
  Axios.delete(`http://localhost:5003/app/suppcoach/${id}`).then(res=>res.data)
}



//getContact
export const fetchContact=()=>
Axios.get(GET_CONTACT_API,{
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }).then(res=>res.data)

//deletecontcat
export const deleteContact=(id)=> {
  Axios.delete(`http://localhost:5003/app/suppcontact/${id}`).then(res=>res.data)
}
//Addcontact
export const fetchAddContact = (mail,commentaire) =>
  Axios.post(ADD_CONTACT_API,{mail,commentaire}).then(res=>res.data)




  //Getfoyer

  export const fetchfoyer=()=>
  Axios.get(GET_FOYER_API,{
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }).then(res=>res.data)
  
  //Addfoyer
    export const fetchAddfoyer = (nom,model,taille,critére,age,image,vaccin,date,datepre,datefin) =>
    Axios.post(ADD_FOYER_API,{nom,model,taille,critére,age,image,vaccin,date,datepre,datefin}).then(res=>res.data)
  
  
  //suppfoyer
  
  export const deletefoyer=(id)=> {
    Axios.delete(`http://localhost:5003/app/suppfoyer/${id}`).then(res=>res.data)
  }
  

  //Getrace

  export const fetchrace=()=>
  Axios.get(GET_RACE_API,{
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }).then(res=>res.data)
  
  //Addrace
    export const fetchAddrace = (nom,model,taille,critére,age,image,vaccin,date,couplerace) =>
    Axios.post(ADD_RACE_API,{nom,model,taille,critére,age,image,vaccin,date,couplerace}).then(res=>res.data)
  
  
  //supprace
  
  export const deleterace=(id)=> {
    Axios.delete(`http://localhost:5003/app/supprace/${id}`).then(res=>res.data)
  }
  