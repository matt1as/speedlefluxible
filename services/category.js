
'use strict';

var debug = require('debug')('Speedle:services/categories');

var request = require('superagent'),
  speedle_api_root = 'http://api.speedle.se/api/categories';


module.exports = {

    name: 'category',
    // at least one of the CRUD methods is required
    read: function(req, resource, params, config, callback) {
      // do the GET request
      var url
        debug( "Read");
        url = speedle_api_root ;
      }


      request
        .get(url)
        .end(function(err, res) {
          console.log(res.text);
          callback(err, JSON.parse(res.text));
        });
    }

    //create: function(req, resource, params, body, config, callback) {},
    //update: function(resource, params, body, config, callback) {},
    //delete: function(resource, params, config, callback) {}

};
