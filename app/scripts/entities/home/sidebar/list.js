define(['app'], function(Portfolio){
    Portfolio.module('Entities', function(Entities, Portfolio, Backbone, Marionette, $, _){

        Entities.ListItems = Backbone.Model.extend({
            id: 1
        });

        Entities.List = Backbone.Collection.extend({
            url: "",
            model: Entities.ListItems
        });

        var initializeList = function(){
            var list = new Entities.List([
                {
                    id: 14,
                    title: 'Timeline Longform',
                    client: 'Timeline',
                    startdate: 'August. 2015'
                },
                {
                    id: 13,
                    title: 'Timeline Embed Builder',
                    client: 'Timeline',
                    startdate: 'August. 2015'
                },
                {
                    id: 12,
                    title: 'Timeline Homepage',
                    client: 'Timeline',
                    startdate: 'August. 2015'
                },
                {
                    id: 11,
                    title: 'Mobidia',
                    client: 'Mobidia',
                    startdate: 'January. 2015'
                },
                {
                    id: 10,
                    title: 'QuickMobile',
                    client: 'QuickMobile Inc',
                    startdate: 'August. 2013'
                },
                {
                    id: 1,
                    title: 'Tag Idea Revolution',
                    client: 'Tag Idea Revolution',
                    startdate: 'March 2013'
                },
                {
                    id: 2,
                    title: 'Nissan/Infiniti',
                    client: 'The Marketing Store',
                    startdate: 'Oct. 2012'
                },
                {
                    id: 3,
                    title: 'Kraft Celebration Tour 2012',
                    client: 'Trapeze',
                    startdate: 'May 2012'
                },
                {
                    id: 4,
                    title: 'Royal LePage Commercial',
                    client: 'Trapeze',
                    startdate: 'May 2012'
                },
                {
                    id: 5,
                    title: 'Facebook Thinsations App',
                    client: 'Trapeze',
                    startdate: 'April 2012'
                },
                {
                    id: 6,
                    title: 'Langara College Projects',
                    client: 'Langara College',
                    startdate: '2011'
                },
                {
                    id: 7,
                    title: 'PSW Consulting',
                    client: 'PWS Consulting',
                    startdate: 'Dec. 2011'
                },
                {
                    id: 8,
                    title: 'cameronstrandberg.com mock 2',
                    client: 'Yours truly',
                    startdate: 'Dec. 2011'
                },
                {
                    id: 9,
                    title: 'cameronstrandberg.com mock 1',
                    client: 'Yours truly',
                    startdate: 'May 2010'
                }
            ]);
            return list;
        }

        var API = {
            getSideBarEntities: function(){
                var list = initializeList();
                return list;
            }
        }

        Portfolio.reqres.setHandler("sidebar:list", function(id){
            return API.getSideBarEntities(id);
        });
    });
    return;
});
