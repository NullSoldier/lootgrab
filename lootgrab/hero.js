tdl.provide('hero');
tdl.require('lootgrab.actor');
tdl.require('lootgrab.route');

function Hero(w, def) {
  Actor.call(this, w, def);
  w.setHero(this);
}
tdl.base.inherit(Hero, Actor);

/**
 * Update the actor at the beginning of the frame
 *
 * @param world
 * @param tick
 * @param elapsed
 */
Hero.prototype.update = function(world, tick, elapsed) {
  var pos = [
    Math.floor(this.position.x + 0.5),
    Math.floor(this.position.y - 0.5)
  ];
  var path = lootgrab.route.findRoute(world, pos);
  if (path.length) {
    var step = new Vec2(path[0][0], path[0][1]);

    if (step.x > pos[0])
      this.heading = Vec2.RIGHT;
    else if (step.x < pos[0])
      this.heading = Vec2.LEFT;
    else if (step.y < pos[1])
      this.heading = Vec2.UP;
    else if (step.y > pos[1])
      this.heading = Vec2.DOWN;
    else
      this.heading = Vec2.CENTER;
  } else {
    this.heading = Vec2.CENTER;
  }

  this.updatePosition(elapsed);
}
