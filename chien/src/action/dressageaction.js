import {fetchdressage} from '../requist'
import {fetchAdddressage} from '../requist'
import {deletedressage} from '../requist'
import axios from "axios"


export function getdressage() {
    return dispatch => {
        fetchdressage()
        .then (dressages =>dispatch (
            {type: "GET_DRESSAGE_SUCCEDED",payload: dressages})
        )
        .catch(err=>dispatch( {
            type: "GET_DRESSAGE_FAILED",
            payload: err
          }))
    }

}

export const adddressage=(id_client,date_dressage,resultat)=> async (dispatch) =>{
    try{
        const res=await fetchAdddressage (id_client,date_dressage,resultat);
        dispatch ({
            type:"ADD_DRESSAGE_SUCCED",
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}


//delete


export const deletdressage = (id)=> async (dispatch) => {
    try {
      await deletedressage (id);
      dispatch({
        type:"DELETE_DRESSAGE_API",
        payload:id
    })
      console.log("delete")
      dispatch(getdressage);
    } catch (error) {
      console.log(error);
    }
  };


// 
// update Menu
  export const updatedressage = (id,id_client,date_dressage,resultat) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:5003/app/updatedressage/${id}`,{id_client,date_dressage,resultat} ).then(res=> window.location.reload());
    
      dispatch({
        type:  "APP_UPDATE_DRESSAGE", 
        payload: res.data
      });
      console.log("superrr")
    } catch (error) {
      console.log(error);
    }
  };
