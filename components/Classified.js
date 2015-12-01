/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import ClassifiedStore  from '../stores/ClassifiedStore';
import connectToStores  from 'fluxible-addons-react/connectToStores';
import { NavLink } from 'fluxible-router';

var debug = require('debug')('Speedle:component/classified');


class Classified extends React.Component {
    render() {
      var classified = this.props.classified;
      debug( "Rendering classified with id " + classified._id);
        return (
          <div className="blog container">
            <div className="row">
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
            </div>
          </div>
        );
    }

};

module.exports = connectToStores(
    Classified,
    [ClassifiedStore],
    function (context, props) {

        return {
            classified: context.getStore(ClassifiedStore).get(),
        }
    }
);
