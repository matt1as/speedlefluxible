import React from 'react';
import ApplicationStore from '../stores/ApplicationStore';

class Html extends React.Component {
    render() {
        return (
            <html>
            <head>
                <meta charSet="utf-8" />
                <title>{this.props.context.getStore(ApplicationStore).getPageTitle()}</title>
                <meta name="viewport" content="width=device-width, user-scalable=no" />

                <link rel="stylesheet" href="/public/css/Velocity/assets/plugins/bootstrap/css/bootstrap.min.css" />

                <link rel="stylesheet" href="/public/css/Velocity/assets/plugins/font-awesome/css/font-awesome.css"/>
                <link rel="stylesheet" href="/public/css/Velocity/assets/plugins/flexslider/flexslider.css"/>

                <link id="theme-style" rel="stylesheet" href="/public/css/styles.css"/>
            </head>
            <body>
                <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
            </body>
            <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
            <script src={'/public/js/' + this.props.clientFile}></script>

            </html>
        );
    }
}

export default Html;
