import {fetchcoach} from '../requist'
import {fetchAddCoach} from '../requist'
import {deleteCoach} from '../requist'
import axios from "axios"


export function getcoach() {
    return dispatch => {
        fetchcoach()
        .then (coachs =>dispatch (
            {type: "GET_COACH_SUCCEDED",payload: coachs})
        )
        .catch(err=>dispatch( {
            type: "GET_COACH_FAILED",
            payload: err
          }))
    }

}

export const addcoach=(nom,prenom,mail,age,cin,experience,image)=> async (dispatch) =>{
    try{
        const res=await fetchAddCoach (nom,prenom,mail,age,cin,experience,image);
        dispatch ({
            type:"ADD_COACH_SUCCED",
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}


//delete


export const deletecoach = (id)=> async (dispatch) => {
    try {
      await deleteCoach (id);
      dispatch({
        type:"DELETE_COACH_API",
        payload:id
    })
      console.log("delete")
      dispatch(getcoach);
    } catch (error) {
      console.log(error);
    }
  };


// 
// update Menu
  export const updatecoach = (id,nom,prenom,mail,age,cin,experience,image) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:5003/app/updatecoach/${id}`,{nom,prenom,mail,age,cin,experience,image} ).then(res=> window.location.reload());
    
      dispatch({
        type:  "APP_UPDATE_COACH", 
        payload: res.data
      });
      console.log("superrr")
    } catch (error) {
      console.log(error);
    }
  };
