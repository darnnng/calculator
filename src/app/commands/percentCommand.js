import { percent } from './../operations/percent.js';

export class PercentCommand {
  constructor(current) {
    this.currentValue = current;
  }
  execute() {
    return percent(this.currentValue);
  }
  undo() {
    return this.currentValue;
  }
}
