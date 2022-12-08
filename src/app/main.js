import '/src/styles/app.css';
import { Calculator } from './Calculator.js';
import { PercentCommand } from './commands/percentCommand.js';
import { FactorialCommand } from './commands/factorialCommand.js';
import { SecondDegreeCommand } from './commands/secondDegreeCommand.js';
import { ThirdDegreeCommand } from './commands/thirdDegreeCommand.js';
import { CubeRootCommand } from './commands/cubeRootCommand.js';
import { OneXCommand } from './commands/oneXCommand.js';
import { SquareRootDegreeCommand } from './commands/squareRootCommand.js';
import { TenInDegreeCommand } from './commands/tenInDegreeCommand.js';
import { PlusMinusCommand } from './commands/plusMinusCommand.js';
import { EqualCommand } from './commands/equalCommand.js';
import { MCommand } from './commands/MCommand.js';
import { changeTheme } from './changetheme.js';

const numberButtons = document.querySelectorAll('[data-number]');
const operationsButtons = document.querySelectorAll('[data-operations]');
const oneXButtons = document.querySelectorAll('[data-oneX]');
const MButtons = document.querySelectorAll('[data-M]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const delButton = document.querySelector('[data-log]');
let equalTap = false;
const theme = document.querySelector('.light-dark');
const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
);
const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);

const MOperation = new MCommand();
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

changeTheme();
theme.addEventListener('click', changeTheme);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (currentOperandTextElement.innerHTML.length > 15) {
      return;
    }
    if (
      button.innerText === '.' &&
      currentOperandTextElement.innerHTML.includes('.')
    )
      return;
    if (equalTap == true && previousOperandTextElement.innerHTML) {
      equalTap = false;
    }
    if (equalTap == true) {
      currentOperandTextElement.innerHTML = '';
      previousOperandTextElement.innerHTML = '';
      equalTap = false;
    }

    currentOperandTextElement.innerHTML += button.innerText;
  });
});

MButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.innerText === 'MR') {
      currentOperandTextElement.innerHTML = MOperation.readValue();
    }
    if (button.innerText === 'MC') {
      MOperation.clearValue();
    }
    if (button.innerText === 'M+') {
      MOperation.addValue(currentOperandTextElement.innerHTML);
    }
    if (button.innerText === 'M-') {
      MOperation.subValue(currentOperandTextElement.innerHTML);
    }

    equalTap = true;
  });
});

delButton.addEventListener('click', () => {
  console.log(currentOperandTextElement.innerHTML);
  currentOperandTextElement.innerHTML =
    currentOperandTextElement.innerHTML.slice(0, -1);
});

operationsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (previousOperandTextElement.innerHTML) {
      calculator.executeCommand(
        new EqualCommand(
          previousOperandTextElement.innerHTML.split(' ')[0],
          previousOperandTextElement.innerHTML.split(' ')[1],
          currentOperandTextElement.innerHTML
        )
      );
      previousOperandTextElement.innerHTML =
        calculator.value + ' ' + button.innerText;
      currentOperandTextElement.innerHTML = '';
      return;
    }
    previousOperandTextElement.innerHTML =
      currentOperandTextElement.innerHTML + ' ' + button.innerText;

    currentOperandTextElement.innerHTML = '';
  });
});

oneXButtons.forEach((button) => {
  button.addEventListener('click', () => {
    switch (button.innerText) {
      case '%':
        calculator.executeCommand(
          new PercentCommand(currentOperandTextElement.innerHTML)
        );
        break;
      case 'х²':
        calculator.executeCommand(
          new SecondDegreeCommand(currentOperandTextElement.innerHTML)
        );
        break;
      case 'x³':
        calculator.executeCommand(
          new ThirdDegreeCommand(currentOperandTextElement.innerHTML)
        );
        break;
      case '10ˣ':
        calculator.executeCommand(
          new TenInDegreeCommand(currentOperandTextElement.innerHTML)
        );
        break;
      case '√x':
        calculator.executeCommand(
          new SquareRootDegreeCommand(currentOperandTextElement.innerHTML)
        );
        break;
      case '∛x':
        calculator.executeCommand(
          new CubeRootCommand(currentOperandTextElement.innerHTML)
        );
        break;
      case '1/x':
        calculator.executeCommand(
          new OneXCommand(currentOperandTextElement.innerHTML)
        );
        break;
      case '!':
      case 'x!':
        calculator.executeCommand(
          new FactorialCommand(currentOperandTextElement.innerHTML)
        );
        break;
      case '+/-':
        calculator.executeCommand(
          new PlusMinusCommand(currentOperandTextElement.innerHTML)
        );
        break;

      default:
        return;
    }

    equalTap = true;
    currentOperandTextElement.innerHTML =
      calculator.value == 'Infinity' ? 'Error' : calculator.value;
  });
});

equalButton.addEventListener('click', () => {
  calculator.executeCommand(
    new EqualCommand(
      previousOperandTextElement.innerHTML.split(' ')[0],
      previousOperandTextElement.innerHTML.split(' ')[1],
      currentOperandTextElement.innerHTML
    )
  );

  equalTap = true;
  currentOperandTextElement.innerHTML = calculator.value;
  previousOperandTextElement.innerHTML = '';
});

clearButton.addEventListener('click', () => {
  previousOperandTextElement.innerHTML = '';
  currentOperandTextElement.innerHTML = '';
});

deleteButton.addEventListener('click', () => {
  calculator.undo();
  currentOperandTextElement.innerHTML = calculator.value;
});

document.addEventListener('keydown', function (event) {
  let patternForNumbers = /[0-9]/g;
  let patternForOperators = /[+\-*/:^]/g;
  if (event.key.match(patternForNumbers)) {
    event.preventDefault();
    if (event.key === '.' && currentOperandTextElement.innerHTML.includes('.'))
      return;
    currentOperandTextElement.innerHTML += event.key;
  }
  if (event.key === '.') {
    event.preventDefault();
    if (event.key === '.' && currentOperandTextElement.innerHTML.includes('.'))
      return;
    currentOperandTextElement.innerHTML += event.key;
  }
  if (event.key.match(patternForOperators)) {
    event.preventDefault();
    previousOperandTextElement.innerHTML =
      currentOperandTextElement.innerHTML + ' ' + event.key;
    currentOperandTextElement.innerHTML = '';
  }
  if (event.key === 'Enter' || event.key === '=') {
    event.preventDefault();
    calculator.executeCommand(
      new EqualCommand(
        previousOperandTextElement.innerHTML.split(' ')[0],
        previousOperandTextElement.innerHTML.split(' ')[1],
        currentOperandTextElement.innerHTML
      )
    );

    currentOperandTextElement.innerHTML = calculator.value;
  }
  if (event.key === 'Backspace') {
    event.preventDefault();
    currentOperandTextElement.innerHTML =
      currentOperandTextElement.innerHTML.slice(0, -1);
  }
  if (event.key == 'Delete') {
    event.preventDefault();
    calculator.undo();
    currentOperandTextElement.innerHTML = calculator.value;
  }
  if (event.key == '%' || event.key == '!') {
    event.preventDefault();
    if (event.key == '%')
      calculator.executeCommand(
        new PercentCommand(currentOperandTextElement.innerHTML)
      );
    else
      calculator.executeCommand(
        new FactorialCommand(currentOperandTextElement.innerHTML)
      );

    currentOperandTextElement.innerHTML = calculator.value;
  }
});
