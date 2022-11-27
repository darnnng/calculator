import { AddCommand } from './addCommand.js';
import { SubCommand } from './subCommand.js';
import { DivisionCommand } from './divisionCommand.js';
import { MultiplicationCommand } from './multiplicationCommand.js';
import { XYDegreeCommand } from './xyDegreeCommand.js';
import { XYRootCommand } from './xyRootCommand.js';

export class EqualCommand {
  constructor(prev = 0, operator, current = 0) {
    this.previousValue = +prev;
    this.operator = operator;
    this.currentValue = +current;
    this.history = [];
  }

  execute() {
    this.value = 0;
    let command;

    switch (this.operator) {
      case '+':
        command = new AddCommand(this.previousValue, this.currentValue);
        this.value = command.execute();
        break;
      case '-':
        command = new SubCommand(this.previousValue, this.currentValue);
        this.value = command.execute();
        break;
      case ':':
      case '/':
        command = new DivisionCommand(this.previousValue, this.currentValue);
        this.value = command.execute();
        break;
      case '*':
      case 'X':
        command = new MultiplicationCommand(
          this.previousValue,
          this.currentValue
        );
        this.value = command.execute();
        break;
      case 'ʸ√x':
        command = new XYRootCommand(this.previousValue, this.currentValue);
        this.value = command.execute();
        break;
      case '^':
      case 'xʸ':
        command = new XYDegreeCommand(this.previousValue, this.currentValue);
        this.value = command.execute();
        break;
      default:
        console.log('Нихуя не вышло');
    }

    this.history.push(command);
    return this.value;
  }

  undo() {
    console.log(
      'this: ' +
        this.value +
        ' prev: ' +
        this.previousValue +
        ' cur: ' +
        this.currentValue
    );
    const command = this.history.pop();
    if (command == undefined) return 0;
    this.value = command.undo(this.value);

    return this.value;
  }
}
