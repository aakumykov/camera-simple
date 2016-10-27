//"use strict";

var app = angular.module("CameraApp",[]);

app.controller("CameraController", function($scope){
	$scope.title = "Photocamera";
	$scope.photo_src = '';
	$scope.takeAPhoto = function(){
		console.log('takeAPhoto()');

		navigator.camera.getPicture(
			$scope.onSuccess, 
			$scope.onFail, 
			{ 
				quality: 50,
				encodingType: Camera.EncodingType.JPEG,
				sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
				//sourceType: Camera.PictureSourceType.CAMERA,
				destinationType: Camera.DestinationType.FILE_URI,
			}
		);
	}
    $scope.onSuccess = function(imageURI) {
        console.info('onSuccess(): SUCCESS');
        
        var image = document.getElementById('photo');
            image.src = "data:image/jpeg;base64," + imageURI;
    }
    $scope.onFail = function(message) {
        console.error('onFail(): '+message);
    }
});


// document.addEventListener(
//     'deviceready',
//     function(){
//         angular.bootstrap(document, ['CameraApp']);
//     },
//     false
// );
