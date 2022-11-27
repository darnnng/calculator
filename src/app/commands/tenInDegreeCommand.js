import { tenInDegree } from './../operations/degrees.js';

export class TenInDegreeCommand {
  constructor(current) {
    this.currentValue = current;
  }

  execute() {
    return tenInDegree(this.currentValue);
  }

  undo() {
    return this.currentValue;
  }
}
