//-------
// opts
// {
// height: width,
// width: depth,
// linesHeight: b,
// linesWidth: c,
// color 0xcccccc
// }
//
//-------
var createAGrid = function (opts) {
  var config = opts || {
    height: 500,
    width: 500,
    linesHeight: 10,
    linesWidth: 10,
    color: 0xDD006C
  };
};

var material = new THREE.LineBasicMaterial({
  color: config.color,
  opacity: 0.2
});

var gridObject = new THREE.Object3D(),
  gridGeo = new THREE.Geometry(),
  stepw = 2 * config.width / config.linesWidth,
  steph = 2 * config.height / config.linesHeight;

  //width
  for (var i = -config.width; i <= config.width; i += stepw) {
    gridGeo.vertices.push(new THREE.Vector3(-config.height,
      ))
  }