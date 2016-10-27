var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('photo_button').addEventListener('click', function(){
            console.log('photo_button click...');

            takeAPhoto();
        });
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log('device is ready');
        console.log('camera: '+navigator.camera);
    },
};

app.initialize();

function takeAPhoto(){
    console.log('takeAPhoto()');

    navigator.camera.getPicture(
        onSuccess, 
        onFail, 
        { 
            quality: 50,
            encodingType: Camera.EncodingType.JPEG,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            //sourceType: Camera.PictureSourceType.CAMERA,
            destinationType: Camera.DestinationType.FILE_URI,
        }
    );
}

function onSuccess(imageURI) {
    console.info('onSuccess(): SUCCESS');
    
    var image = document.getElementById('photo');
        image.src = "data:image/jpeg;base64," + imageURI;
}

function onFail(message) {
    console.error('onFail(): '+message);
}