define(['app', 'apps/home/sidebar/sidebar-view'], function(Portfolio, View){
    Portfolio.module('Home.SideBar', function(SideBar, QuickMobile, Backbone, Marionette, $, _){
        SideBar.Controller = {
            showList: function(id){
                require(["entities/home/sidebar/list"], function(){
                    var fetchingList = Portfolio.request("sidebar:list");
                    
                    $.when(fetchingList).done(function(list){
                        if (list !== undefined) {
                            var sideBarView = new View.ListContainer({
                                collection: list
                            });
                        } else {
                            console.log('you messed up');
                        }
                        Portfolio.sideBarRegion.show(sideBarView);
                    });
                });
            }
        }
    });
    return Portfolio.Home.SideBar.Controller;
});
