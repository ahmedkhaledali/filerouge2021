import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Navbareuser from '../Composent/navbaruser'
import {signout, updateuser} from '../action/auth'
import Upduser from '../Composent/updateuser'

export default function UserProfil (){
    const dispatch=useDispatch()
    const logout =()=> {dispatch(signout())}


    const auth = useSelector(state => state.userlog.token)
    useEffect(()=>{

    } )
    return (
        <div>
<Navbareuser/>
<div className="gga"> 
{auth.email}
{auth.phone}
<Upduser id={auth._id} el={auth} />
<button onClick={logout}> out </button>
</div>
        </div>
    )
}