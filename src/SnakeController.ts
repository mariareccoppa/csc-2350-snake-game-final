import WorldModel from "./WorldModel";
import Snake from "./Snake";

let world = new WorldModel(new Snake(), 0, 0); // new world for the game
export class SnakeController {
  private slitherer; // our cool snake
  private snakeWorld; // our game world
  constructor(_snake, world) {
    this.slitherer = _snake; // assigns our cool snake to the game snake
    this.snakeWorld = world; // assigns our game world to the game world
  }
  turnSnakeLeft() {
    this.slitherer.turnLeft(); // turns the snake left
  }
  turnSnakeRight() {
    this.slitherer.turnRight(); // turns the snake right
  }
  get snakePosition() {
    return this.slitherer.position(); // returns our snake's current position
  }
  get snakeDirection() {
    return this.slitherer.direction(); // returns our snake's current direction
  }
  get worldWidth() {
    return this.snakeWorld.width(); // returns our game world's current width
  }
  get worldHeight() {
    return this.snakeWorld.height(); // returns our game world's current height
  }
}
export default SnakeController;
