import { useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import { Login } from './Components/Authentication/Login/Login';
import { Signup } from './Components/Authentication/Signup/Signup';
import { Checkout } from './Components/Home/Checkout/Checkout';
import { Header } from './Components/Home/Header/Header';
import { Home } from './Components/Home/Home/Home';
import { useStateValue } from './Components/Home/StateProvider';
import { auth } from './firebase';

function App() {
const[{},dispatch]=useStateValue()
  useEffect(()=>{
   auth.onAuthStateChanged(authUser=>{
     console.log('The user is>>' ,authUser)
     if(authUser){
       dispatch({
         type:'SET_USER',
        user:authUser
       })
     }else{
       dispatch({
         type:'SET_USER',
         user:null
       })
     }
   })
  },[])
  return (
    <Router>
    <div className="App">
   
     <Switch>
       <Route exact path="/">
       <Header/>
      <Home/>
       </Route>
       <Route path="/checkout">
       <Header/>
       <Checkout/>
       </Route>
       <Route path="/login">
         <Login/>
       </Route>
       <Route path="/signup">
         <Signup/>
       </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
