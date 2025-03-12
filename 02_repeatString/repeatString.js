const repeatString = function(word, times) {

    while (times >= 0) {
        result = "";

        for (let i = 1; i <= times; i++) {
            result+=word;
        }

        return result;
    }

    return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
