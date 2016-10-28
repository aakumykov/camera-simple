"use strict";

angular.module("CameraApp",[]).
filter('resolutionFilter', function(){
	return {
		width: 320,
		height: 240
	};
});