import Axios from "axios"
import { GET_CHIEN_API} from "./shared/apiURL"
import {ADD_CHIEN_API} from "./shared/apiURL"



//user
export const fetchChien=()=>
Axios.get(GET_CHIEN_API,{
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }).then(res=>res.data)


  export const fetchAddChien = (nom,model,taille,critére,age,image,vaccin,date) =>
  Axios.post(ADD_CHIEN_API,{nom,model,taille,critére,age,image,vaccin,date}).then(res=>res.data)


//

// export const deleteUser=(id)=> {
//   Axios.delete(`http://localhost:5002/app/${id}`).then(res=>res.data)
// }

// //


// //

// export const updUser=(id,nom,prenom,email,adress,image)=> {
//   Axios.put(`http://localhost:5002/app/${id}/update`,{nom,prenom,email,adress,image} ).then(res=>res.data).then(res=> window.location.reload());
// }


