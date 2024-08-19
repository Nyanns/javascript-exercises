const repeatString = function (word, times) {
    let string = '';

    // Error check should be outside the loop
    if (times < 0 || times !== parseInt(times)) {
        return "ERROR";
    }

    // Loop to repeat the string
    for (let index = 0; index < times; index++) {
        string += word;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
