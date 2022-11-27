import { onex } from './../operations/onex.js';

export class OneXCommand {
  constructor(current) {
    this.currentValue = current;
  }

  execute() {
    return onex(this.currentValue);
  }

  undo() {
    return this.currentValue;
  }
}
