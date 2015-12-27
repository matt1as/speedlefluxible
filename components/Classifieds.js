import React from 'react';
import ClassifiedsStore  from '../stores/ClassifiedsStore';
import connectToStores  from 'fluxible-addons-react/connectToStores';
import { NavLink } from 'fluxible-router';
import SearchBar from './SearchBar'
import { GridList, GridTile, IconButton, StarBorder } from 'material-ui/lib/grid-list';


class Classifieds extends React.Component {
    render() {
        var classifieds = this.props.classifieds.map(function(classified) {
          return (
            <NavLink routeName="classified" navParams={{id: classified._id}}>
            <GridTile
                title={classified.name}
                subtitle={<span>Price <b>{classified.price} {classified.currency}</b></span>}>
              <img src={classified.thumbnails[0]} />
            </GridTile>
          </NavLink>
          );
        }, this);

        return (
          <GridList
            cellHeight={200}
            style={{width: 320, height: 640, overflowY: 'auto'}}
            >
            {
              classifieds
            }
          </GridList>
        );
    }

};

module.exports = connectToStores(
    Classifieds,
    [ClassifiedsStore],
    function (context, props) {
        return {
            classifieds: context.getStore(ClassifiedsStore).getAll(),
        }
    }
);
