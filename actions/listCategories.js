/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';
var debug = require('debug')('Speedle:showListClassifieds');
var ClassifiedsStore = require('../stores/ClassifiedsStore');

function fetchCategories(context, payload, done) {
    debug('fetching categories');
    context.service.read('categories', {}, [], function (err, categories) {
        context.dispatch('RECEIVE_CATEGORIES', classifieds);
        done();
    });
}

module.exports = function (context, payload, done) {
    context.dispatch('LIST_CATEGORIES');
    debug( JSON.stringify(payload));
    var categoriesStore = context.getStore(CategoriesStore);
    fetchClassifieds(context, payload, done);

};
