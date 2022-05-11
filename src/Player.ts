import Snake from "./Snake";
import WorldModel from "./WorldModel";
import SnakeController from "./SnakeController";

export abstract class Player {
  // 'Player' class for game player, CANNOT be instantiated
  private sc;
  controller: SnakeController;
  constructor(controller) {
    this.sc = controller; // 'sc': snake controller
  }
  abstract makeTurn(); // this calls turnSnakeLeft() on sc if snake is gonna crash into a wall
}

export default Player;
