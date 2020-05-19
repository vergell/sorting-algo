class Lines {
  constructor(x, y, y2, strWeight) {
    this.x = x;
    this.y = y;
    this.y2 = y2;
    this.strWeight = strWeight;
    this.val = y2;
  }
  render(r, g, b) {
    stroke(r, g, b);
    strokeWeight(this.strWeight);
    strokeCap(PROJECT);
    line(this.x, this.y, this.x, this.y - this.y2);
  }
  valY() {
    return this.y2;
  }
  change(y) {
    this.y2 = y;
  }
  valX() {
    return this.x;
  }
  changeX(x) {
    this.x = x;
  }
}
