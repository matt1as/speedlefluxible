/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';
var debug = require('debug')('Speedle:getClassified');
var ClassifiedStore = require('../stores/ClassifiedStore');

function fetchClassified(context, payload, done) {
    debug('fetching classifieds with id ' + payload.id);
    context.service.read('classified', {id:payload.id}, [], function (err, classified) {
        context.dispatch('RECEIVE_CLASSIFIED', classified);
        done();
    });

}

module.exports = function (context, payload, done) {

    context.dispatch('GET_CLASSIFIED');
    var classifiedStore = context.getStore(ClassifiedStore);
    fetchClassified(context, payload, done);

};
