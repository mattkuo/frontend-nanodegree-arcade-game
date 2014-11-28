// Enemies our player must avoid
var Enemy = function(sprite) {
    Entity.call(this, sprite);
    this.x = -45;
    this.y = this.genRandomYCoord_();
    this.xVelocity = this.genRandomVelocity_();
}

// Enemy constants
Enemy.Y_RANGE = [43, 123, 209];
Enemy.MIN_VELOCITY = 300;
Enemy.MAX_VELOCITY = 500;

Enemy.prototype = Object.create(Entity.prototype);
Enemy.prototype.constructor = Entity;
Enemy.prototype.parent = Entity.prototype;

Enemy.prototype.genRandomYCoord_ = function() {
  var index = Math.floor(Math.random() * (Enemy.Y_RANGE.length));
  return Enemy.Y_RANGE[index];
}

Enemy.prototype.genRandomVelocity_ = function() {
  return Math.floor(Math.random() * (Enemy.MAX_VELOCITY - Enemy.MIN_VELOCITY + 1)) + Enemy.MIN_VELOCITY;
}

Enemy.prototype.update = function(dt) {
  if (this.x > ctx.canvas.width) {
    this.x = -800;
    this.y = this.genRandomYCoord_();
    this.xVelocity = this.genRandomVelocity_();
  }
  this.parent.update.call(this, dt);
}
