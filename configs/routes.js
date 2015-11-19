var listClassifieds = require('../actions/listClassifieds');
var getClassified = require('../actions/getClassified');



export default {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        inMenu: true,
        handler: require('../components/Home')
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'About',
        inMenu: true,

        handler: require('../components/About'),

    },
    classifieds: {
        path: '/classifieds',
        method: 'get',
        page: 'classifieds',
        title: 'Classifieds',
        inMenu: true,
        handler: require('../components/Classifieds'),
        action: function (context, payload, done) {
          context.executeAction(listClassifieds, {}, done);
      }
    },
    classified: {
        path: '/classifieds/:id',
        method: 'get',
        page: 'classifieds',
        title: 'Classified',
        inMenu: false,
        handler: require('../components/Classified'),
        action: function (context, payload, done) {
          var pageId = payload.get('params').get('id');
          context.executeAction(getClassified, { id : pageId }, done);
      }

   }

};
