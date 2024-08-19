const leapYears = function (year) {

    const isFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isFourHundred = year % 400 === 0;

    if (isFour && (!isCentury || isFourHundred)) {
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = leapYears;
