//the canvas context used to draw all the objects in the game
var ctx = null;
var gameCanvas = null;
//the object that handles the logic in the game
var engine = null;

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

/*
#Game States:
Timer information for the game states
//==========================================================/
*/
gameStates = ['menu', 'pause', 'score', 'over', 'play'];

var mouseMoveHandlers = {
  'menu' : function(poz){ },
  'pause': function(poz){ },
  'score': function(poz){ },
  'over' : function(poz){ console.log('mouse move')},
  'play' : function(poz){ }
}

var mouseClickHandlers = {
  'menu' : function(poz){ engine.handleMenuClick(poz)},
  'pause': function(poz){ },
  'score': function(poz){ },
  'over' : function(poz){ engine.handleGameOverClick(poz)},
  'play' : function(poz){engine.handlePlayClick(poz) }
}

var gameLoops = {
  'menu' : function() {engine.runMenuLoop()},
  'pause': function(){ },
  'score': function(){ },
  'over' : function(){ engine.runGameOverLoop()},
  'play' : function(){ engine.runPlayLoop()}
}
//==========================================================/

/*
#Menu Info:
The star information for the animation
//==========================================================/
*/
//==========================================================/
var menuInfo = [
  {
    poz: {x:105, y:305},
    size: {x:40 ,y:40},
    src:'assets/star1.png',
    imgSize:{x:120, y:24},
    sprite:{x:24, y:24},
    spriteNum: 5,
    timer:100,
    updateTick:350
  },
  {
    poz: {x:55, y:100},
    size: {x:80, y:80},
    src:'assets/star2.png',
    imgSize:{x:300, y:70},
    sprite:{x:60, y:70},
    spriteNum: 5,
    timer:250,
    updateTick:450
  }
]

var menuButtonsInfo =  {
    start:{x:255, y:150},
    size: {x:100, y:50},
    offset: {x:0, y:25},
    textSize: 16,
    btnNum:3,
    actions: ['start', 'options', 'help'],
    handlers: {
      0: function() { engine.initNewGame(); engine.state = 'play'},
      1: function() {console.log('options is clicked')},
      2: function() {console.log('help is clicked')},
    }
}

var menuButtonOver = {
  start:{x:255, y:150},
  size: {x:100, y:50},
  offset: {x:0, y:25},
  textSize: 15,
  btnNum:1,
  actions: ['to menu'],
  handlers: {
    0: function() {engine.state = 'menu'},
  }
}

//==========================================================/
