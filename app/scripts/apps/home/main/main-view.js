define([
    'app', 
    'hb!apps/home/main/templates/hero.tpl',
    'hb!apps/home/main/templates/hero-home.tpl'
    ], 
    function(Portfolio, HeroTpl, HomeHeroTpl){
    Portfolio.module("Home.Main.View", function(View, Portfolio, Backbone, Marionette, $, _){
        View.ShowHero = Marionette.ItemView.extend({
            template: HeroTpl,
            tagName: 'div'
        });
        View.ShowHomeHero = Marionette.ItemView.extend({
            className: 'welcome',
            template: HomeHeroTpl
        });
    });
    return Portfolio.Home.Main.View;
});
