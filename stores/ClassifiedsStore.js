
'use strict';
var debug = require('debug')('Speedle:ClassifiedsStore');
var createStore = require('fluxible/addons').createStore;

var ClassifiedsStore = createStore({
    storeName: 'ClassifiedsStore',
    handlers: {
        'RECEIVE_CLASSIFIEDS': 'receiveClassifieds',
    },

    initialize: function () {
        this.classifieds = [];
        this.sortedByDate = [];
    },

    receiveClassifieds: function (classifieds) {
        debug( "Received classifieds: " + JSON.stringify(classifieds));
        var self = this;
        self.classifieds = classifieds;
        self.emitChange();
    },

    getAll: function () {
        return this.classifieds;
    },

    dehydrate: function () {
        return {
            classifieds: this.classifieds,
        };
    },

    rehydrate: function (state) {
        this.classifieds = state.classifieds;
    }
});

module.exports = ClassifiedsStore;
