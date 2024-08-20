const convertToCelsius = function (value) {
  let celsius = 0;
  let convert = ((value - 32) * 5 / 9);
  convert = Math.round(convert * 10) / 10;
  celsius = convert;
  return celsius;
};

const convertToFahrenheit = function (value) {
  const baseFahrenheit = 32;
  let convert = ((value * 9) / 5) + 32;
  convert = Math.round(convert * 10) / 10;
  let fahrenheit = convert;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
