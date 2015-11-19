/*globals document*/

import React from 'react';
import NavBar from './NavBar';
import ApplicationStore from '../stores/ApplicationStore';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import { handleHistory } from 'fluxible-router';
import { Row } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';

class Application extends React.Component {
    render() {
        var Handler = this.props.currentRoute.handler;

        return (

            <Grid>
            <PageHeader>
              <NavBar selected={this.props.currentPageName} links={this.props.pages} />
            </PageHeader>
              <Row className = "show-grid">
                <Col xs={12} md={8}>

                  <Handler/>
                </Col>
              </Row>
            </Grid>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        const newProps = this.props;
        if (newProps.pageTitle === prevProps.pageTitle) {
            return;
        }
        document.title = newProps.pageTitle;
    }
}

export default handleHistory(provideContext(connectToStores(
    Application,
    [ApplicationStore],
    function (context, props) {
        var appStore = context.getStore(ApplicationStore);
        return {
            currentPageName: appStore.getCurrentPageName(),
            pageTitle: appStore.getPageTitle(),
            pages: appStore.getPages()
        };
    }
)));
