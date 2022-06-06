
const add = function(a, b) {
    return (a + b);
  };
  
  add();

  const subtract = function(a, b) {
      return (a - b);
  };
  
  const sum = function(array) {
      return array.reduce((total, current) => total + current, 0);
  };
  
  const multiply = function(array) {
    return array.length
    ? array.reduce((total, nextItem) => total * nextItem)
    : 0;
  };

  const divide = function(a, b) {
      return a / b;
  }
  
  const power = function(a, b) {
    return (Math.pow(a, b))
      
  };


  
  const factorial = function(num) {
    let product = 1;
  
    if (num === 0) return 1;
    for (let i = num; i > 0; i--) {
      product *= i;
    }
    return product;
  };

  const operate = function (a, opr, b) {
      if (opr = '+') return add(a, b);
      if (opr = '-') return subtract(a, b);
      if (opr = '*') return multiply(a, b);
      if (opr = '/') return divide(a, b);
      if (opr = '^') return power(a, b);
      if (opr = '!') return factorial(a, b);
  }

  const screen = document.querySelector('#screen')
  const buttons = document.querySelectorAll('button')
 
//   const defaultScreen = document.createElement('div')
//   defaultScreen.textContent = 0;
//   defaultScreen.classList.add('defaultScreen')
//   screen.appendChild(defaultScreen);
  

  function numClick(num) {
      screen.textContent += num;
  }

  buttons.forEach((input) => {
      input.onclick = () => {
          if (input.id == 'clear') {
              screen.textContent = '0';
          } else if (input.id == 'backspace') {
              let string = screen.textContent.toString();
              string.textContent = string.substr(0, string.length-1)
          } else if (screen.textContent != '' && input.id == 'equal') {
            screen.textContent = operate();
          } else if (screen.textContent == '' && input.id == 'equal') {
              screen.textContent = '0';
              setTimeout(() => (screen.textContent = ''), 2000);
          } else {
              screen.textContent = input.id;
          }
      }
  })

const toggleThemeBtn = document.querySelector('.toggle-theme');
const calculator = document.querySelector('.calculator')
const toggleIcon = document.querySelector('.toggle-icon')
let darkMode = true;

toggleThemeBtn.onclick = () => {
    calculator.classList.toggle('dark');
    toggleThemeBtn.classList.toggle('active');
    darkMode  = !darkMode;
}


