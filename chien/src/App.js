import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Acceuil from './vieuxs/Accuiel';
import Contact from './vieuxs/contact';
import Dashborad from './vieuxs/dashbord';
import Dressage from './vieuxs/dressage';
function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Switch>
        <Route exact path="/"><Acceuil/></Route>
        <Route path="/contact"><Contact/></Route>
        {/* <Route path="/Shop"><Shop/></Route> */}
        <Route exact path="/admin"><Dashborad/></Route>
        <Route exact path="/dressage"><Dressage/></Route>
       
        
      </Switch>
    </BrowserRouter>


  
    </div>
  );
}

export default App;
