"use strict";

var app = angular.module("CameraApp",[
    'CameraModule',
]);

document.addEventListener(
    'deviceready',
    function(){
        var result = angular.bootstrap(document, ['CameraApp']) ? 'OK' : 'ERROR';
        console.debug('deviceready, bootstraping Angular...'+result);

        console.debug('----- device info -----')
        for (var key in device) { var value = device[key]; if ('string'==typeof(value)) console.debug('device.'+key+': '+value); }
        console.debug('----- device info -----')
    },
    false
);
