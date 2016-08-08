var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

var globalOptions = {numSpheres: 3, radius: 5};

var init = function () {
  makeNSpheres(globalOptions.numSpheres);
  addSpheresToScene(scene);
  spreadThemSpheres(spheres);
  setCamera(globalOptions.numSpheres);
  render();
};

window.onload = init;

var render = function () {
  requestAnimationFrame( render );
  renderer.render( scene, camera );
  updateAudioArr();
};

var addToScene = function (arg) {
  scene.add(arg);
};


// ***********************
// Init Helper Functions
// 
// 
// 
// ***********************
var spreadThemSpheres = function(spheres) {
  for (var i = 0; i < spheres.length; i++ ) {
    spheres[i].sphere.position.x = i * (globalOptions.radius * 4);
  }
};

//Given a number of spheres, sets the 
// camer to an appropriate position
var setCamera = function () {
  //blah
};