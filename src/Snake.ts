import Point from "./Point";
class Snake {
  private currentPosition;
  private verticalDirection = 0; // verticalDirection: if -1, then Snake is facing backwards. If 1, then Snake is facing forwards
  private horizontalDirection = 0; // horizontalDirection: left == -1 and right == 1 when snake is facing forwards
  // opposite when snake is facing backwards b/c its left/right is NOT our left/right

  constructor() {
    this.currentPosition = new Point(0, 0); // every new Snake starts @ a Point (0, 0)
    this.verticalDirection = 1; // every new Snake is facing forward
    this.horizontalDirection = 0; // new Snakes have not moved left/right yet
  }

  get position() {
    return this.currentPosition; // returns current position of Snake
  }

  get direction() {
    return [this.horizontalDirection, this.verticalDirection]; // whichever direction isn't 0 right now is the current direction
  }

  turn() {
    // if Snake is facing backwards (currentDirection == -1), turn it to face forwards
    if (this.verticalDirection === -1) this.verticalDirection = 1;
    // if Snake is facing forwards (currentDirection == 1), turn it to face backwards
    else if (this.verticalDirection === 1) this.verticalDirection = -1;
  }

  turnLeft() {
    // turn the snake left
    if (this.verticalDirection === -1) {
      // snake is facing backwards, so its left is our right
      this.horizontalDirection = 1;
      this.verticalDirection = 0; // snake is facing left, not backwards
    } else if (this.verticalDirection === 1) {
      // snake is facing forwards, so its left is our left
      this.horizontalDirection = -1;
      this.verticalDirection = 0; // snake is facing left, not backwards
    }
  }

  turnRight() {
    // turn the snake right
    if (this.verticalDirection === -1) {
      // snake is facing backwards, so its right is our left
      this.horizontalDirection = -1;
      this.verticalDirection = 0; // snake is facing right, not backwards
    } else if (this.verticalDirection === 1) {
      // snake is facing forwards, so its right is our right
      this.horizontalDirection = 1;
      this.verticalDirection = 0; // snake is facing right, not backwards
    }
  }

  move(direction: string, squares: number) {
    // 'squares': number of squares I want to move by
    // 'direction': the direction I want to move +1/-1 in (up, down, left, right)
    // 'direction' has to be case-insensitive, so I'll convert it to lowercase in the func, use that value afterwards
    let lowercaseDirection = direction.toLowerCase();
    let x = this.currentPosition.x_value(); // x-value of current position
    let y = this.currentPosition.y_value(); // y-value of current position
    if (lowercaseDirection === "up") {
      // move up. The Snake must face forward for this
      if (this.verticalDirection === -1) this.turn(); // turning forwards
      // move up now that I know Snake is facing forwards. x-value doesn't change, y-value increments by 'squares'
      y += squares;
      this.currentPosition = new Point(x, y); // new current position of Snake
    } else if (lowercaseDirection === "down") {
      // move down. Snake must face backward for this
      if (this.verticalDirection === 1) this.turn(); // turning backwards
      // move down now that I know Snake is facing backwards. x-value doesn't change, y-value decrements by 'squares'
      y -= squares;
      this.currentPosition = new Point(x, y); // new current position of Snake
    } else if (lowercaseDirection === "left") {
      // move left. Snake must face left for this
      this.turnLeft(); // first step: turn left
      // but is the snake's left our left or our right? Our right: horizontalDirection == 1, our left: horizontalDirection == -1
      if (this.horizontalDirection === 1) {
        // snake was facing backwards and turned to its left from there (in this case, our right), so I'll move on + x-axis
        x += squares; // y-value doesn't change, x-value increments by 'squares'
        this.currentPosition = new Point(x, y); // new current position of Snake
      } else if (this.horizontalDirection === -1) {
        // snake was facing forwards and turned to its/our left from there, so I'll move on - x-axis
        x -= squares; // y-value doesn't change, x-value decrements by 'squares'
        this.currentPosition = new Point(x, y); // new current position of Snake
      }
    } else if (lowercaseDirection === "right") {
      // move right
      this.turnRight(); // first step: turn right
      // but is the snake facing its right or our right? Our right: horizontalDirection == 1, our left: horizontalDirection == -1
      if (this.horizontalDirection === -1) {
        // snake was facing backwards and turned to its right from there (in this case, our left), so I'll move on - x-axis
        x -= squares; // y-value doesn't change, x-value decrements by 'squares'
        this.currentPosition = new Point(x, y); // new current position of Snake
      } else if (this.horizontalDirection === 1) {
        // snake was facing forwards and turned to its/our right from there, so I'll move on the + x-axis
        x += squares; // y-value doesn't change, x-value increments by 'squares'
        this.currentPosition = new Point(x, y); // new current position of Snake
      }
    } else console.log("ERROR - invalid direction. Please try again.");
  }
}
export default Snake;
