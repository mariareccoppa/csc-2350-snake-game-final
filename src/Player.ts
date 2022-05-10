export abstract class Player {
  // 'Player' class for game player, CANNOT be instantiated
  private sc;
  controller: SnakeController;
  constructor(controller) {
    this.sc = controller; // 'sc': our snake controller
  }
  abstract makeTurn(); // this calls turnSnakeLeft() on sc if snake is gonna crash into a wall
}

let _snek = new Snake();
let _world = new WorldModel(_snek, 0, 0);
let _controller = new SnakeController(_snek, _world);
export class AvoidWallsPlayer extends Player {
  constructor() {
    super(_controller); // calls the superclass' constructor
  }
  makeTurn() {
    let direction_coordinates = this.controller.snakeDirection(); // first list element: x-dir, second list element: y-dir
    let position_coordinates = this.controller.snakePosition(); // returns Point() w/ snake's current position
    // if snake's direction is left and its x-coordinate == 0 and its y-coordinate < world height, turn snake left
    if (
      direction_coordinates[0] < 0 &&
      position_coordinates.x_value() === 0 &&
      position_coordinates.y_value() < this.controller.worldHeight()
    ) {
      this.controller.turnSnakeLeft();
    }
    // TODO: consider other possibilities where snake could crash into a wall and fix them
  }
}

let new_world = new WorldModel(new Snake(), 0, 0);
export abstract class IWorldView {
  abstract display(new_world: WorldModel): void;
}
