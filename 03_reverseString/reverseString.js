const reverseString = function(word) {

    const wordArray = Array.from(word);
    const reversedArray = wordArray.reverse();
    const result = reversedArray.join('');
    return result;
};



// Do not edit below this line
module.exports = reverseString;

// const reverseString = function([words]) {

//     let finalString = "";

//     for (let word in words) {
//         const wordArray = Array.from(word);
//         const reversedArray = wordArray.reverse();
//         const result = reversedArray.join('');
//         finalString += result + " ";
//     }

//     return finalString;
// };
