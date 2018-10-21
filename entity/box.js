function Box(poz, size) {
  this.poz = poz;
  this.size = size;

  this.getLeftCorner = function () {
    return {
      x: this.poz.x - this.size.x / 2,
      y: this.poz.y - this.size.y / 2
    }
  };

  this.getCannonPoz = function() {
    return {
      x: this.poz.x,
      y: this.poz.y
    }
  };
}
