import axios from 'axios'

export const userLogin = (user) =>
  axios
    .post(`http://localhost:5003/app/signin`,{...user})