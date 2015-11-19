import React from 'react';
import { NavLink } from 'fluxible-router';



class Nav extends React.Component {



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

        var searchBox =
          <input type="text"  onKeyDown={this._onKeyDown}></input>
          ;

        return (
            <ul className="pure-menu pure-menu-open pure-menu-horizontal">
                {linkHTML}
                {searchBox}
            </ul>
        );
    }
    _onKeyDown() {
           if (event.keyCode === 13) {
               event.preventDefault();
               event.stopPropagation();

               var text = this.state.text.trim();
               if (text) {
                   this.context.executeAction(searchClassified, {
                       query: text
                   });
               }
               this.setState({text: ''});
           }
       }

}


Nav.defaultProps = {
    selected: 'home',
    links: {}
};

export default Nav;
