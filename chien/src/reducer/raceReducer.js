const race=  {
    datarace : []

  }

export  const RaceReducer = (state = race, action ) => {
    const {type,payload}= action;
    switch(action.type) {
        case   "GET_RACE_SUCCEDED":
            return {
                ...state,
                datarace: payload
              
              };
              case  "ADD_RACE_API":
                return{
                    ...state,
                    datarace:[ ...state.datarace, payload]
                }
                case "DELETE_RACE_API":
                  return {
                    ...state,
                    datarace: state.datarace.filter(
                      data => data._id !== payload
                    )
                    };
                }
                

console.log('run', state)
return state
};

