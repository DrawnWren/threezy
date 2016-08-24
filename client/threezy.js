//should pass an arguments object in the form:
//renderer: renderer, camera: camera, scene: scene, init: initItems
var RenderEventSystem = function (args) {
    this._renderQueue = [];
    //Call all of the functinos passed in to initialize the system
    var init = args.init || [];
    init.forEach( (el) => el() );
    this.renderer = args.renderer;
    this.scene = args.scene;
    this.camera = args.camera;
    this.scheduleRender();
}

//Returns the index of the callback in the renderQueue
//Can be used to dequeue from the array if you don't want the item on the
//Frame forever
RenderEventSystem.prototype.enqueue = function (cb) {
    this._renderQueue.push(cb);
    return this._renderQueue.length - 1;
}

//Removes the item at the index passed in and returns it
RenderEventSystem.prototype.dequeue = function (index) {
    return this._renderQueue.splice(index,1)[0];
};

//Calls all of the callbacks currently in the queue once
RenderEventSystem.prototype.render = function () {
    this._renderQueue.forEach( (el) => el() );
    this.renderer.render( this.scene, this.camera);
}

//Schedules the render function to be called on every animationFrame
RenderEventSystem.prototype.scheduleRender = function () {
    this.render.call(this);
    var boundScheduleFun = this.scheduleRender.bind(this);
    requestAnimationFrame( boundScheduleFun );
};
