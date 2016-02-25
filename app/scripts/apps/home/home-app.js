define(['app'], function(Portfolio, BreadCrumbs){
    Portfolio.module('Home', function(Home, Portfolio, Backbone, Marionette, $, _){
        
        Home.startWithParent = true;

        Portfolio.module('Routers.Home', function(HomeRouter, Portfolio, Backbone, Marionette, $, _){
            Home.Router = Marionette.AppRouter.extend({
                appRoutes: {
                    'project/:id': 'showList',
                }
            });

            var API = {
                showList: function(id){
                    require([
                        'apps/home/sidebar/sidebar-controller', 
                        'apps/home/main/main-controller'
                    ], function(SideBarController, MainController){
                        SideBarController.showList(id);
                        MainController.showMain(id);
                    });
                },
                showMain: function(id){
                    require(['apps/home/main/main-controller'], function(MainController){
                        MainController.showMain(id);
                    });
                }
            };

            Portfolio.on('show:list', function(){
                API.showList();
                API.showMain();
            });

            Portfolio.on('show:main', function(id){
                API.showMain(id);
                Portfolio.navigate("project/"+id);
            });

            Portfolio.addInitializer(function(){ 
                new Home.Router({
                    controller: API
                });
            });
        });
    });
    return Portfolio.HomeRouter;
});
