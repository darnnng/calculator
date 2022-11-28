import { sum } from './../operations/sum.js';
import { substraction } from './../operations/substraction.js';

export class SubCommand {
  constructor(prev, current) {
    this.previousValue = prev;
    this.currentValue = current;
  }

  execute() {
    return substraction(this.previousValue, this.currentValue);
  }

  undo(currentValue) {
    return sum(currentValue, this.currentValue);
  }
}
