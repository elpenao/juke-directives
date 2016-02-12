'use strict';

juke.directive('albumList', function () {
    return {
        restrict: 'E', // the 'E' is for 'element'
        scope: {
            albums: '='	  
        },
        templateUrl: '/js/album/templates/album-list.html'
    };
});