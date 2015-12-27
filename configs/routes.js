var listClassifieds = require('../actions/listClassifieds');
var getClassified = require('../actions/getClassified');

export default {
    home: {
        path: '/',
        method: 'get',
        page: 'classifieds',
        title: 'Classifieds',
        inMenu: true,
        handler: require('../components/Classifieds'),
        action: function (context, payload, done) {
          context.executeAction(listClassifieds, {}, done);
        }
    },

    privacyPolicy: {
        path: '/privacyPolicy',
        method: 'get',
        page: 'privacyPolicy',
        title: 'Privacy Policy',
        inMenu: true,
        handler: require('../components/privacyPolicy'),

    },

    termsOfService: {
        path: '/termsOfService',
        method: 'get',
        page: 'termsOfService',
        title: 'Terms of Service',
        inMenu: true,
        handler: require('../components/termsOfService'),

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
          var pageId = payload.params.id;
          context.executeAction(getClassified, { id : pageId }, done);
      }

   }

};
