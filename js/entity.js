var Entity = function(sprite) {
  this.sprite = sprite;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Entity.prototype.update = function(dt) {
  // Movement code here
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
}

// Draw the enemy on the screen, required method for game
Entity.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
