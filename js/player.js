// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(sprite) {
  Entity.call(this, sprite);
  this.x = 2 * Player.COL_WIDTH_;
  this.y = -40 + 5 * Player.ROW_HEIGHT_;
  
  this.destX = this.x;
  this.destY = this.y;
  this.direction = null;
}

// Player Constants
Player.ROW_HEIGHT_ = 83;
Player.COL_WIDTH_ = 101;
Player.VELOCITY_ = 600;
Player.DIRECTIONS_ = {
  LEFT: 0,
  RIGHT: 1,
  UP: 2,
  DOWN: 3,
  STOP: 4
}

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Entity;
Player.prototype.parent = Entity.prototype;

Player.prototype.isPastDestination_ = function() {
  if (this.direction === Player.DIRECTIONS_.STOP ||
    this.direction === null ||
    (this.direction === Player.DIRECTIONS_.RIGHT && this.x >= this.destX) ||
    (this.direction === Player.DIRECTIONS_.LEFT && this.x <= this.destX) ||
    (this.direction === Player.DIRECTIONS_.DOWN && this.y >= this.destY) ||
    (this.direction === Player.DIRECTIONS_.UP && this.y <= this.destY)) {
      return true;
  }
    return false;
}

Player.prototype.move = function(x, y) {
  if (this.x < x) {
    this.xVelocity = Player.VELOCITY_;
  } else if (this.x > x) {
    this.xVelocity = -Player.VELOCITY_;
  }
  
  if (this.y < y) {
    this.yVelocity = Player.VELOCITY_;
  } else if (this.y > y) {
    this.yVelocity = -Player.VELOCITY_;
  }
  this.destX = x;
  this.destY = y;
}

Player.prototype.update = function(dt) {
  if (this.direction != Player.DIRECTIONS_.STOP && this.isPastDestination_()) {
    this.direction = Player.DIRECTIONS_.STOP;
    this.x = this.destX;
    this.y = this.destY;
    this.xVelocity = 0;
    this.yVelocity = 0;
  }
  
  this.parent.update.call(this, dt);
}

Player.prototype.handleInput = function(key) {
  switch (key) {
    case 'left':
      this.direction = Player.DIRECTIONS_.LEFT;
      this.move(this.x - Player.COL_WIDTH_, this.y);
      break;
    case 'up':
      this.direction = Player.DIRECTIONS_.UP;
      this.move(this.x, this.y - Player.ROW_HEIGHT_);
      break;
    case 'right':
      this.direction = Player.DIRECTIONS_.RIGHT;
      this.move(this.x + Player.COL_WIDTH_, this.y);
      break;
    case 'down':
      this.direction = Player.DIRECTIONS_.DOWN;
      this.move(this.x, this.y + Player.ROW_HEIGHT_);
      break;
  }
}
