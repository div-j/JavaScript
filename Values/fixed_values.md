# Values and Variables

## Types of Values

### Fixed Values (Constants)

Fixed values, also known as constants, are unchanging values that remain the same throughout the program. They can be numbers, letters, or other data types.

#### Example:

```
const PI = 3.14; // A constant representing the mathematical constant Pi
const greeting = "Hello, World!"; // A constant string greeting
```

### variable values (Variables)
**variable values**: These are containers used to stores values that can be changed
Examples: string variable, number variables, arrays, and objects

**Declaration**: You declare a variable using the var, let, or const keyword, followed by the variable name:
```
var x;
```
**Initialization**: You can also initialize a variable at the time of declaration:

```
let age = 25;
const pi = 3.14;
```

**Variable Names**: Variable names in JavaScript must begin with a letter, underscore (_), or dollar sign ($). Subsequent characters can also be numbers. Avoid using keywords as variable names.

**Scope**: Variables declared with var are function-scoped, meaning they are visible throughout the entire function. Variables declared with let and const are block-scoped, visible only within the block (enclosed by curly braces) where they are defined.

#### String Variable: Holds text values
```
student1='Daniel'
student2 = "David"

message = 'Hello "David"'
message2 = "Hi 'John'"
```
#### string methods and properties

String Methods:
JavaScript provides various methods for string manipulation, such as:

toUpperCase(): Converts a string to uppercase.
toLowerCase(): Converts a string to lowercase.
indexOf(): Returns the index of the first occurrence of a specified value.
replace(): Replaces a specified value with another value.*/

let myString = "Hello, World!";
let upperCaseString = myString.toUpperCase();
let lowerCaseString = myString.toLowerCase();
let indexOfComma = myString.indexOf("l");
let replacedString = myString.replace("World", "Universe");


Interpolation
```
let name = "John";
let greeting = `Hello, ${name}!`;
```


 **Number Type:** JavaScript has a single number type, which is a 64-bit floating-point. This means that all numbers in JavaScript, including integers and decimals, are represented as floating-point numbers.

**Integer and Decimal Numbers:** JavaScript allows you to work with both integers and decimal numbers. For example:
   ```javascript
   let integerNumber = 5;
   let decimalNumber = 3.14;
   ```
**Arithmetic Operations:** You can perform various arithmetic operations on numbers, such as addition, subtraction, multiplication, and division.
   ```javascript
   let sum = 5 + 3;      // 8
   let difference = 5 - 3; // 2
   let product = 5 * 3;   // 15
   let quotient = 5 / 3;  // 1.666...
   ```

 **Special Numbers:** JavaScript has special values for representing infinity and NaN (Not a Number).
 
   ```javascript
   let x = Infinity;
   let y = NaN;
   ```

**Numeric Conversions:** You can convert strings to numbers using functions like `parseInt` and `parseFloat`.
   
   ```javascript
   let z = "42";
   let convertedNumber = parseInt(z);
   ```

**Math Object:** JavaScript provides a built-in `Math` object that contains various methods for mathematical operations.
   ```javascript
  Math.sqrt(25);  // 5
   Math.random(); // random number between 0 and 1
   ```


