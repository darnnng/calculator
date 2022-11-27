import { factorial } from './../operations/factorial.js';

export class FactorialCommand {
  constructor(current) {
    this.currentValue = current;
  }

  execute() {
    return factorial(this.currentValue);
  }

  undo() {
    return this.currentValue;
  }
}
