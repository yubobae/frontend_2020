/*const Var = require('./var');
console.log(Var.odd);*/

const { odd, even } = require('./var');//비구조화 할당.

// console.log(odd);
// console.log(even);

function checkOddorEven(num) {
    if(num % 2) {//홀수면
        return odd;
    }
    return even;
}

module.exports = { odd, even };