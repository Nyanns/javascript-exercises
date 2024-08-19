const removeFromArray = function (array, ...args) {
    // Create a new empty array to hold the filtered items
    const newArray = [];

    // Loop through each item in the original array
    for (let i = 0; i < array.length; i++) {
        // Check if the current item is NOT in the args array
        // If it's not in the args array, add it to the newArray
        if (!(args.includes(array[i]))) {
            newArray.push(array[i]);
        }
    }

    // Return the new array that has the items we want
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
