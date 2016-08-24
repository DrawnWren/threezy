var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

var globalOptions = {numSpheres: 3, radius: 5, wSegments: 8, hSegments: 6};


//******************


var rendererInit = function() {
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
};

var cameraInit = function () {

    var lookPoint = new THREE.Vector3(100,-10,1000);
    camera.lookAt(lookPoint);
    camera.position.z = 1000;
    camera.position.x = 1000;
    camera.position.y = 20;

};

var initArray = [rendererInit, cameraInit];

var optionMap = {renderer: renderer,
                camera: camera,
                scene: scene,
                init: initArray};

var renderSystem = new RenderEventSystem(optionMap);
renderSystem.scheduleRender();
