import {fetchChien} from '../requist'
import {fetchAddChien} from '../requist'
import {deleteChiens} from '../requist'
import {updateChiens} from '../requist'
import axios from "axios"


export function getchien() {
    return dispatch => {
        fetchChien()
        .then (chiens =>dispatch (
            {type: "GET_CHIEN_SUCCEDED",payload: chiens})
        )
        .catch(err=>dispatch( {
            type: "GET_CHIEN_FAILED",
            payload: err
          }))
    }

}

export const addChien=(nom,model,taille,critére,age,image,vaccin,date,id_client)=> async (dispatch) =>{
    try{
        const res=await fetchAddChien (nom,model,taille,critére,age,image,vaccin,date,id_client);
        dispatch ({
            type:"ADD_CHIEN_SUCCED",
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}


//delete


export const deletechien = (id)=> async (dispatch) => {
    try {
      await deleteChiens (id);
      dispatch({
        type:"DELETE_CHIEN_API",
        payload:id
    })
      console.log("delete")
      dispatch(getchien);
    } catch (error) {
      console.log(error);
    }
  };


// 
// update Menu
  export const updatechien = (id,nom,model,taille,critére,age,image,vaccin,date,) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:5003/app/updatechien/${id}`,{nom,model,taille,critére,age,image,vaccin,date} ).then(res=> window.location.reload());
    
      dispatch({
        type:  "APP_UPDATE_CHIEN", 
        payload: res.data
      });
      console.log("superrr")
    } catch (error) {
      console.log(error);
    }
  };
