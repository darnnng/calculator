export class MCommand {
  constructor() {
    this.MOperand = 0;
  }

  addValue(current) {
    this.MOperand += +current;
  }

  subValue(current) {
    this.MOperand -= +current;
  }

  readValue() {
    return this.MOperand;
  }

  clearValue() {
    this.MOperand = 0;
  }
}
