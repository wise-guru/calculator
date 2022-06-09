let previousNum = '';
let currentNum = '';
let resultNum = '';
let operator = '';


//Functions for calculations//
// const add = function() {
//     previousNum = previousNum + currentNum;
//   };
  
//   add();

//   const subtract = function() {
//     previousNum = previousNum - currentNum;
//   };
  
//   const sum = function(array) {
//       previousNum = array.reduce((previousNum, currentNum) => previousNum + currentNum, 0);
//   };
  
//   const multiply = function(array) {
//     previousNum = array.length
//     ? array.reduce((previousNum, currentNum) => previousNum * currentNum)
//     : 0;
//   };

//   const divide = function() {
//       return previousNum / currentNum;
//   }
  
//   const power = function() {
//     previousNum = (Math.pow(previousNum, currentNum))
      
//   };

//      const factorial = function(num) {
//     let product = 1;
  
//     if (previousNum === 0) previousNum = 1;
//     for (let i = num; i > 0; i--) {
//       product *= i;
//     }
//     previousNum = product;
//   };




    //end of fucntions for calculations//


const screen = document.querySelector('#screen')
const buttons = document.querySelectorAll('button')
const numberBtns = document.querySelectorAll('.btn-number');
const operators = document.querySelectorAll('.btn-operator')
const calculator = document.querySelector('.calculator')
const previousScreenNumber = document.querySelector('.previous-number')
const currentScreenNumber = document.querySelector('.current-number')
const equal = document.querySelector('.btn-equal')
const decimal = document.querySelector('#decimal')
const clear = document.querySelector('#clear')
const backspace = document.querySelector('#backspace')

const operate = function () {
    previousNum = Number(previousNum)
    currentNum = Number(currentNum)

    if (operator === '+') {
        resultNum = previousNum + currentNum;
    }   else if (operator === '-') {
        resultNum = previousNum - currentNum;
    }   else if (operator === '*') {
        resultNum = previousNum * currentNum;
    }   else if (operator === '/') {
        if(currentNum <= 0) {
            previousNum = "Error, cannot divide by 0"
            previousScreenNumber.textContent = ''
            currentScreenNumber.textContent = previousNum;
            operator = ''
            return;
        }
        resultNum = previousNum / currentNum;
    }   else if (operator === '^') {
        resultNum = Math.pow(previousNum, currentNum)
    }   else if (operator = 'clear') {
        previousScreenNumber.textContent = ''
        currentScreenNumber.textContent = '';
    }
    
    resultNum = roundNumber(resultNum)
    // previousNum = previousNum.toString();
    resultNum = resultNum.toString();
    previousScreenNumber.textContent = `${previousNum} ${operator} ${currentNum} =`;
    screenResults();
  }

  function screenResults() {
      if (resultNum.length <= 11) {
          currentScreenNumber.textContent =resultNum;
      } else {
          currentScreenNumber.textContent = resultNum.slice(0, 14) + "..."
      }
  }

  function roundNumber(num) {
      return Math.round(num * 100000) / 100000;
  }

  function clearCalc() {
      currentNum = '';
      previousNum = '';
      operator = '';
      previousScreenNumber.textContent = '';
      currentScreenNumber.textContent = '0';
  }

  function deleteCalc() {
    if (currentNum !== "") {
        currentNum = currentNum.slice(0, -1);
        currentDisplayNumber.textContent = currentNum;
        if (currentNum === "") {
          currentDisplayNumber.textContent = "0";
        }
      }
      if (currentNum === "" && previousNum !== "" && operator === "") {
        previousNum = previousNum.slice(0, -1);
        currentDisplayNumber.textContent = previousNum;
      }

  }



numberBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleNumber(e.target.textContent)
 })
})

operators.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleOperator(e.target.id);
    })
})

equal.addEventListener('click', operate);
clear.addEventListener('click', clearCalc)
backspace.addEventListener('click', deleteCalc)

function handleNumber(number) {
    currentNum += number;
    currentScreenNumber.textContent = currentNum;
}

function handleOperator(op) {
    operator = op;
    previousNum = currentNum;
    previousScreenNumber.textContent = `${previousNum} ${operator}`;
    currentNum = '';
    currentScreenNumber.textContent = '';
}



  










const toggleThemeBtn = document.querySelector('.toggle-theme');
// const calculator = document.querySelector('.calculator')
const toggleIcon = document.querySelector('.toggle-icon')
let darkMode = true;

toggleThemeBtn.onclick = () => {
    calculator.classList.toggle('dark');
    toggleThemeBtn.classList.toggle('active');
    darkMode  = !darkMode;
}





//   buttons.forEach((input) => {
//       input.onclick = () => {
//           if (input.id == 'clear') {
//               screen.textContent = '';
//           } else if (input.id == 'backspace') {
//               let string = screen.textContent.toString();
//               string.textContent = string.slice(0, string.length-1);
//           } else if (screen.textContent != '' && input.id == 'equal') {
//             screen.textContent = operate();
//           } else if (screen.textContent == '' && input.id == 'equal') {
//               screen.textContent = 0;
//               setTimeout(() => (screen.textContent = ''), 2000);
//           } else if (screen.textContent == '.') {
//               decimalCheck();
//           } else {
//               screen.textContent += input.id;
//           }
//       }
//   })
