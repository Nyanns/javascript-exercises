const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, current) => {
    return total + current
  }, 0);
};

const multiply = function (array) {
  return array.reduce((product, current) => product * current)
};

const power = function (base, exponent) {
  result = 1;
  for (let index = 0; index < exponent; index++) {
    result = result * base;
  }
  return result;
};

const factorial = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let index = 0; index < n; index++) {
      result = result * (n - index);
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
