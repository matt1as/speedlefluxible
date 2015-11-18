/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';
var debug = require('debug')('Speedle:showListClassifieds');
var ClassifiedsStore = require('../stores/ClassifiedsStore');

function fetchClassifieds(context, payload, done) {
    debug('fetching classifieds');
    context.service.read('classified', {}, [], function (err, classifieds) {
        context.dispatch('RECEIVE_CLASSIFIEDS', classifieds);
        done();
    });

}

function searchClassifieds(context, payload, done) {
    debug('fetching classifieds');
    context.service.read('classified', { query:payload.query}, {}, function (err, classifieds) {
        context.dispatch('RECEIVE_CLASSIFIEDS', classifieds);
        done();
    });

}

module.exports = function (context, payload, done) {

    context.dispatch('LIST_CLASSIFIEDS');
    var classifiedsStore = context.getStore(ClassifiedsStore);

    if (Object.keys(classifiedsStore.getAll()).length === 0) {
        fetchClassifieds(context, payload, done);
    } else {
        debug('dispatching LIST_CLASSIFIEDS_END');
        context.dispatch('LIST_CLASSIFIEDS_END');
        done();
    }
};
