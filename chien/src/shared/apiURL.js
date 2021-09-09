
export const SERVER_BASE_API = "http://localhost:5003/app"

//chien

export const GET_CHIEN_API = `${SERVER_BASE_API}/getchien`
export const ADD_CHIEN_API = `${SERVER_BASE_API}/addchien`
export const UPDATE_CHIEN_API = `${SERVER_BASE_API}/updchien/:id`
export const DELETE_CHIEN_API = `${SERVER_BASE_API}/suppchien/:id`

//users

export const GET_USER_API = `${SERVER_BASE_API}/getuser`


//coach
export const GET_COACH_API = `${SERVER_BASE_API}/getcoach`
export const ADD_COACH_API = `${SERVER_BASE_API}/addcoach`
export const UPDATE_COACH_API = `${SERVER_BASE_API}/updatecoach/:id`
export const DELETE_COACH_API = `${SERVER_BASE_API}/suppcoach/:id`

//contact
export const GET_CONTACT_API = `${SERVER_BASE_API}/getcontact`
export const ADD_CONTACT_API = `${SERVER_BASE_API}/addcontact`
// export const UPDATE_CONTACT_API = `${SERVER_BASE_API}/updatecontact/:id`
export const DELETE_CONTACT_API = `${SERVER_BASE_API}/suppcontact/:id`
