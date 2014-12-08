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
  this.isMoving = false;
}

// Player Constants
Player.ROW_HEIGHT_ = 83;
Player.COL_WIDTH_ = 101;
Player.SPEED_ = 600;
Player.DIRECTIONS_ = {
  LEFT: 0,
  RIGHT: 1,
  UP: 2,
  DOWN: 3,
  STOP: 4
};

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Entity;
Player.prototype.parent = Entity.prototype;

/**
 * Check if given coordinates are legal (not off the board)
 * @param {number} x - The x-coordinate
 * @param {number} y - The y-coordinate
 */
Player.prototype.isCoordsOffBoard_ = function(x, y) {
  if (x < 0 || x > ctx.canvas.width - 100) {
    return true;
  }
  
  if (y < -45 || y > ctx.canvas.height - 200) {
    return true;
  }
  
  return false;
}

Player.prototype.isMovementVertical_ = function() {
  if (this.direction === Player.DIRECTIONS_.UP ||
      this.direction === Player.DIRECTIONS_.DOWN) {
    return true;
  }
  return false;
}

/**
 * Moves player to given coordinates by setting appropriate velocity if
 * coordinates are legal.
 * @param  {number} x - The x-coordinate to move to
 * @param  {number} y - The y-coordinate to move to
 */
Player.prototype.move = function(x, y) {
  if (this.isCoordsOffBoard_(x, y)) {
    return;
  }
  
  if (this.isMovementVertical_()) {
    this.yVelocity = this.y < y ? Player.SPEED_ : -Player.SPEED_;
  } else {
    this.xVelocity = this.x < x ? Player.SPEED_ : -Player.SPEED_;
  }

  this.destX = x;
  this.destY = y;
}

/**
 * Predict if next update will overshoot the destination. If so, set position to
 * destination.
 * @param  {number} dt - change of time since last update
 */
Player.prototype.update = function(dt) {
  switch (this.direction) {
    case Player.DIRECTIONS_.LEFT:
    case Player.DIRECTIONS_.RIGHT:
      if (Math.abs(this.x - this.destX) < Player.SPEED_ * dt) {
        this.x = this.destX;
        this.xVelocity = 0;
        this.direction = Player.DIRECTIONS_.STOP;
        this.isMoving = false;
      }
      break;
    case Player.DIRECTIONS_.UP:
    case Player.DIRECTIONS_.DOWN:
      if (Math.abs(this.y - this.destY) < Player.SPEED_ * dt) {
        this.y = this.destY;
        this.yVelocity = 0;
        this.direction = Player.DIRECTIONS_.STOP;
        this.isMoving = false;
      }
      break;
  }
  
  this.parent.update.call(this, dt);
}

Player.prototype.handleInput = function(key) {
  if (this.isMoving) {
    return;
  }
  switch (key) {
    case 'left':
      this.direction = Player.DIRECTIONS_.LEFT;
      this.move(this.x - Player.COL_WIDTH_, this.y);
      this.isMoving = true;
      break;
    case 'up':
      this.direction = Player.DIRECTIONS_.UP;
      this.move(this.x, this.y - Player.ROW_HEIGHT_);
      this.isMoving = true;
      break;
    case 'right':
      this.direction = Player.DIRECTIONS_.RIGHT;
      this.move(this.x + Player.COL_WIDTH_, this.y);
      this.isMoving = true;
      break;
    case 'down':
      this.direction = Player.DIRECTIONS_.DOWN;
      this.move(this.x, this.y + Player.ROW_HEIGHT_);
      this.isMoving = true;
      break;
  }
}
