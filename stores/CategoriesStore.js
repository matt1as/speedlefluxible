
'use strict';
var debug = require('debug')('Speedle:CategoryStore');
var createStore = require('fluxible/addons').createStore;

var CategoriesStore = createStore({
    storeName: 'CategoryStore',
    handlers: {
        'RECEIVE_CATEGORIES': 'receiveCategories',
    },

    initialize: function () {
        this.categories = [];
    },

    receiveCategories: function (categories) {
        debug( "Received categories: " + JSON.stringify(categories));
        var self = this;
        self.categories = categories;
        self.emitChange();
    },

    getAll: function () {
        return this.categories;
    },

    dehydrate: function () {
        return {
            categories: this.categories,
        };
    },

    rehydrate: function (state) {
        this.categories = state.categories;
    }
});

module.exports = CategoriesStore;
