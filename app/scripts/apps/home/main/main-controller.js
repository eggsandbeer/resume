define(['app', 'apps/home/main/main-view'], function(Portfolio, View){
    Portfolio.module('Home.Main', function(Main, QuickMobile, Backbone, Marionette, $, _){
        Main.Controller = {
            showMain: function(id){
                require(["entities/home/main/areas"], function(){
                    if(!id){
                        var mainView = new View.ShowHomeHero();
                        Portfolio.mainRegion.show(mainView);
                    } else {
                        var fetchingMain = Portfolio.request("main:areas");

                        $.when(fetchingMain).done(function(allmain){
                            if (allmain !== undefined) {
                                var model = allmain.get(id);
                                var mainView = new View.ShowHero({
                                    model: model
                                });
                            } else {
                                console.log('you messed up');
                            }
                            Portfolio.mainRegion.show(mainView);
                        });                        
                    }


                });
            }
        }
    });
    return Portfolio.Home.Main.Controller;
});
