// let goals = 3
// let goals = "3"
// let variable = "abc"
// let goalsInNumber = Number(goals)
// let variableInNumber = Number(variable)
// console.log(typeof goals)
// console.log(typeof goalsInNumber)
// console.log(goalsInNumber)
// console.log(typeof variableInNumber)
// console.log(variableInNumber)       //will output NaN not a number

// let isLoggedIn = 23
// let BooleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof BooleanIsLoggedIn)
// console.log(BooleanIsLoggedIn)
/*  See here are few cases:
    if there is string and its empty and you convert it to boolean it would be false
    every other case it would be true
    in case of number 0 it would be false else true
*/
//operations:

let value = 808
let neg = -value
console.log(neg)


let counter = 1
counter++
console.log(counter);

/**In JavaScript, the difference between prefix (`++x`) and postfix (`x++`) increment operators lies in the order in which they perform the increment operation and the value they return:

1. **Prefix Increment (`++x`):**
   - The prefix increment operator first increases the value of the variable `x` and then returns the incremented value.
   - It increments the variable and immediately uses the updated value in the current expression.
   - For example:
     let x = 5;
     let y = ++x;
     // x is now 6, and y is also 6

2. **Postfix Increment (`x++`):**
   - The postfix increment operator returns the current value of the variable `x and then increments it.
   - It uses the current value of the variable in the current expression and increments it afterward.
   - For example:
     let x = 5;
     let y = x++;
     // x is now 6, but y is 5 (the original value of x)

The key difference is when the increment actually takes place and whether the original or incremented value is used in the current expression. Prefix increment modifies the variable and returns the updated value, while postfix increment returns the original value and then increments it.
 * 
 */