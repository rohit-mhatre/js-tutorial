const score = 69
const secondScore = new Number(32)
//see even though we know that javascript is dynamically typed language and it would get the datatype
//correct each time without even having to specify it but what if we wnat to make 10000% sure that it
//should be  a number. In that case we do it with the above syntax.

console.log(secondScore.toFixed(3));

//there is this very interesting thing called toprecision
// let no =11.111                              //11.1
// let no = 111.11                                //111
// console.log(no.toPrecision(3))

let num = 199999999999129

//and also toLocaleString which converts it into number system which you give like british indian
console.log(num.toLocaleString('en-IN'))


//Maths portion:

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)