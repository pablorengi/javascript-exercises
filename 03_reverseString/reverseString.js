const reverseString = function(name) {
    let result = "";
    for(let i = (name.length - 1); i >= 0; i--) {
        result += name.charAt(i);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
