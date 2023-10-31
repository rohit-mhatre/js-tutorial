//variable declaration:
const custId = 123;
let custName = "Rohit";
let emailId = "rohit@gmail.com";
var password = "rohit@123";
city = "Indore";
let custState;
// custId = 321;       //not allowed

console.log(custId);
console.table([custId, custName, emailId, password, custState]);           //prints out the output of whatever you passed as argument in tabular format

/**Notes : 
 * Constant means once declared it won't change
 * We don't generally use var in jsbecause of the scope issues so for that reason we use let only. so preferrably we dont use var
 * we declared the variable city without using any keyword. it's supported in javascript but it's not a good practice
 * And if we declare any variable and don't provide any value to it, it will show undefined value.
 */