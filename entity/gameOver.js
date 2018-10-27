function gameOver() {
  this.bgImg = new Image(600, 600);
  this.bgImg.src = "assets/over_bg.png";
  this.buttons = [];
  this.init();
}

gameOver.prototype.init = function() {
  var btnData = menuButtonOver;
  var textSize = menuButtonOver.textSize;
  var btnSize = menuButtonOver.size;

  for(var i = 0; i < btnData.btnNum; i++) {
    var poz = {x: btnData.start.x,
               y: btnData.start.y + i * (btnData.size.y + btnData.offset.y)}
    var text = { name: btnData.actions[i],
                 size : menuButtonsInfo.size}
    var b = new Button(poz, btnSize, text);
    this.buttons.push(b)
  }
}

gameOver.prototype.render = function() {
  ctx.drawImage(this.bgImg, 0, 0, 600, 600);
  for(var i = 0; i < this.buttons.length; i++) {
    this.buttons[i].render();
  }
}
