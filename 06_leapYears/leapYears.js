const leapYears = function (year) {
    // Check if the year is divisible by 4
    const isFour = year % 4 === 0;

    // Check if the year is a century year (divisible by 100)
    const isCentury = year % 100 === 0;

    // Check if the year is divisible by 400 (special case for century years)
    const isFourHundred = year % 400 === 0;

    // Determine if the year is a leap year
    if (isFour && (!(isCentury) || isFourHundred)) {
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = leapYears;
