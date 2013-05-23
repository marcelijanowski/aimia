/*global define */
define(['vendors/jquery/jquery', 'vendors/underscore/underscore', 'vendors/backbone/backbone', 'app/model/icon'],
    function ($, _, Backbone, Icon) {
        return Backbone.Collection.extend({
            model: Icon,
            url: '/js/app/data/icons.json'
        })
    }
);