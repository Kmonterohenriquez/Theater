import React, { Component }from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import Pages
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Movie from './Components/Movie'

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
          {/* <Route path ='/movie/:id' component = {Movie} /> */}
          <Route path='/movie/:id' render={props => <Movie {...props}/>} />
    </Router>

  )}
}

export default App;
