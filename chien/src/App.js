


import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Acceuil from './vieuxs/Accuiel';
import Contact from './vieuxs/contact';
import Dashborad from './vieuxs/dashbord';
import Dressage from './vieuxs/dressage';
import Dashboard from './vieuxs/Vdashboard';
import Nservice from './vieuxs/nosservice';
import  LoginForm from './vieuxs/home'
import RegisterUserForm from './vieuxs/registre'
import UserProfil from './vieuxs/profil'
import {useEffect} from 'react'
import AOS from 'aos';
import {useSelector,useDispatch} from 'react-redux'
import {isUserLoggedIn} from './action/auth'
import Foyer from './vieuxs/foyer';
import Race from './vieuxs/race';

function App() {

  const dispatch = useDispatch()
  const auth = useSelector(state=>state.data)
  useEffect(()=>{
    if(!auth.authenticate){
      dispatch(isUserLoggedIn())
    }
  } ,[])
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);


  return (
    <div >
      
      <BrowserRouter>
      <Switch>
        <Route exact path="/"><Acceuil/></Route>
        <Route path="/contact"><Contact/></Route>
        <Route exact path="/admin"><Dashborad/></Route>
        <Route exact path="/dressage"><Dressage/></Route>
        <Route exact path="/service"><Nservice/></Route>
        <Route exact path="/connexion">< LoginForm/></Route>
        <Route exact path="/register">< RegisterUserForm/></Route>
        <Route exact path="/profil"><UserProfil/></Route>
        <Route exact path="/foyer"><Foyer/></Route>
        <Route exact path="/race"><Race/></Route>
       
        
      </Switch>
    </BrowserRouter>


  
    </div>
  );
}

export default App;
