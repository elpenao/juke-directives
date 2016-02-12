'use strict';

juke.directive('songList', function (PlayerFactory) {
    return {
        restrict: 'E', // the 'E' is for 'element'
        scope: {
            songs: '='	  
        },
        link: function (scope, element) {

			  scope.toggle = function (song) {
			    if (song !== PlayerFactory.getCurrentSong()) {
			      PlayerFactory.start(song, scope.songs);
			    } else if ( PlayerFactory.isPlaying() ) {
			      PlayerFactory.pause();
			    } else {
			      PlayerFactory.resume();
			    }
			  };

			  scope.getCurrentSong = function () {
			    return PlayerFactory.getCurrentSong();
			  };

			  scope.isPlaying = function (song) {
			    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
			  };
        },
        templateUrl: '/js/song/song-list.html'
    };
});


juke.directive('doubleClick', function(){
	
	return {
		restrict: 'A', 
        scope: {
            doubleClick: '&'  
        },
		link: function(scope, element) {
		    element.on('dblclick', function () {
		    	console.log('double clicking')
    	  		scope.doubleClick()
    	  	})

		}
	};
});