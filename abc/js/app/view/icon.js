/*global define */
define(['vendors/jquery/jquery',
        'vendors/underscore/underscore',
        'vendors/backbone/backbone',
        'app/collection/icon'
        ],
    function ($, _, Backbone,Icons) {
        return Backbone.View.extend({
            el: '#boxlist',
            template: _.template( $( '#iconTemplate' ).html() ),
            initialize: function () {
                _.bindAll(this);
                this.collection = new Icons();
                this.collection.fetch({
                    success: this.render
                });
            },
            render: function() {
                this.collection.each(function( item ) {
                    this.$el.html(this.$el.html()+this.template(item.toJSON()));
                },this);
                return this;
            }
        });
    }
);