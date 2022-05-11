import Player from "./Player"


export class AvoidWallsPlayer extends Player {
  constructor() {
    super(controller); // calls the superclass' constructor
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
  }