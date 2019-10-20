import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'semantic-ui-react';
import NavMenuPoint from './NavMenu.jsx';

class Navbar extends Component{
  render(){
    return(
      <header>
        <ul id="navbarButtons">
          <NavMenuPoint/>
        </ul>
      </header>
    )
  }
}

export default Navbar;
