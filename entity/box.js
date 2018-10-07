function Box(poz, size) {
  this.poz = poz;
  this.size = size;
}

Box.prototype.getLeftCorner = function () {
  return {
    x: this.poz.x - this.size.x / 2,
    y: this.poz.y - this.size.y / 2
  }
};
