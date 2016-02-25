require.config({
    paths : {
        jquery : '../bower_components/jquery/jquery',
        underscore : '../bower_components/underscore/underscore',
        backbone : '../bower_components/backbone-amd/backbone',
        marionette : '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr' : '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.babysitter' : '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',
        'localstorage' : '../bower_components/backbone.localStorage/backbone.localStorage',
        handlebars : '../bower_components/handlebars/handlebars',
        text: '../bower_components/text/text',
        hb: '../bower_components/requirejs-handlebars/hb',
        i18n: '../bower_components/requirejs-i18n/i18n'
    },
    map: {
        '*': { 'jquery': 'jquery-private' },
        'jquery-private': { 'jquery': 'jquery' }
    },
    shim : {
        underscore : {
            exports : '_'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

require(['app'],function(Portfolio){
    'use strict';
    Portfolio.start();
});
