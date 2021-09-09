const contact =  {
    datacontact : []

  }

export  const ContactReducer = (state = contact, action ) => {
    const {type,payload}= action;
    switch(action.type) {
        case   "GET_CONTACT_SUCCEDED":
            return {
                ...state,
                datacontact: payload
              
              };
              case  "ADD_CONTACT_API":
                return{
                    ...state,
                    datacontact:[ ...state.datas, payload]
                }
                case "DELETE_CONTACT_API":
                  return {
                    ...state,
                    datacontact: state.datacontact.filter(
                      data => data._id !== payload
                    )
                    };
                }
                

console.log('run', state)
return state
};

