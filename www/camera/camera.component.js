'use strict';

function CameraController(){
	this.title = "Фотокамера";
	this.surname = device.platform;
}

angular.module('CameraModule',[]).
component('camera',{
	templateUrl: 'camera/camera.template.html',
	controller: CameraController,
	controllerAs: 'camCtrl',
});
