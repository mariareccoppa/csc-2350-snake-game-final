export abstract class IInputHandler {
  abstract madeLeftMove(): boolean; // this checks if player turned left or not
  abstract madeRightMove(): boolean; // this checks if player turned right or not
  abstract resetLeftMove(): void; // this acknowledges that player turned left and resets the left-arrow state to false
  abstract resetRightMove(): void; // this acknowledges that player turned right and resets the right-arrow state to false
}
export default IInputHandler;
