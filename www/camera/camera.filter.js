'use strict';

angular.module('CameraModule',[]).
filter('splitResolution', ['str', function(str){
	return {
		width: 320,
		height: 240,
	}
}]);