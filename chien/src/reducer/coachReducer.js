const coach =  {
    datacoach : []

  }

export  const CoachReducer = (state = coach, action ) => {
    const {type,payload}= action;
    switch(action.type) {
        case   "GET_COACH_SUCCEDED":
            return {
                ...state,
                datacoach: payload
              
              };
              case  "ADD_COACH_API":
                return{
                    ...state,
                    datacoach:[ ...state.datas, payload]
                }
                case "DELETE_COACH_API":
                  return {
                    ...state,
                    datacoach: state.datacoach.filter(
                      data => data._id !== payload
                    )
                    };
                }
                

console.log('run', state)
return state
};

