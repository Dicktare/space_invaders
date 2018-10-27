function Menu() {
  this.bgImg = new Image(600, 600);
  this.bgImg.src = "assets/menu_bg.png"

  this.stars = [];
  this.buttons = [];
  this.init();
}

Menu.prototype.init = function() {
  var s1Data = menuInfo[0];
  var s1 = new Star(s1Data, s1Data.poz, s1Data.size, s1Data.timer, s1Data.updateTick);
  var s2Data = menuInfo[1];
  var s2 = new Star(s2Data, s2Data.poz, s2Data.size, s2Data.timer, s2Data.updateTick);
  this.stars.push(s1);
  this.stars.push(s2);

  var btnData = menuButtonsInfo;
  var textSize = menuButtonsInfo.textSize;
  var btnSize = menuButtonsInfo.size;


  for(var i = 0; i < btnData.btnNum; i++) {
    var poz = {x: btnData.start.x,
               y: btnData.start.y + i * (btnData.size.y + btnData.offset.y)}
    var text = { name: btnData.actions[i],
                 size : menuButtonsInfo.textSize}
    var b = new Button(poz, btnSize, text);
    this.buttons.push(b)
  }
}

Menu.prototype.render = function() {
  ctx.drawImage(this.bgImg, 0, 0, 600, 600);
  for(var i = 0; i < this.stars.length; i++) {
    this.stars[i].render();
  }

  for(var i = 0; i < this.buttons.length; i++) {
    this.buttons[i].render();
  }
}

Menu.prototype.updateStars = function() {
  for(var i = 0; i < this.stars.length; i++) {
    this.stars[i].update();
  }
}
