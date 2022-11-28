import { division } from './../operations/division.js';
import { multiplication } from './../operations/multiplication.js';

export class MultiplicationCommand {
  constructor(prev, current) {
    this.previousValue = prev;
    this.currentValue = current;
  }
  execute() {
    return multiplication(this.previousValue, this.currentValue);
  }
  undo(currentValue) {
    return division(currentValue, this.currentValue);
  }
}
