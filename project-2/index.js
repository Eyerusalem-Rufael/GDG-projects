const lodash =require('lodash');
const numbers =['33', '12','77','1','97']

const min = lodash.min(numbers);
const max = lodash.max(numbers);

console.log(`min number:${min} `);
console.log(`max number:  ${max} `); 