class Point {
  // point with (x, y) coordinates
  private xcoord = 0;
  private ycoord = 0;
  constructor(x: number, y: number) {
    // initializing the coordinates
    this.xcoord = x;
    this.ycoord = y;
  }
  get x_value() {
    return this.xcoord; // returns x coordinate
  }
  get y_value() {
    return this.ycoord; // returns y coordinate
  }
}
export default Point;
