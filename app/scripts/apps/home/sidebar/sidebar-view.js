define([
    'app', 
    'hb!apps/home/sidebar/templates/sidebar-container.tpl',
    'hb!apps/home/sidebar/templates/sidebar-item.tpl'
    ], 
    function(Portfolio, ListContainerTpl, ListItemTpl){
    Portfolio.module("Home.SideBar.View", function(View, Portfolio, Backbone, Marionette, $, _){
        View.ListItem = Marionette.ItemView.extend({
            template: ListItemTpl,
            tagName: 'li',
            events: {
                'click' : 'getMain',
                'mouseenter' : 'animateIn',
                'mouseleave' : 'animateOut'               
            },
            getMain: function(e){
                e.preventDefault();
                var id = this.model.get('id');

                Portfolio.trigger('show:main', id);

                var li = this.$el.closest('ul').find('li');

                _.each(li, function(li){
                    if($(li).hasClass('active')){
                        $(li).removeClass('active');
                        $(li).removeClass('bordered');
                        $(li).find('img').removeClass('show').addClass('noshow');
                    };
                })

                $(e.target).addClass('active');
            },
            animateIn: function(e){
                e.stopPropagation();
                this.$el.addClass('bordered').find('img').addClass('show').removeClass('noshow');
            },
            animateOut: function(e){
                e.stopPropagation();
                if(!this.$el.hasClass('active')){
                    this.$el.removeClass('bordered').find('img').addClass('noshow').removeClass('show');
                } else {
                    this.$el.removeClass('bordered').removeClass('show');
                }
            }
        });
        View.ListContainer = Marionette.CompositeView.extend({
            template: ListContainerTpl,
            itemView : View.ListItem,
            itemViewContainer: 'ul',
            className :'accordion-group'
        });
    });
    return Portfolio.Home.SideBar.View;
});
