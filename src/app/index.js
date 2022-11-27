//import "/src/styles/app.css"

const calc = document.querySelector('.calculator');
const result = document.querySelector('#result');

let memory = 0;
let first = '';
let second = '';
let sign = '';
let Mem_read = false;

const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = [
  '-',
  '+',
  'X',
  '/',
  'AC',
  '1/x',
  '+/-',
  '%',
  'х²',
  'x³',
  '10ˣ',
  'xʸ',
  'ʸ√x',
  '√x',
  '∛x',
  'x!',
];
const mki = ['MC', 'MR', 'M+', 'M-'];

const factorial_x = (x_length) => {
  let res = 1;
  for (let i = 2; i <= +x_length; i++) {
    res *= i;
  }

  return res;
};

calc.addEventListener('click', function (event) {
  if (!event.target.classList.contains('btn')) return;
  const key = event.target.innerText;

  if (nums.includes(key)) {
    if (second === '' && sign == '' && Mem_read == false) {
      first += key;
      result.innerText = first;
      console.log(first);
    } else {
      second = key == 'MR' ? memory : second + key;
      result.innerText = second;
      console.log(second);
    }
  }

  Mem_read = false;

  if (action.includes(key) || mki.includes(key)) {
    sign = key;
    //result.innerText+=sign
    console.log(sign);
  }

  if (key == 'AC') {
    result.innerText = '';
    first = '';
    second = '';
    sign = '';
  }

  if (key == '+/-') {
    first = -+first;
    result.innerText = '';
    result.innerText += first;
  }

  if (key == '=') {
    switch (sign) {
      case '+':
        first = +first + +second;
        result.innerText = '';
        result.innerText = first;
        second = '';
        break;
      case '-':
        first = +first - +second;
        result.innerText = '';
        result.innerText += first;
        second = '';
        break;
      case 'X':
        first = +first * +second;
        result.innerText = '';
        result.innerText += first;
        second = '';
        break;
      case '/':
        first = +first / +second;
        result.innerText = '';
        result.innerText += first;
        second = '';
        break;
      case '1/x':
        first = 1 / +first;
        result.innerText = '';
        result.innerText = first;
        break;
      case '%':
        first = +first / 100;
        result.innerText = '';
        result.innerText = first;
        break;
      case 'х²':
        first = (+first) ** 2;
        result.innerText = '';
        result.innerText = first;
        break;
      case 'x³':
        first = (+first) ** 3;
        result.innerText = '';
        result.innerText = first;
        break;
      case '10ˣ':
        first = 10 ** +first;
        result.innerText = '';
        result.innerText = first;
        break;
      case 'xʸ':
        first = (+first) ** +second;
        result.innerText = '';
        result.innerText = first;
        break;
      case 'ʸ√x':
        first = (+first) ** (1 / +second);
        result.innerText = '';
        result.innerText = first;
        break;
      case '√x':
        first = (+first) ** (1 / 2);
        result.innerText = '';
        result.innerText = first;
        break;
      case '∛x':
        first = (+first) ** (1 / 3);
        result.innerText = '';
        result.innerText = first;
        break;
      case 'x!':
        ``;
        first = factorial_x(first);
        result.innerText = '';
        result.innerText = first;
        break;

      default:
      // result.innerText+=key;
    }
  }

  if (mki.includes(sign)) {
    //debugger;
    result.innerText = '';
    switch (sign) {
      case 'MC':
        first = 0;
        memory = 0;
        break;
      case 'M+':
        memory += +first;
        //first = '';
        break;
      case 'M-':
        memory -= +first;
        first = '';
        break;
      case 'MR':
        result.innerText = memory;
        Mem_read = true;
        break;
    }

    sign = '';
    first = Mem_read == false ? '' : memory;
  }
});
