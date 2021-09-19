const dressage=  {
    datadressage : []

  }

export  const DressageReducer = (state = dressage, action ) => {
    const {type,payload}= action;
    switch(action.type) {
        case   "GET_DRESSAGE_SUCCEDED":
            return {
                ...state,
                datadressage: payload
              
              };
              case  "ADD_DRESSAGE_API":
                return{
                    ...state,
                    datadressage:[ ...state.datadressage, payload]
                }
                case "DELETE_DRESSAGE_API":
                  return {
                    ...state,
                    datadressage: state.datadressage.filter(
                      data => data._id !== payload
                    )
                    };
                }
                

console.log('run', state)
return state
};

