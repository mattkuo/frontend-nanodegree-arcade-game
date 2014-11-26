// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(sprite) {
  Entity.call(this, sprite);
}

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Entity;
