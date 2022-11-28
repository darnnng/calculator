export class PlusMinusCommand{
    constructor(current) {
        this.currentValue = current;
    }
    execute() {
        return -this.currentValue;
    }
    undo() {
        return this.currentValue;
    }
}