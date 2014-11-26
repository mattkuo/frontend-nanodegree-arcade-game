var Entity = function(sprite) {
  this.sprite = sprite;
  this.xVelocity = 0;
  this.yVelocity = 0;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Entity.prototype.update = function(dt) {
  this.x = this.xVelocity * dt;
  thix.y = this.yVelocity * dt;
}

// Draw the enemy on the screen, required method for game
Entity.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
