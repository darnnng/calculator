import { squareRoot } from './../operations/squareRoot.js';

export class SquareRootDegreeCommand {
  constructor(current) {
    this.currentValue = current;
  }

  execute() {
    return squareRoot(this.currentValue);
  }

  undo() {
    return this.currentValue;
  }
}
