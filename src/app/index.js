//import '/src/styles/app.css';
//при работе комментить
let a;
let s;
// const calc=document.querySelector('.calculator')
// const result=document.querySelector('#result')

const factorial_x = (x_length) => {
  if (x_length < 0) {
    alert('Only positive numbers and zero is allowed');
    return 0;
  }

  let res = 1;
  for (let i = 2; i <= +x_length; i++) {
    res *= i;
  }

  return res;
};

const cubeRoot = (n) => {
  let cbrt = n / 3;
  let temp = 0;

  while (cbrt != temp) {
    temp = cbrt;
    cbrt = (n / (temp * temp) + temp * 2) / 3;
  }
  return cbrt;
};

const numberButtons = document.querySelectorAll('[data-number]');
const operationsButtons = document.querySelectorAll('[data-operations]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const oneX = [
  '%',
  '!',
  'x!',
  '√x',
  'х²',
  '∛x',
  'x³',
  'xʸ',
  '10ˣ',
  '1/x',
  '+/-',
];
const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
);
const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.MOperand = 0;
    this.equalTap = false;
    this.clear();
  }

  appendNumber(number, equalTap) {
    if (number === '.' && this.currentOperand.includes('.')) return;

    if (number === 'MR') {
      this.currentOperand = this.MOperand;
      return;
    }
    if (number === 'MC') {
      this.MOperand = 0;
      return;
    }
    if (number === 'M+') {
      this.MOperand += +this.currentOperand;
      this.last_num = true;
      this.equalTap = true;
      return;
    }
    if (number === 'M-') {
      this.MOperand -= +this.currentOperand;
      this.last_num = true;
      this.equalTap = true;
      return;
    }

    let computation;
    if (oneX.includes(number)) {
      switch (number) {
        case '%':
          computation = this.currentOperand / 100;
          break;
        case 'х²':
          computation = this.currentOperand ** 2;
          break;
        case 'x³':
          computation = this.currentOperand ** 3;
          break;
        case '10ˣ':
          computation = 10 ** this.currentOperand;
          break;
        case '√x':
          if (+this.currentOperand < 0) {
            alert('Only positive numbers and zero is allowed');
            return;
          }
          computation = this.currentOperand ** (1 / 2);
          break;
        case '∛x':
          computation = cubeRoot(this.currentOperand);
          break;
        case '1/x':
          if (this.currentOperand === '0') {
            alert('Error. Division by zero is not allowed');
            return;
          }
          computation = 1 / this.currentOperand;

          break;
        case '!':
        case 'x!':
          computation = factorial_x(this.currentOperand);
          break;
        case '+/-':
          computation = 0 - this.currentOperand;
          break;

        default:
          return;
      }

      this.currentOperand = computation;
      this.equalTap = true;
      return;
    }

    if (equalTap) {
      this.currentOperand = '';
      this.equalTap = false;
    }
    if (this.last_num) {
      this.currentOperand = '';
      this.last_num = false;
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
    if (this.currentOperand.toString().length > 15)
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  chooseOperation(operation) {
    if (this.currentOperand === '' && this.operation !== operation) {
      this.operation = operation;
      return;
    } else if (this.currentOperand === '') return;

    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current =
      this.currentOperand === ''
        ? parseFloat(this.previousOperand)
        : parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = (prev * 10 + current * 10) / 10;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
      case 'X':
        computation = prev * current;
        break;
      case ':':
      case '/':
        if (current === 0) {
          alert('Error. Division by zero is not allowed');
          return;
        }
        computation = prev / current;
        break;
      case 'ʸ√x':
        if (+prev < 0 && current % 2 === 0) {
          alert('Only positive numbers and zero is allowed');
          return;
        }
        computation = prev ** (1 / current);
        break;
      case '^':
      case 'xʸ':
        computation = prev ** current;
        break;

      default:
        return;
    }

    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = '';
    }
  }
}

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText, calculator.equalTap);
    calculator.updateDisplay();
  });
});

operationsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalButton.addEventListener('click', () => {
  calculator.compute();
  calculator.equalTap = calculator.currentOperand !== '' ? true : false;
  calculator.updateDisplay();
});

clearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});

document.addEventListener('keydown', function (event) {
  let patternForNumbers = /[0-9]/g;
  let patternForOperators = /[+\-*/:^]/g;
  if (event.key.match(patternForNumbers)) {
    event.preventDefault();
    calculator.appendNumber(event.key, calculator.equalTap);
    calculator.updateDisplay();
  }
  if (event.key === '.') {
    event.preventDefault();
    calculator.appendNumber(event.key);
    calculator.updateDisplay();
  }
  if (event.key.match(patternForOperators)) {
    event.preventDefault();
    calculator.chooseOperation(event.key);
    calculator.updateDisplay();
  }
  if (event.key === 'Enter' || event.key === '=') {
    event.preventDefault();
    calculator.compute();
    calculator.equalTap = calculator.currentOperand !== '' ? true : false;
    calculator.updateDisplay();
  }
  if (event.key === 'Backspace') {
    event.preventDefault();
    calculator.delete();
    calculator.updateDisplay();
  }
  if (event.key == 'Delete') {
    event.preventDefault();
    calculator.clear();
    calculator.updateDisplay();
  }
  if (event.key == '%' || event.key == '!') {
    event.preventDefault();
    calculator.appendNumber(event.key, calculator.equalTap);
    calculator.equalTap = calculator.currentOperand !== '' ? true : false;
    calculator.updateDisplay();
  }
});
// let memory=0
// let first=''
// let second=''
// let sign=''
// let last_sign= '';
// let Mem_read = false
// let finish=false;

// const nums=['0','1','2','3','4','5','6','7','8','9','.']
// const action=['-','+','X','/','AC','1/x','+/-','%','х²','x³','10ˣ','xʸ', 'ʸ√x', '√x', '∛x', 'x!'];
// const mki=['MC','MR','M+','M-']

// const factorial_x=(x_length)=>{
//     let res = 1
//     for (let i=2; i <= (+x_length); i++)
//     {
//         res *= i;
//     }

//     return res;
// }

// calc.addEventListener('click', function(event) {
//     if (!event.target.classList.contains('btn')) return;
//     last_key=sign;
//     const key=event.target.innerText

//     if (nums.includes(key)) {
//         if (second==='' && sign=='' && Mem_read == false) {
//             first+=key
//             result.innerText=first
//             console.log(first)
//         }
//         // else if (first!=='' && second!=='' && finish) {

//         // }
//         else {
//             second = key == 'MR'?memory:second+key;
//             result.innerText=second;
//             console.log(second);
//         }
//     }

//     Mem_read = false;

//     if (action.includes(key) || mki.includes(key) ) {
//         sign=key;
//         //result.innerText+=sign
//         console.log(sign)
//     }

//     if (key=='AC') {
//         result.innerText='';
//         first='';
//         second='';
//         sign='';
//     }

//     if (key=='+/-') {
//         first=-(+first);
//         result.innerText=''
//         result.innerText+=first;
//     }

//     if (key=='=') {

//         switch(sign) {

//             case "+":
//                 first=+first + +second;
//                 result.innerText=''
//                 result.innerText=first;
//                 second = ''
//                 break;
//             case "-":
//                 first=+first - +second;
//                 result.innerText=''
//                 result.innerText+=first;
//                 second = ''
//                 break;
//             case "X":
//                 first=+first * +second;
//                 result.innerText=''
//                 result.innerText+=first;
//                 second = ''
//                 break;
//             case "/":
//                 first=+first / +second;
//                 result.innerText=''
//                 result.innerText+=first;
//                 second = ''
//                 break;
//             case "1/x":
//                 first= 1/(+first);
//                 result.innerText=''
//                 result.innerText=first;
//                 break;
//             case "%":
//                 first= (+first)/100;
//                 result.innerText='';
//                 result.innerText=first;
//                 break;
//             case "х²":
//                 first= (+first) ** 2;
//                 result.innerText='';
//                 result.innerText=first;
//                 break;
//             case "x³":
//                 first= (+first)**3;
//                 result.innerText='';
//                 result.innerText=first;
//                 break;
//             case "10ˣ":
//                 first= 10**(+first);
//                 result.innerText='';
//                 result.innerText=first;
//                 break;
//             case "xʸ":
//                 first= (+first)**(+second);
//                 result.innerText='';
//                 result.innerText=first;
//                 break;
//             case "ʸ√x":
//                 first = (+first)**(1/(+second))
//                 result.innerText='';
//                 result.innerText=first;
//                 break;
//             case "√x":
//                 first = (+first)**(1/2)
//                 result.innerText='';
//                 result.innerText=first;
//                 break;
//             case "∛x":
//                 first = (+first)**(1/3)
//                 result.innerText='';
//                 result.innerText=first;
//                 break;
//             case "x!":``
//                 first = factorial_x(first);
//                 result.innerText='';
//                 result.innerText=first;
//                 break;

//             default:
//                // result.innerText+=key;
//         }

//     }

//     if (mki.includes(sign)) {
//         //debugger;
//         result.innerText='';
//         switch(sign) {
//             case "MC":
//                 first=0;
//                 memory=0;
//                 break;
//             case "M+":
//                 memory+=(+first);
//                 //first = '';
//                 break;
//             case "M-":
//                 memory-=(+first);
//                 first = '';
//                 break;
//             case "MR":
//                 result.innerText=memory;
//                 Mem_read = true;
//                 break;
//         }

//         sign = '';
//         first = Mem_read==false?'':memory
//     }

// })
