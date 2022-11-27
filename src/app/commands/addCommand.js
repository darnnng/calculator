import { sum } from './../operations/sum.js';
import { substraction } from './../operations/substraction.js';

export class AddCommand {
  constructor(prev = 0, current) {
    this.previousValue = prev;
    this.currentValue = current;
  }

  execute() {
    return sum(this.currentValue, this.previousValue);
  }

  undo(currentValue) {
    return substraction(currentValue, this.currentValue);
  }
}
