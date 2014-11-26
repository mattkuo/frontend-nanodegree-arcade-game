// Enemies our player must avoid
var Enemy = function(sprite) {
    Entity.call(this, sprite);
}

Enemy.prototype = Object.create(Entity.prototype);
Enemy.prototype.constructor = Entity;
