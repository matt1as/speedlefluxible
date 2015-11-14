
'use strict';
var createStore = require('fluxible/addons').createStore;

var ClassifiedStore = createStore({
    storeName: 'ClassifiedStore',
    handlers: {
        'RECEIVE_CLASSIFIEDS': 'receiveClassifieds',
    },
    initialize: function () {
        this.classifieds = [];
        this.sortedByDate = [];
    },
    receiveClassifieds: function (classifieds) {
        var self = this;
        self.classifieds = classifieds;
        self.emitChange();
    },

    getAll: function () {
        return this.classifieds;
    },
    get: function (id) {
        return this.classified[id];
    },

    dehydrate: function () {
        return {
            classifieds: this.classifieds,

        };
    },
    rehydrate: function (state) {
        this.classified = state.classified;
    }
});


module.exports = ClassifiedStore;
