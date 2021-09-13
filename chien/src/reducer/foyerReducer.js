const foyer=  {
    datafoyer : []

  }

export  const FoyerReducer = (state = foyer, action ) => {
    const {type,payload}= action;
    switch(action.type) {
        case   "GET_FOYER_SUCCEDED":
            return {
                ...state,
                datafoyer: payload
              
              };
              case  "ADD_FOYER_API":
                return{
                    ...state,
                    datafoyer:[ ...state.datafoyer, payload]
                }
                case "DELETE_FOYER_API":
                  return {
                    ...state,
                    datafoyer: state.datafoyer.filter(
                      data => data._id !== payload
                    )
                    };
                }
                

console.log('run', state)
return state
};

