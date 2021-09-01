import axios from 'axios'
import jwt_decode from 'jwt-decode' 


export const login =(token)=> async(dispatch) =>{

    try{


     const res =  await  axios
     .post(`http://localhost:5003/app/signin`,token)
            if (res.status === 200){

                const {token} = res.data
                const result = jwt_decode(token)
                console.log(token)
                localStorage.setItem('token',token)
                
                if(result.role === 'user'){
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

            console.log("payload")


    }
    catch (error) {
              console.log(error);
             }
}

export const isUserLoggedIn = () =>{
    return async dispatch =>{
        
        const result = localStorage.getItem('token')
        
        if(result){
            const token = jwt_decode(result)
            // window.location.reload()
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



