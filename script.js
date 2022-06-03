
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