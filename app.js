import Fluxible from 'fluxible';
import Application from './components/Application';
import ApplicationStore from './stores/ApplicationStore';
import RouteStore from './stores/RouteStore';
import ClassifiedStore from './stores/ClassifiedStore';

var fetchrPlugin = require('fluxible-plugin-fetchr');
var https = require('https');


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

module.exports = app;
