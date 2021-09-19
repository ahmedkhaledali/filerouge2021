import {fetchrace} from '../requist'
import {fetchAddrace} from '../requist'
import {deleterace} from '../requist'
import axios from "axios"


export function getrace() {
    return dispatch => {
        fetchrace()
        .then (races =>dispatch (
            {type: "GET_RACE_SUCCEDED",payload: races})
        )
        .catch(err=>dispatch( {
            type: "GET_RACE_FAILED",
            payload: err
          }))
    }

}

export const addrace=(id_client,couplerace,date_race,resultat)=> async (dispatch) =>{
    try{
        const res=await fetchAddrace (id_client,couplerace,date_race,resultat);
        dispatch ({
            type:"ADD_RACE_SUCCED",
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}


//delete


export const deletrace = (id)=> async (dispatch) => {
    try {
      await deleterace (id);
      dispatch({
        type:"DELETE_RACE_API",
        payload:id
    })
      console.log("delete")
      dispatch(getrace);
    } catch (error) {
      console.log(error);
    }
  };


// 
// update Menu
  export const updaterace = (id,id_client,couplerace,date_race,resultat) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:5003/app/updaterace/${id}`,{id_client,couplerace,date_race,resultat} ).then(res=> window.location.reload());
    
      dispatch({
        type:  "APP_UPDATE_RACE", 
        payload: res.data
      });
      console.log("superrr")
    } catch (error) {
      console.log(error);
    }
  };
