// let goals = 3
let goals = "3"
let variable = "abc"
let goalsInNumber = Number(goals)
let variableInNumber = Number(variable)
console.log(typeof goals)
console.log(typeof goalsInNumber)
console.log(goalsInNumber)
console.log(typeof variableInNumber)
console.log(variableInNumber)       //will output NaN not a number

let isLoggedIn = 23
let BooleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof BooleanIsLoggedIn)
console.log(BooleanIsLoggedIn)
/*  See here are few cases:
    if there is string and its empty and you convert it to boolean it would be false
    every other case it would be true
    in case of number 0 it would be false else true
*/