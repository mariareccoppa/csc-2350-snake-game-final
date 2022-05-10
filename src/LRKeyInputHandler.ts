import IInputHandler from "./IInputHandler";
export class LRKeyInputHandler implements IInputHandler {
  private wasLeftArrowPushed: boolean;
  private wasRightArrowPushed: boolean;
  constructor() {
    // at first, neither left nor right arrows have been pushed
    this.wasLeftArrowPushed = false;
    this.wasRightArrowPushed = false;
    window.addEventListener("keydown", (e) => {
      // 'keydown' event handler: what happens when we press a left/right key?
      if (e.key === "ArrowLeft") {
        // if left key was pressed, set 'wasLeftArrowPushed' variable to true
        this.wasLeftArrowPushed = true;
      } else if (e.key === "ArrowRight") {
        // if right key was pressed, set 'wasRightArrowPushed' variable to true
        this.wasRightArrowPushed = true;
      }
    });
  }
  madeLeftMove() {
    return this.wasLeftArrowPushed; // returns current state of left arrow
  }
  madeRightMove() {
    return this.wasRightArrowPushed; // returns current state of right arrow
  }
  resetLeftMove() {
    this.wasLeftArrowPushed = false; // we've already turned left, so left-arrow state now === false
  }
  resetRightMove() {
    this.wasRightArrowPushed = false; // we've already turned right, so right-arrow state now === false
  }
}
export default LRKeyInputHandler;
