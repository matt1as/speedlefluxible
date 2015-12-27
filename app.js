import Fluxible from 'fluxible';
import Application from './components/Application';
import ApplicationStore from './stores/ApplicationStore';
import RouteStore from './stores/RouteStore';
import ClassifiedStore from './stores/ClassifiedStore';
import ClassifiedsStore from './stores/ClassifiedsStore';
import CategoriesStore from './stores/CategoriesStore';

import injectTapEventPlugin from 'react-tap-event-plugin';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin

injectTapEventPlugin();

var fetchrPlugin = require('fluxible-plugin-fetchr');
var https = require('https');

// Setup bootstrap


// create new fluxible instance
const app = new Fluxible({
    component: Application
});

app.plug(fetchrPlugin({
    xhrPath: '/api'
}));

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(ClassifiedStore);
app.registerStore(ClassifiedsStore);
app.registerStore(CategoriesStore);


module.exports = app;
