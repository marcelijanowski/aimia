/*global require,data */
require.config({
    shim: {
        'vendors/underscore/underscore': {
            exports: '_'
        },
        'vendors/backbone/backbone': {
            deps: ["vendors/underscore/underscore"],
            exports: "Backbone"
        },
        'vendors/jquery/jquery': {
          exports:'$'
        },
        'app': {
            deps: [
                "app/model/icon",
                "app/collection/icon",
                "app/view/icon"
            ],
            exports: "App"
        }
    }
});

require(['vendors/jquery/jquery', 'vendors/backbone/backbone', 'app/app'], function($, Backbone, App) {
    Backbone.$ = $;

    var icons = new App.View.Icon();
    icons.render();
    $('i.info').bind('click',function(){
        $('.infopanel').slideToggle();
    });
});