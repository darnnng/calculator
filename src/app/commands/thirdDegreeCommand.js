import { thirdDegree } from './../operations/degrees.js';

export class ThirdDegreeCommand {
  constructor(current) {
    this.currentValue = current;
  }

  execute() {
    return thirdDegree(this.currentValue);
  }

  undo() {
    return this.currentValue;
  }
}
