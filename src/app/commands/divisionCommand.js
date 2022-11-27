import { division } from './../operations/division.js';
import { multiplication } from './../operations/multiplication.js';

export class DivisionCommand {
  constructor(prev, current) {
    this.previousValue = prev;
    this.currentValue = current;
  }
  execute() {
    return division(this.previousValue, this.currentValue);
  }
  undo(currentValue) {
    return multiplication(currentValue, this.currentValue);
  }
}
