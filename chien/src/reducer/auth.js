


 const initialState = { dataClient:[] }
   export const reducerClient=(state =initialState ,action)=>
   {     const {type,payload}= action 
       switch(type){
                    case "GET_USER_SUCCEDED":
                                 return{ 
                                          ...state, 
                                                      dataClient:payload,
                                                             };

                                                             case "DELETE_USER_API":
                  return {
                    ...state,
                    dataClient: state.dataClient.filter(
                      data => data._id !== payload
                    )
                    };
                                                                      } 
                                                                    return state }






