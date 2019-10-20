// Stores react routes to navigate between pages
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Home from './Home';
import Navbar from './HeadComponent/Navbar';

class App extends Component{
  render(){
    return(
        <div>
        <Home/>
        </div>
    )
  }
}

export default App;
