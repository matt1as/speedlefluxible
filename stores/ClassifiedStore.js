
'use strict';
var debug = require('debug')('Speedle:ClassifiedStore');
var createStore = require('fluxible/addons').createStore;

var ClassifiedStore = createStore({
    storeName: 'ClassifiedStore',
    handlers: {
        'RECEIVE_CLASSIFIED': 'receiveClassified',
    },

    initialize: function () {
        this.classified = {};
    },

    receiveClassified: function (classified) {
        debug( "Received classified: " + JSON.stringify(classified));
        var self = this;
        self.classified = classified;
        self.emitChange();
    },


    get: function () {
        return this.classified;
    },

    dehydrate: function () {
        return {
            classified: this.classified,
        };
    },

    rehydrate: function (state) {
        this.classified = state.classified;
    }
});

module.exports = ClassifiedStore;
