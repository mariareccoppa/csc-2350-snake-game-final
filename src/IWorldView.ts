import WorldModel from "./WorldModel";
import Snake from "./Snake";

let new_world = new WorldModel(new Snake(), 0, 0);
export abstract class IWorldView {
  abstract display(new_world: WorldModel): void;
}
export default IWorldView;
