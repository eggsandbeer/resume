define([
    'backbone',
    'marionette'
    ], function(Backbone, Marionette){
    'use strict';
    var Portfolio = new Backbone.Marionette.Application();

    Portfolio.addRegions({
        sideBarRegion: '#SideBar',
        mainRegion: '#BillBoard'
    });

    Portfolio.navigate = function(route, options){
        options || (options = {});
        Backbone.history.navigate(route, options);
    };

    Portfolio.getCurrentRoute = function(){
        return Backbone.history.fragment;
    };

    Portfolio.on('initialize:after', function(){
        if(Backbone.history){
            require(['apps/home/home-app'], function(){
                Backbone.history.start();

                if(Portfolio.getCurrentRoute() === ''){
                    // Portfolio.trigger('show:main');
                    Portfolio.trigger('show:list');
                }
            });
        }
    });

    return Portfolio;
});
