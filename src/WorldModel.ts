import IWorldView from "./IWorldView";
import Snake from "./Snake";

let snek = new Snake();
export class WorldModel {
  private new_snake; // variable for the 'Snake' object
  private _width; // width of game world floor
  private _height; // height of game world floor
  private worldView: IWorldView; // obj to view the world with
  constructor(snek, w, h) {
    this.new_snake = snek;
    this._width = w;
    this._height = h;
    this.worldView = null;
  }
  set view(world_view: IWorldView) {
    this.worldView = world_view;
  } // sets the 'world_view' for the game world to the given view
  get snake() {
    return this.new_snake;
  } // returns the 'Snake' object
  get width() {
    return this._width;
  } // returns the game world width
  get height() {
    return this._height;
  } // returns the game world height
  update(steps) {
    this.snake().move("up", steps); // snake moves 'steps' up b/c it faces forward by default
    if (this.worldView !== null) {
      this.worldView.display(this);
    } // if the world model's worldview is NOT null,
    // then display that worldview. Then, the worldview updates every time the model does
  }
}
export default WorldModel;
