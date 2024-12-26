const array =require('lodash');
const numbers =['33', '12','77','1','97']

const min = array.min(numbers);
const max = array.max(numbers);

console.log(`min number:${min} `);
console.log(`max number:  ${max} `);