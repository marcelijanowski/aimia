/*global define */
define([
    'app/bootstrap/model',
    'app/bootstrap/view',
    'app/bootstrap/collection'
],
    function (Models, Views, Collections) {

        return {
            Model: Models,
            View: Views,
            Collection: Collections
        };
    }
);