import React from 'react';
import { NavLink } from 'fluxible-router';
import { NavItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Header } from 'react-bootstrap';
import SearchBar from './SearchBar'

class NavBar extends React.Component {


    render() {
      return (
        <div>
        <div className="navbar navbar-default navbar-static-top" role="navigation">
          <div className="container">
            <div className="navbar-header">Speedle</div>
          </div>
        </div>
        <SearchBar/></div>
      );
    }

}

NavBar.defaultProps = {
    selected: 'home',
    links: {}
};

export default NavBar;
