const chien =  {
    datas : []

  }

export  const ChienReducer = (state = chien, action ) => {
    const {type,payload}= action;
    switch(action.type) {
        case   "GET_CHIEN_SUCCEDED":
            return {
                ...state,
                datas: payload
              
              };
              case  "ADD_CHIEN_API":
                return{
                    ...state,
                    datas:[ ...state.datas, payload]
                }
                }
                

console.log('run', state)
return state
};

