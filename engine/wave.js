function Wave() {
  //the current level the player is in
  this.lvl = 1;
  /*
    The array of monster waves.
    Each level has wave of monsters.
    [
     0: [lvl 1 monster array]
     1: [lvl 2 monster array]
     ...
    ]
  */
  this.waves = [];
  this.init();
}

/*
  This is the init function used to create the waves for each lvl.
*/
Wave.prototype.init = function() {
  var unitsPerRow = 10;
  var rows = 5;
  var maxLvls = 1;
  var startPoz = {x:50, y:75}
  var size = {x:40, y:40};
  var offset = {x:10, y:10};
  var speed = 1;

  for(var i = 0; i < maxLvls; i++) {
    var wave = [];
    for(var k = 0; k < rows; k++) {
      var start = {
        x: startPoz.x + (k % 2) * 10,
        y: startPoz.y + (offset.y + size.y) * k
      }
      for(var j = 1; j <= unitsPerRow; j++) {
        var poz = {
          x: start.x + (j-1) * (offset.x + size.x),
          y: start.y,
        }

        var right = poz.x + 50;
        var left = poz.x - 30;
        var border = {
          left: left,
          right: right
        }
        var monsterType = this.getMonsterType(k);
        var e = new Enemy(poz, size, speed, border, monsterType);
        wave.push(e)
      }//for j
    }//for k
    this.waves.push(wave);
  }//for i
}//init

/*
  Helper function used to get the monster_id
  OBS: this will not be used in the next version
*/
Wave.prototype.getMonsterType = function(row) {
  return "monster" + (row + 1);
}

/*
  Getter for the monsters in the current lvl
*/
Wave.prototype.getEnemyList = function() {
  return this.waves[this.lvl - 1];
}

/*
  Setter for the monsters in the current lvl
*/
Wave.prototype.setEnemyList = function(list) {
  this.waves[this.lvl - 1] = list;
}

/*
  Function used to change the direction of the monsters
  Each monster has 2 checkpoints, left and right.When the monster reach the cp
  the direction is changed accordingly.
*/
Wave.prototype.changeDirection = function() {
  var list = this.getEnemyList();

  for(var i = 0; i < list.length; i++) {
    var e =  list[i];
    if(e.poz.x > e.rightBorder)
      list[i].vector = -1;

    if(e.poz.x < e.leftBorder)
      list[i].vector = 1;
  }
  this.setEnemyList(list);
}
