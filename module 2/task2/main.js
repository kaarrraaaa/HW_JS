let a = 13.123456789;
let b = 2.123;
let n = 5;

let fractionA = a - Math.floor(a);
let fractionB = b - Math.floor(b);

firstNormalized = Math.floor(fractionA * Math.pow(10,n))
secondNormalized = Math.floor(fractionB * Math.pow(10,n))

console.log('Дробная часть числа a:', firstNormalized);
console.log('Дробная часть числа b:', secondNormalized);

console.log('a > b:', firstNormalized > secondNormalized);
console.log('a < b:', firstNormalized < secondNormalized);
console.log('a >= b:', firstNormalized >= secondNormalized);
console.log('a <=b:', firstNormalized <= secondNormalized);
console.log('a === b:'firstNormalized === secondNormalized);
console.log('a !== b:', firstNormalized !== secondNormalized);
