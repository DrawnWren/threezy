var spheres = [];
var sphereID = 0;
var makeSphere = function () {
  spheres.push( new Sphere(++sphereID) );
};

//a Sphere object, will not render until it is added to the scene
var Sphere = function (id) {
  this.id = id;
  this.geometry = new THREE.SphereGeometry( globalOptions.radius, 8, 6); //radius, widthSegments, heightSegments
  this.material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
  this.sphere = new THREE.Mesh( this.geometry, this.material );
};

Sphere.prototype.addToScene = function(sc) {
  sc.add(this.sphere);
};

var addSpheresToScene = function(sc) {
  spheres.map((sp) => {
    sp.addToScene(sc);
  });
};

var makeNSpheres = function (n) {
  for (var i = 0; i < n; i++) {
    makeSphere();
  }
};
