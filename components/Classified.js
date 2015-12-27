import React from 'react';
import ClassifiedStore  from '../stores/ClassifiedStore';
import connectToStores  from 'fluxible-addons-react/connectToStores';

import { Row, Col } from 'react-bootstrap';
//Import statements:
const Card = require('material-ui/lib/card/card');
const CardActions = require('material-ui/lib/card/card-actions');
const CardExpandable = require('material-ui/lib/card/card-expandable');
const CardHeader = require('material-ui/lib/card/card-header');
const CardMedia = require('material-ui/lib/card/card-media');
const CardText = require('material-ui/lib/card/card-text');
const CardTitle = require('material-ui/lib/card/card-title');
const FloatingActionButton = require('material-ui/lib/floating-action-button');
const Phone = require('material-ui/lib/svg-icons/communication/phone')
const Email = require('material-ui/lib/svg-icons/communication/email')

class Classified extends React.Component {
    render() {
      var classified = this.props.classified;
        return (
        
          <Row>
            <Col md={4} className="hidden-xs hidden-sm">
              Nånting nånting
            </Col>
            <Col md={4} xs={12}>
              <Card>
                <CardMedia overlay={<CardTitle title={classified.name} subtitle={classified.price + " " + classified.currency}/>}>
                  <img src={classified.thumbnails[0]} />
                </CardMedia>
                <CardActions>
                <FloatingActionButton ><Phone/></FloatingActionButton>
                <FloatingActionButton href={"mailto:"+classified.email} linkButton={true} ><Email/></FloatingActionButton>
                      </CardActions>
                <CardText>
                <p>
                  <strong>Seller: {classified.ownerName}</strong>
                  </p>
                  {classified.description}
                </CardText>
              </Card>
            </Col>
            <Col md={4}  className="hidden-xs hidden-sm">
              Nånting nånting
            </Col>

          </Row>
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
