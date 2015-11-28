import React from 'react';
import { NavLink } from 'fluxible-router';
import { NavItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Header } from 'react-bootstrap';




class NavBar extends React.Component {



    render() {
        const selected = this.props.selected;
        const links = this.props.links;


        const linkHTML = Object.keys(links).map((name) => {
            var className = '';
            var link = links[name];

            if (selected === name) {
                className = 'pure-menu-selected';
            }

            var li;
            if ( link.inMenu == true ) {
              li =   <li className={className} key={link.path}>
                    <NavLink routeName={link.page} activeStyle={{backgroundColor: '#eee'}}>{link.title}</NavLink>
                </li>
            } else {
              li = '';
            }

            return (
              <span>{li}</span>
            );
        });

        const linkNav = Object.keys(links).map((name => {
          var link = links[name];
          if(link.inMenu ) {
            return <NavItem eventKey={1} href={link.path}>{link.title}</NavItem>
          } else { return null };
        }))


        return (
          <div className="header header-blog">
            <Nav bsStyle="pills" activeKey={1} >
              {linkNav}
            </Nav>
          </div>


        );
    }

}

NavBar.defaultProps = {
    selected: 'home',
    links: {}
};

export default NavBar;
