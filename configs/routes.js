var listClassifieds = require('../actions/listClassifieds');


export default {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        handler: require('../components/Home')
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'About',
        handler: require('../components/About'),

    },
    classifieds: {
        path: '/classifieds',
        method: 'get',
        page: 'classifieds',
        title: 'Classifieds',
        handler: require('../components/Classified'),
        action: function (context, payload, done) {
          context.executeAction(listClassifieds, {}, done);
      }
    },
};
