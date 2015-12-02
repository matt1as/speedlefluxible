import React from 'react';
import ClassifiedsStore  from '../stores/ClassifiedsStore';
import connectToStores  from 'fluxible-addons-react/connectToStores';
import { NavLink } from 'fluxible-router';
import SearchBar from './SearchBar'


class Classifieds extends React.Component {
    render() {
        var classifieds = this.props.classifieds.map(function(classified) {
          return (
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 nopadding" key={classified._id}>
                  <div className="panel panel-default">
                      <div className="panel-heading">
                        <h3><NavLink routeName="classified" navParams={{id:classified._id}}>{classified.name}</NavLink></h3>
                      </div>
                      <div className="panel-body">
                        <p><img src={classified.thumbnails[0]} className="list-image"/></p>
                        <p><strong>Contact:</strong> {classified.ownerName}</p>
                        <p>{classified.description}</p>
                      </div>
                  </div>
              </div>
          );

        }, this);

        return (
            <div className="blog container">
              <div className="row">
                <SearchBar/>
              </div>
              <div className="row">
                {classifieds}
              </div>
            </div>
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
