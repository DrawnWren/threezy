var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;
var i = 0;
var render = function () {
  requestAnimationFrame( render );
  renderer.render( scene, camera );
};

var addToScene = function (arg) {
  scene.add(arg);
};

window.onload = render;