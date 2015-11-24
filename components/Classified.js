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
            <div className="thread-section">
                <ul className="thread-list">
                    <h1>{classified.name}</h1>
                    <img src={classified.thumbnails} width='640px'/>
                </ul>
                <ul class="list-inline post-meta">
                  <li><span class="fa fa-price"></span> Price: {classified.price}</li>
                  <li><span class="fa fa-phone"></span> Phone: {classified.phoneNumber}</li>
                  <li><span class="fa fa-email"></span> Email: {classified.email}</li>
                </ul>
                <div class="post-content">
                  {classified.description}
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
