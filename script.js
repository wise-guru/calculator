let previousNum = '';
let currentNum = '';
let resultNum = '';
let previousResult = '';
let operator = '';

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

window.addEventListener('keydown', handleKeys)

const operate = function () {
    previousNum = Number(previousNum)
    currentNum = Number(currentNum)
  

    if (operator === '+') {
        previousNum = previousNum + currentNum;
    }   else if (operator === '-') {
        previousNum = previousNum - currentNum;
    }   else if (operator === '*') {
        previousNum = previousNum * currentNum;
    }   else if (operator === '/') {
        if(currentNum <= 0) {
            previousNum = "Error, cannot divide by 0"
            previousScreenNumber.textContent = ''
            currentScreenNumber.textContent = previousNum;
            operator = ''
            return;
        }
        previousNum = previousNum / currentNum;
    }   else if (operator === '^') {
        previousNum = Math.pow(previousNum, currentNum)
    } 
    
    resultNum = roundNumber(resultNum)
    // previousNum = previousNum.toString();
    resultNum = resultNum.toString();
    previousScreenNumber.textContent = `${previousNum}`;
    screenResults();
  }

  function screenResults() {
      if (resultNum.length <= 11) {
          currentScreenNumber.textContent =resultNum;
      } else {
          currentScreenNumber.textContent = resultNum.slice(0, 14) + "..."
      }

    //   previousScreenNumber.textContent = '';
      operator = '';
      currentNum = '';
  }

  function roundNumber(num) {
      return Math.round(num * 100000) / 100000;
  }

  function clearCalc() {
      currentNum = '';
      previousNum = '';
      operator = '';
      previousScreenNumber.textContent = '';
      currentScreenNumber.textContent = '';
  }

  function deleteCalc() {
    if (currentNum !== "") {
        currentNum = currentNum.slice(0, -1);
        currentScreenNumber.textContent = currentNum;
        if (currentNum === "") {
          currentScreenNumber.textContent = "";
        }
      }
      if (currentNum === "" && previousNum !== "" && operator === "") {
        previousNum = previousNum.slice(0, -1);
        currentScreenNumber.textContent = previousNum;
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

equal.addEventListener('click', () => {
    if (currentNum != '' && previousNum != '') {
        operate();
    }
});

decimal.addEventListener('click', addDecimal);
clear.addEventListener('click', clearCalc);
backspace.addEventListener('click', deleteCalc);

function handleNumber(number) {
    if(previousNum !== '' && currentNum == '' && operator === '' ) {
        previousNum = ''
        previousScreenNumber.textContent = '';
        currentScreenNumber.textContent = currentNum;
    }

    if(currentNum.length <= 11) {
    currentNum += number;
    currentScreenNumber.textContent = currentNum;
    }
}

function handleOperator(op) {
  if (previousNum === "") {
      previousNum = currentNum
      operatorCheck(op);
  } else if (currentNum === "") {
      operatorCheck(op)
  } else {
      operate();
      operator = op;
      currentScreenNumber.textContent = ""
      previousScreenNumber.textContent = `${previousNum} ${operator}`;
  }
    
    
    
}

function operatorCheck(text) {
    
    operator = text;
    previousScreenNumber.textContent = `${previousNum} ${operator}`;
    currentScreenNumber.textContent = '';
    currentNum = '';
}

function addDecimal() {
    if(!currentNum.includes('.')) {
        currentNum += ".";
        currentScreenNumber.textContent = currentNum;
    }
}

function handleKeys(e) {
    e.preventDefault()
    if (e.key >= 0 && e.key <= 9) {
        handleNumber(e.key);
    }
    if (e.key === "Enter" || "=" && currentNum != '' && previousNum != '') {
        operate()
    }
    if (e.key === "+" || "-" || "/" || "*") {
        handleOperator(e.key)
    }
    if (e.key === ".") {
        addDecimal();
    }
    if(e.key === "Backspace") {
        handleDelete();
    }
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





