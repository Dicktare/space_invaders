/*
#NOTATIONS:
 src - the source for the image
 imgSize - the image size
 sprite - the size of a single sprite in the spriteSheet
 spriteNum - the number of sprites per row
#=========================================================/
*/


/*
Monster image data for each monster in the game
 monster_id : {
   src
   imgSize
   sprite
   spriteNum
  }
*/
var monsters = {
  'monster1': {
    src:'assets/monster.png',
    imgSize:{x:60, y:25},
    sprite:{x:30, y:25},
    spriteNum: 2
  },

  'monster2': {
    src:'assets/monster2.png',
    imgSize:{x:60, y:25},
    sprite:{x:30, y:25},
    spriteNum: 2
  },

  'monster3': {
    src:'assets/monster3.png',
    imgSize:{x:100, y:50},
    sprite:{x:50, y:50},
    spriteNum: 2
  },

  'monster4': {
    src:'assets/monster4.png',
    imgSize:{x:100, y:50},
    sprite:{x:50, y:50},
    spriteNum: 2
  },

  'monster5': {
    src:'assets/monster5.png',
    imgSize:{x:120, y:60},
    sprite:{x:60, y:60},
    spriteNum: 2
  }
}

/*
Bullet image data for each bullet in the game
bullet_id {
  src
  imgSize
  sprite
}
*/
var bullets = {
  'fire' : {
    src:'assets/fire_bullet.png',
    imgSize:{x:10, y:17},
    sprite:{x:10, y:17},
  },

  'default' : {
    src:'assets/bullet.png',
    imgSize:{x:10, y:12},
    sprite:{x:10, y:12},
  }
}

/*
Player image data for each bullet in the game
*/
var playerData = {
  src:'assets/player.png',
  imgSize:{x:60, y:60},
  sprite:{x:60, y:60},
  spriteNum: 1
}

/*
Map image data for the map.
*/
var mapBg = {
  src:'assets/space.png',
  imgSize:{x:600, y:600},
}
//==========================================================/

/*
#NOTATIONS:
Timer information for the update loop
//==========================================================/
*/
var Timer = {
  updateTime: 1000
}
//==========================================================/
