import {fetchContact} from '../requist'
import {deleteContact} from '../requist'
import {fetchAddContact} from '../requist'
import axios from "axios"


export function getcontact() {
    return dispatch => {
        fetchContact()
        .then (contacts =>dispatch (
            {type: "GET_CONTACT_SUCCEDED",payload: contacts})
        )
        .catch(err=>dispatch( {
            type: "GET_CONTACT_FAILED",
            payload: err
          }))
    }

}


//add 

export const addContact=(mail,commentaire)=> async (dispatch) =>{
    try{
        const res=await fetchAddContact (mail,commentaire);
        dispatch ({
            type:"ADD_CONTACT_SUCCED",
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}


//delete


export const deletecontact = (id)=> async (dispatch) => {
    try {
      await deleteContact (id);
      dispatch({
        type:"DELETE_CONTACT_API",
        payload:id
    })
      console.log("delete")
      dispatch(getcontact);
    } catch (error) {
      console.log(error);
    }
  };


// 
