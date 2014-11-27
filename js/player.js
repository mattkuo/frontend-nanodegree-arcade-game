// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(sprite) {
  Entity.call(this, sprite);
  this.x = 2 * Player.COL_WIDTH;
  this.y = 5 * Player.ROW_HEIGHT;
}

Player.ROW_HEIGHT = 83;
Player.COL_WIDTH = 101;

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Entity;

Player.prototype.handleInput = function(key) {
  console.log(key);
  switch (key) {
    case 'left':
      this.x -= Player.COL_WIDTH;
      break;
    case 'up':
      this.y -= Player.ROW_HEIGHT;
      break;
    case 'right':
      this.x += Player.COL_WIDTH;
      break;
    case 'down':
      this.y += Player.ROW_HEIGHT;
      break;
  }
}
