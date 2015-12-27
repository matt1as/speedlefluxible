import React from 'react';

import { AppBar } from 'material-ui/lib';
var listCategories = require('../actions/listCategories');


class NavBar extends React.Component {


    render() {

      return (
        <AppBar title="Speedle" />
      );
    }

}

NavBar.defaultProps = {
    selected: 'home',
    links: {}
};

export default NavBar;
