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
import ClassifiedsStore  from '../stores/ClassifiedsStore';
import connectToStores  from 'fluxible-addons-react/connectToStores';
import { NavLink } from 'fluxible-router';
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'

class Classifieds extends React.Component {
    render() {
        var classifieds = this.props.classifieds.map(function(classified) {
            return (
              <article className="post col-md-4 col-sm-6 col-xs-12">
                <div className="post-inner">
                  <figure className="post-thumb">
                  <img className="img-responsive" src={classified.images} />

                  </figure>
                </div>
              </article>
            );
        }, this);

        return (
            <div className="blog container">
            <div className="row">>

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
