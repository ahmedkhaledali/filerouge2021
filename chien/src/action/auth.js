import axios from 'axios'
import jwt_decode from 'jwt-decode' 
import {fetchuser} from '../requist'
import {deleteUser} from '../requist'


export const login =(token)=> async(dispatch) =>{

    try{


     const res =  await  axios
     .post(`http://localhost:5003/app/signin`,token)
            if (res.status === 200){

                const {token} = res.data
                const result = jwt_decode(token)
                console.log(result)
                console.log(token)
                
                if(result.role === 'user'){
                    localStorage.setItem('token',token)

                    dispatch({
                        type:'LOGIN_SUCCESS',
                        payload:{
                            token 
                        }
    
                    })
                }
             }else{
                if(res.status === 400){
                    dispatch({
                        type:"LOGIN_FAILED",
                        payload:{error:res.data.error}
                    })
                }

            }

            console.log("login user")


    }
    catch (error) {
              console.log(error);
             }
}

export const isUserLoggedIn = () =>{
    return async dispatch =>{
        
        const result = localStorage.getItem('token')
        // const local=JSON.parse(localStorage.getItem('token'))
        if(result){
            const token = jwt_decode(result)
            
           dispatch({
                type:'LOGIN_SUCCESS',
                
                payload:{
                    token 
                    
                }
            })
        }else{
            dispatch({type:'LOGIN_FAILED',
                payload:{

                    error:'Failed to login'
                }
            })
        }
    }

}

export const signout = () =>{
    return async dispatch =>{
        localStorage.clear()
        dispatch({
            type:'LOGOUT_REQUEST'
        })
    }
}


export const getuser =()=> {
    return dispatch => {
        fetchuser()
        
        .then (user =>dispatch (
            {type: "GET_USER_SUCCEDED",payload:user})
        )
        .catch(err=>dispatch( {
            type: "GET_USER_FAILED",
            payload: err
          }))
    }

}

//delete

export const userdelete = (id)=> async (dispatch) => {
    try {
      await deleteUser (id).then(res=> window.location.reload());
      dispatch({
        type:"DELETE_CHIEN_API",
        payload:id
    })
      console.log("delete")
      dispatch(getuser);
    } catch (error) {
      console.log(error);
    }
  };


// 
// update user
  export const updateuser = (id,fullName,phone,adress,email,password,role) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:5003/app/upduser/${id}`,{fullName,phone,adress,email,password,role} ).then(res=> window.location.reload());
    
      dispatch({
        type:  "APP_UPDATE_USER", 
        payload: res.data
      });
      console.log("superrr")
    } catch (error) {
      console.log(error);
    }
  };
