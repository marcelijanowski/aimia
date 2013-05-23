/*global define */
define(['vendors/underscore/underscore', 'vendors/backbone/backbone'],
    function (_, Backbone) {
        return  Backbone.Model.extend({
            defaults : {
                'icon' : '',
                'backgroundcolor': '',
                'info': ''
            }
        });
    }
);