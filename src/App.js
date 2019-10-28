import React, { Component }from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import Pages
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

// Add Mdbootstrap Style  //
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'; 

//  Add Custom Style  //
import './App.css';

class  App extends Component {
  render(){return (
    <Router>  
          <Route exact path='/' component={ Home } />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/signup' component={ Signup } />
    </Router>

  )}
}

export default App;
