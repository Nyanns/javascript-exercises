const reverseString = function (word) {
    // Split the word into an array of characters
    let charArray = word.split('');

    // Reverse the array of characters
    let reversedArray = charArray.reverse();

    // Join the reversed array back into a string
    let reversedWord = reversedArray.join('');

    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
