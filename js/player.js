// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(sprite) {
  Entity.call(this, sprite);
}

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Entity;

Player.prototype.handleInput = function(key) {
  switch (key) {
    case 37:
      // left
      break;
    case 38:
      // top
      break;
    case 39:
      // right
      break;
    case 40:
      // down
      break;
  }
}
