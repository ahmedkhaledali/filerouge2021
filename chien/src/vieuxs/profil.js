import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Navbareuser from '../Composent/navbaruser'
import {signout} from '../action/auth'

export default function UserProfil (){
    const dispatch=useDispatch()
    const logout =()=> {dispatch(signout())}


    const auth = useSelector(state => state.data.token)
    useEffect(()=>{

    } )
    return (
        <div>
<Navbareuser/>
<div className="gga"> 
{auth.email}

<button onClick={logout}> out </button>
</div>
        </div>
    )
}