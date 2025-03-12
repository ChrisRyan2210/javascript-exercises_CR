const removeFromArray = function(numbers, ...num) {

    const resultArray = [];

    numbers.forEach((item) => { //for each number in numbers
        
        if (!num.includes(item)) {
            resultArray.push(item);
        }
    });

    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;

//pass array and number into function
//loop through array and compare the values to the number
//if they match, pop out that index from the array

// const removeFromArray = function(numbers, num) {

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === num) {
//             numbers.splice(numbers[i] - 1, 1);
//         }
//     }
//     return numbers;
// };


//update - needs to accept more than 2 arg values
// use the ...rest parameter to accept dynamic num ofo arguments (as array) 
// so in test two it would be [3, 2]


// gotta 