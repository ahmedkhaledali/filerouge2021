import {fetchfoyer} from '../requist'
import {fetchAddfoyer} from '../requist'
import {deletefoyer} from '../requist'
import axios from "axios"


export function getfoyer() {
    return dispatch => {
        fetchfoyer()
        .then (foyers =>dispatch (
            {type: "GET_FOYER_SUCCEDED",payload: foyers})
        )
        .catch(err=>dispatch( {
            type: "GET_FOYER_FAILED",
            payload: err
          }))
    }

}

export const addfoyer=(nom,model,taille,critére,age,image,vaccin,date,datepre,datefin)=> async (dispatch) =>{
    try{
        const res=await fetchAddfoyer (nom,model,taille,critére,age,image,vaccin,date,datepre,datefin);
        dispatch ({
            type:"ADD_FOYER_SUCCED",
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}


//delete


export const deletfoyer = (id)=> async (dispatch) => {
    try {
      await deletefoyer (id);
      dispatch({
        type:"DELETE_FOYER_API",
        payload:id
    })
      console.log("delete")
      dispatch(getfoyer);
    } catch (error) {
      console.log(error);
    }
  };


// 
// update Menu
  export const updatefoyer = (id,nom,model,taille,critére,age,image,vaccin,date,datepre,datefin) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:5003/app/updatefoyer/${id}`,{nom,model,taille,critére,age,image,vaccin,date,datepre,datefin} ).then(res=> window.location.reload());
    
      dispatch({
        type:  "APP_UPDATE_FOYER", 
        payload: res.data
      });
      console.log("superrr")
    } catch (error) {
      console.log(error);
    }
  };
