export class Calculator{
  constructor(prev = 0, current = 0){
    this.previousValue = prev
    this.currentValue = current
    this.history = []
  }

  executeCommand(command) {
    this.value = command.execute();
    this.history.push(command);
  }

  undo() {
    if (!this.history.length) {this.value = 0; return; }
    const command = this.history.pop();
    this.value = command.undo();
  }
}