tdl.provide("actor")

tdl.require("lootgrab.math");
tdl.require('lootgrab.audio');

/**
 *
 * @param {World} w
 * @param entDef
 */
function Actor(w, entDef) {
  try {
    if (entDef === undefined)
      console.error("Undefined entity def.");
    this.world = w;
    this.entityDef = entDef;

    this.position = ('position' in entDef)
        ? new Vec2(entDef.position.x + .5,  entDef.position.y + .5)
        : new Vec2(1.5,1.5);
    this.heading = Vec2.CENTER;
    this.speed = ('speed' in entDef) ? entDef.speed : 0;
    this.radius = ('radius' in entDef) ? entDef.radius : Math.sqrt(2) / 4;

    this.deathState = Actor.ALIVE;
    this.sprite = this.world.newEntity(entDef.sprite);

    this.loot = 'loot' in entDef ? entDef.loot : false;
    this.passable = 'passable' in entDef ? entDef.passable : true;
  } catch (err) {
    alert("Couldn't create Actor: " + err.toString());
  }
}

Actor.ALIVE = 0;
Actor.DYING = 1;
Actor.DEAD = 2;

Actor.prototype.init = function(instanceDef) {
  try {
    if ('position' in instanceDef) {
      var pos = new Vec2(instanceDef.position.x + .5, instanceDef.position.y + .5);
      this.position = pos;
    }
    if ('heading' in instanceDef) {
      this.heading = eval("Vec2." + instanceDef.heading)
    }
  } catch (err) {
    alert("Couldn't initialize Actor: " + err.toString());
  }
}

Actor.prototype.getWorld = function() {
  return this.world;
}

Actor.prototype.draw = function(ctx, cw, ch) {
  // Actor position is center of cell, so subtract
  // 0.5 so that we draw it in the right position.
  this.sprite.draw(ctx, 
      (this.position.x - 0.5) * cw, 
      (this.position.y - 0.5) * ch,
      cw, ch);
}

/**
 * Update the actor at the beginning of the frame
 *
 * @param world
 * @param tick
 * @param elapsed
 */
Actor.prototype.update = function(world, tick, elapsed) {
  if (this.isDead()) return;
  
  var nextpos = this.position.add(this.heading.mul(0.5))
  if (this.world.isBlocking(nextpos.x, nextpos.y)) {
    this.heading = this.heading.negate();
  }
  this.updatePosition(elapsed);
}

/**
 * Inform the actor that it has collided with another actor
 *
 * @param {Actor} other
 */
Actor.prototype.onCollide = function(other) {
  
}

Actor.prototype.isDead = function() {
  return (this.deathState == Actor.DEAD);
}

Actor.prototype.kill = function() {
  lootgrab.audio.play_sound("death");
  this.deathState = Actor.DYING;
}

Actor.prototype.killed = function() {
  this.deathState = Actor.DEAD;
  this.speed = 0;
  this.heading = Vec2.CENTER;
}

Actor.prototype.updatePosition = function(elapsed) {
  this.position = this.position.add(
      this.heading.mul(this.speed * elapsed));
}

