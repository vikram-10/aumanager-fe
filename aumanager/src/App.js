import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbarcomp from './Components/Navbarcomp';
import routes from './routes';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Footer from './Components/Footer';


function App() {
  return (
<div>
<Navbarcomp/>
<Switch>
  <Route path={routes.login}>
    <Login/>
  </Route>
  <Route path={routes.signup}>
    <Signup/>
  </Route>
  <Route path={routes.home}>
     <Home/>
  </Route>
</Switch>
<Footer/>
</div>
  );
}

export default App;
