import {fetchChien} from '../requist'
import {fetchAddChien} from '../requist'

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

export const addChien=(nom,model,taille,critére,age,image,vaccin,date)=> async (dispatch) =>{
    try{
        const res=await fetchAddChien (nom,model,taille,critére,age,image,vaccin,date);
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



