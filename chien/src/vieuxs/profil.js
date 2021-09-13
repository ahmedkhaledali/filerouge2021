import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Navbareuser from '../Composent/navbaruser'
import {signout,isUserLoggedIn} from '../action/auth'
import Upduser from '../Composent/updateuser'

export default function UserProfil (){
    const logout =()=> {window.location.reload(dispatch(signout()))}
    const dispatch=useDispatch()
    const auth = useSelector(state => state.userlog.token)
    useEffect(()=>{
        dispatch(isUserLoggedIn())
    } )
  
    return (
        <div>
<Navbareuser/>
<p className="t-dressage">Mon Profil</p>
<div className="container">
<div className="row justify-content-center">
<button onClick={logout}> out </button>
<div className="txt-get-user"> 
<p>votre Id:{auth._id}</p><br/>
<p>Nom :{auth.fullName}</p> <br/>
<p>adress :{auth.adress}</p> <br/>
<p>email : {auth.email}</p> <br/>
<p>phone: {auth.phone}</p> <br/>
<p>role:{auth.role}</p> <br/>
<Upduser id={auth._id} el={auth} />
</div>
</div>
</div>
        </div>
    )
}