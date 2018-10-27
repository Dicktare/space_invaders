function Button(poz, size, text) {
  this.poz = poz;
  this.size = size;
  this.isSelected = false;
  this.text = text;

  this.onImg = new Image(101, 41);
  this.onImg.src = "assets/normal_button.png";
  this.offImg = new Image(101, 41);
  this.offImg.src = "assets/normal_button.png";
  this.init();
}

Button.prototype.init = function() {
  this.text.poz = {
    x: this.poz.x + this.size.x / 4,
    y: this.poz.y + this.size.y / 2
  };
}

Button.prototype.render = function() {
  ctx.drawImage(this.onImg,
                0, 0,
                101, 41,
                this.poz.x, this.poz.y,
                this.size.x, this.size.y);

 ctx.fillStyle = "blue";
 ctx.font = this.text.size + "px Arial";
 ctx.fillText(this.text.name, this.text.poz.x, this.text.poz.y);
}
