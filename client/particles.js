/*
var tLoader = new THREE.TextureLoader();
tLoader.load("images/disc.png", function(e) { pMaterial.map = e; });

var customUniforms = {
    time:	 { type: "f", value: 1.0 },
    texture: { type: "t", value: discTexture }
}*/

var particleGlobal = {pCount: 1024};

function ParticleSystem (argArr) {
    this.count = argArr.pcount;
    this.particles = this.initParticles(this.count);
    this.material = THREE.PointsMaterial({
            color: argArr.color,
            size: 20,
            blending: THREE.AdditiveBlending,
            transparent: true,
    });

    this.system = new THREE.Points(this.particles, this.materials); 
    particleSystem.sortParticles = true;
};

ParticleSystem.prototype.render = function () {
    var pCount = this.count;

    while (pCount--) {

        var particle = this.particles.vertices[pCount];
        particle.y = frequencyArr[pCount];
        particle.add(particle.velocity);
        
    }

    particleSystem.geometry.verticesNeedUpdate = true; 

}

ParticleSystem.prototype.initParticles = function () {
    var newGeo = new THREE.Geometry();
    for (var p = 0; p < this.count; p++) {
        
        // create a particle with random
        // position values
        // -250 -> 250
        var pX = (this.count / 500) * p,
            pY = -10,
            pZ = Math.random() * 500 - 250,
            particle = new THREE.Vector3(pX, pY, pZ);
            particle.velocity = new THREE.Vector3(0, -Math.random(), 0);               

        // add it to the geometry
        newGeo.vertices.push(particle);
    }
}

particleSystem = new ParticleSystem(particleGlobal);

var updateParticles = particleSystem.render.bind(particleSystem);

renderSystem.scene.add(particleSystem.particleSystem);
renderSystem.enqueue(updateParticles);
