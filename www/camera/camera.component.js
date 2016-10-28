'use strict';

function CameraController(){

}

angular.module('CameraModule',[]).
component('camera',{
	templateUrl: 'camera/camera.template.html',
	controller: CameraController,
	controllerAs: 'camCtrl',
});
