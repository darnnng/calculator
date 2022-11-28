import { secondDegree } from './../operations/degrees.js';

export class SecondDegreeCommand {
  constructor(current) {
    this.currentValue = current;
  }

  execute() {
    return secondDegree(this.currentValue);
  }

  undo() {
    return this.currentValue;
  }
}
