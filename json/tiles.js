tdl.provide("tiles");

var getEntityDefs = function() {
  return {
    // Actors
    "actorHero"           : { type : "Hero",      sprite : "spriteHero",            uiName: "Hero",              heading: "RIGHT", speed : .025, killable: true },
    "actorSkeleton"       : { type : "Skeleton",  sprite : "spriteSkeletonWarrior", uiName: "Skeleton",          heading: "UP",    speed : .015, killable: true },
    "actorFlameSkull"     : { type : "FSkull",    sprite : "spriteFlamingSkull",    uiName: "Flame Skull",       heading: "UP",    speed : .01, speed2 : .04, killable: true },
    "actorGrimReaper"     : { type : "GrimReaper",  sprite : "spriteGrimReaper",    uiName: "Grim Reaper",       heading: "UP",    speed : .025, killable: false },
    "actorKey"            : { type : "Key",       sprite : "spriteKey",             uiName: "Key",               loot : true, key : true },
    "actorShield"         : { type : "Shield",    sprite : "spriteShield",          uiName: "Shield",            loot : true },
    "actorFire"           : { type : "Fire",      sprite : "spriteFire",            uiName: "Fire",              loot : true },
    "actorWand"           : { type : "Wand",      sprite : "spriteWand",            uiName: "Wand",              loot : true },
    "actorCross"          : { type : "Cross",     sprite : "spriteCross",           uiName: "Cross",             loot : true },
    "actorSword"          : { type : "Sword",     sprite : "spriteSword",           uiName: "Sword",             loot : true },
    "actorMeat"           : { type : "Meat",      sprite : "spriteMeat",            uiName: "Meat",              loot : true },
    "actorGoldChest"      : { type : "GoldChest", sprite : "spriteGoldChest",       uiName: "Gold Chest",        loot : true },
    "actorGoldBars"       : { type : "GoldBars",  sprite : "spriteGoldBars",        uiName: "Gold Bars",         loot : true },
    "actorSkull"          : { type : "Skull",     sprite : "spriteSkull",           uiName: "Skull",             loot : true },
    "actorGrate"          : { type : "Grate",     sprite : "spriteGrate",           uiName: "Grate",             loot : true },
    "actorCircle"         : { type : "Circle",    sprite : "spriteCircle",          uiName: "Circle",            loot : true },
    "actorExit"           : { type : "Exit",      sprite : "spriteStairsUp",        uiName: "Stairs Up",         loot : true,      renderBackground: true },
    "actorDoor"           : { type : "Door",      sprite : "spriteDoor",            uiName: "Door",              loot : false, passable : false },
    "actorTrapdoor"       : { type : "Trapdoor",  sprite : "spriteTrapdoorClosed",  uiName: "Closed Trapdoor",   loot : false,     renderBackground: true,   openSprite: "spriteTrapdoorOpen" },
    "actorHole"           : { type : "Hole",      sprite : "spriteHole",            uiName: "Hole",              loot : false,     renderBackground: true },
    "actorTimedWall"      : { type : "TimedWall", sprite : "spriteTimedWall",       uiName: "Timed wall",        loot : false, passable : false },

    // Level pieces
    "cellFloorA"          : { type: "Cell", sprite: "spriteFloorA"         , uiName: "Floor A",          passable : true },
    "cellFloorB"          : { type: "Cell", sprite: "spriteFloorB"         , uiName: "Floor B",          passable : true },
    "cellFloorC"          : { type: "Cell", sprite: "spriteFloorC"         , uiName: "Floor C",          passable : true },
    "cellFloorRug"        : { type: "Cell", sprite: "spriteFloorRug"       , uiName: "Rug",              passable : true },
    "cellFloorRug2"       : { type: "Cell", sprite: "spriteFloorRug2"      , uiName: "Rug 2",            passable : true },
    "cellFloorRug3"       : { type: "Cell", sprite: "spriteFloorRug3"      , uiName: "Rug 3",            passable : true },
    "cellFloorRug4"       : { type: "Cell", sprite: "spriteFloorRug4"      , uiName: "Rug 4",            passable : true },
    "cellStairsDown"      : { type: "Cell", sprite: "spriteStairsDown"     , uiName: "Stairs down",      passable : true },
    "cellStairsUp"        : { type: "Cell", sprite: "spriteStairsUp"       , uiName: "Stairs up",        passable : true },
    "cellWallH"           : { type: "Cell", sprite: "smartWall"            , uiName: "Wall H",           passable : false },
    "cellWallHCrumbled"   : { type: "Cell", sprite: "smartWall"            , uiName: "Wall H Crumbled",  passable : false },
    "cellWallHTorch"      : { type: "Cell", sprite: "smartWall"            , uiName: "Wall H Torch",     passable : false },
    "cellWallV"           : { type: "Cell", sprite: "smartWall"            , uiName: "Wall V",           passable : false },
    "cellWater"           : { type: "Cell", sprite: "spriteWater"          , uiName: "Water",            passable : true },
    "cellLava"            : { type: "Cell", sprite: "spriteLava"           , uiName: "Lava",             passable : true },

    // Sprite Definitions --------------------------------

    "tileset_env" : {
      type : "tileset",
      image: "images/lofi_environment_a_4x.png",
      tile_width: 32,
      tile_height: 32,
    },

    "spriteWallH"           : { type : "Sprite", tileset : "tileset_env", start_x:  0, start_y: 0, frames: 1 },
    "spriteWallHTorch"      : { type : "Sprite", tileset : "tileset_env", start_x:  1, start_y: 0, frames: 2 },
    "spriteWallHCrumbled"   : { type : "Sprite", tileset : "tileset_env", start_x:  3, start_y: 0, frames: 1 },
    "spriteWallV"           : { type : "Sprite", tileset : "tileset_env", start_x:  4, start_y: 0, frames: 1 },
    "spriteFloorA"          : { type : "Sprite", tileset : "tileset_env", start_x:  5, start_y: 0, frames: 1 },
    "spriteFloorB"          : { type : "Sprite", tileset : "tileset_env", start_x:  6, start_y: 0, frames: 1 },
    "spriteStairsUp"        : { type : "Sprite", tileset : "tileset_env", start_x:  7, start_y: 0, frames: 1 },
    "spriteStairsDown"      : { type : "Sprite", tileset : "tileset_env", start_x:  8, start_y: 0, frames: 1 },
    "spriteHole"            : { type : "Sprite", tileset : "tileset_env", start_x:  9, start_y: 0, frames: 1 },
    "spriteTrapdoorClosed"  : { type : "Sprite", tileset : "tileset_env", start_x: 10, start_y: 0, frames: 1 },
    "spriteTrapdoorOpen"    : { type : "Sprite", tileset : "tileset_env", start_x: 11, start_y: 0, frames: 1 },
    "spriteFloorC"          : { type : "Sprite", tileset : "tileset_env", start_x: 12, start_y: 0, frames: 1 },
    "spriteFloorRug"        : { type : "Sprite", tileset : "tileset_env", start_x: 13, start_y: 0, frames: 1 },
    "spriteFloorRug2"       : { type : "Sprite", tileset : "tileset_env", start_x: 13, start_y: 1, frames: 1 },
    "spriteFloorRug3"       : { type : "Sprite", tileset : "tileset_env", start_x: 13, start_y: 2, frames: 1 },
    "spriteFloorRug4"       : { type : "Sprite", tileset : "tileset_env", start_x: 13, start_y: 3, frames: 1 },
    "spriteWater"           : { type : "Sprite", tileset : "tileset_env", start_x:  2, start_y: 7, frames: 2 },
    "spriteLava"            : { type : "Sprite", tileset : "tileset_env", start_x:  3, start_y: 8, frames: 2 },
    "spriteDoor"            : { type : "Sprite", tileset : "tileset_env", start_x:  0, start_y:13, frames: 1 },
    "spriteCancel"          : { type : "Sprite", tileset : "tileset_env", start_x: 15, start_y:15, frames: 1 },


    "tileset_char" : {
      type : "tileset",
      image: "images/lofi_char_a_4x.png",
      tile_width: 32,
      tile_height: 32,
    },
    "spriteHero"            : { type : "Sprite", tileset : "tileset_char", start_x: 12, start_y: 30, frames: 2 },
    "spriteSkeleton"        : { type : "Sprite", tileset : "tileset_char", start_x:  0, start_y:  6, frames: 1 },
    "spriteSkeletonWarrior" : { type : "Sprite", tileset : "tileset_char", start_x:  1, start_y:  6, frames: 2 },
    "spriteBat"             : { type : "Sprite", tileset : "tileset_char", start_x: 15, start_y: 12, frames: 1 },
    "spriteFlamingSkull"    : { type : "Sprite", tileset : "tileset_char", start_x:  5, start_y:  6, frames: 2 },
    "spriteMummy"           : { type : "Sprite", tileset : "tileset_char", start_x: 10, start_y:  6, frames: 1 },
    "spriteMummyKing"       : { type : "Sprite", tileset : "tileset_char", start_x: 11, start_y:  6, frames: 1 },
    "spriteGrimReaper"      : { type : "Sprite", tileset : "tileset_char", start_x: 13, start_y:  6, frames: 2 },


    "tileset_obj" : {
      type : "tileset",
      image: "images/lofi_obj_a_4x.png",
      tile_width: 32,
      tile_height: 32,
    },
    "spriteKey"       : { type : "Sprite", tileset : "tileset_obj", start_x:  2, start_y:  2, frames: 1 },
    "spriteShield"    : { type : "Sprite", tileset : "tileset_obj", start_x:  4, start_y:  3, frames: 1 },
    "spriteFire"      : { type : "Sprite", tileset : "tileset_obj", start_x:  9, start_y:  6, frames: 2 },
    "spriteWand"      : { type : "Sprite", tileset : "tileset_obj", start_x: 14, start_y:  3, frames: 1 },
    "spriteCross"     : { type : "Sprite", tileset : "tileset_obj", start_x:  4, start_y:  1, frames: 1 },
    "spriteSword"     : { type : "Sprite", tileset : "tileset_obj", start_x:  6, start_y:  3, frames: 1 },
    "spriteMeat"      : { type : "Sprite", tileset : "tileset_obj", start_x: 13, start_y:  1, frames: 1 },
    "spriteGoldChest" : { type : "Sprite", tileset : "tileset_obj", start_x:  0, start_y:  0, frames: 1 },
    "spriteTimedWall" : { type : "Sprite", tileset : "tileset_obj", start_x: 11, start_y:  7, frames: 2 },

    "tileset_features" : {
      type : "tileset",
      image: "images/lofi_dungeon_features_a_4x.png",
      tile_width: 32,
      tile_height: 32,
    },
    "spriteGoldBars" : { type : "Sprite", tileset : "tileset_features", start_x: 11, start_y:  1, frames: 1 },
    "spriteSkull"    : { type : "Sprite", tileset : "tileset_features", start_x:  0, start_y:  6, frames: 1 },
    "spriteGrate"    : { type : "Sprite", tileset : "tileset_features", start_x:  0, start_y:  1, frames: 1 },
    "spriteCircle"   : { type : "Sprite", tileset : "tileset_features", start_x: 11, start_y:  3, frames: 1 },

    "tileset_smart" : {
      type : "tileset",
      image: "images/smart_env.png",
      tile_width: 8,
      tile_height: 8,
    },
    "smartWall"             : { type : "SmartSprite", 
                                tileset : "tileset_smart", 
                                cases : [
                                  { x: 0, y: 0},//0
                                  { x: 1, y: 0},//1
                                  { x: 2, y: 0},//2
                                  { x: 3, y: 0},//3
                                  { x: 0, y: 1},//4
                                  { x: 5, y: 0},//5
                                ]
                              }
  };
}
