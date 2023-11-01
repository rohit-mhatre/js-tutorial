"use strict";           
/*  treat all JS code as newer version. 
    although it is not required to do so, it is good practise to do it.
*/

// alert (6+9)     //although it will work on browser, it won't work if we doing this using node

console.log("rohit")

let name = "rohit"
let age = 21
let isGOAT = false

/*
1. **Number:** Represents numeric values, including integers and floating-point numbers. For example, `42` or `3.14`.

2. **BigInt:** Used to represent arbitrarily large integers that cannot be accurately represented as regular numbers. For example, `1234567890123456789012345678901234567890n`.

3. **String:** Represents textual data enclosed in either single or double quotes. For example, `"Hello, World!"`.

4. **Boolean:** Represents two possible values, `true` and `false`, often used for logical comparisons and conditional statements.

5. **null:** A special value that indicates the intentional absence of any object value. It is used to signify that a variable or property has no value assigned.

6. **undefined:** Represents the absence of a value or the default value for uninitialized variables or function parameters.

7. **Symbol:** Unique and immutable values introduced in ES6, often used as property keys to avoid naming conflicts.

8. **Object:** A complex data type used to group related data and functions. Objects can have properties and methods, making them a fundamental data structure in JavaScript.
*/

console.log(typeof undefined); // undefined
console.log(typeof null); // object