import WorldModel from "./WorldModel";
import IWorldView from "./IWorldView";

export class CanvasWorldView implements IWorldView {
  private scalingFactor: number; // 'scalingFactor' -> number
  private worldCanvas: HTMLCanvasElement; // 'worldCanvas' -> HTML canvas element for drawing stuff
  private context: CanvasRenderingContext2D; // 'context' -> provides 2D rendering context for drawing surface of a canvas element
  constructor(scalingFactor: number) {
    this.scalingFactor = scalingFactor; // 'scalingFactor': # of pixels squared that each model grid coordinate represents
    this.worldCanvas = document.createElement("canvas"); // 'worldCanvas': create a new canvas element for the game
    this.context = this.worldCanvas.getContext("2d")!; // 'context': 2D context ("drawing paper") for the canvas element.
    // -> this assignment is NOT null
    document.body.appendChild(this.worldCanvas); // append the canvas element to page body
  }
  display(new_world: WorldModel): void {
    // worldCanvas.width: (scalingFactor * new_world.width()) -> canvas width is scale factor times the given world's width
    this.worldCanvas.width = this.scalingFactor * new_world.width();
    // worldCanvas.height: (scalingFactor * new_world.height()) -> canvas height is scale factor times the given world's height
    this.worldCanvas.height = this.scalingFactor * new_world.height();
    let _width_ = this.scalingFactor; // width == snake_size * scaling_factor (snake_size is 1)
    let _height_ = this.scalingFactor; // height == snake_size * scaling_factor (snake_size is 1)
    let x = new_world.snake().x_value(); // snake's current position's x-value
    let y = new_world.snake().y_value(); // snake's current position's y-value
    this.context.fillStyle = "green"; // green snake boi
    this.context.lineWidth = 10; // so we can see the lines
    this.context.fillRect(x, y, _width_, _height_); // fill a rectangle that has the width and height of the scaling factor of the snake's snake
  }
}
