const removeFromArray = function(myArray, ...values) {
    for(let i = 0; i < myArray.length; i++) {
        if(values.includes(myArray[i])) {
            myArray.splice(i, 1);
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
