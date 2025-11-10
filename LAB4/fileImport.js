const { mean } = require('./notation.js');


const scores1 = [10, 15, 20];
const avg1 = mean(scores1);
console.log(`Average of [${scores1}] = ${avg1}`);

const scores2 = ['12', '8', '20', 'not-a-number', 10];
console.log(`Average of scores2 = ${mean(scores2)}`);