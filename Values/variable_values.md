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

## String Variable: Holds text values
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


## Number variables
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
#Array varibles

In JavaScript, an array is a data structure that allows you to store and manipulate a collection of elements. Arrays can hold values of different types, and they are a versatile and fundamental part of the language. 
Here are some key concepts related to JavaScript arrays:

1. **Array Declaration:**
   ```javascript
   fruits = ['apple', 'orange', 'banana'];
   ```

2. **Array Elements:**
   - Array elements can be of any data type, including numbers, strings, objects, or even other arrays.
   ```javascript
   let mixedArray = [1, 'two', { key: 'value' }, [3, 4]];
   ```

3. **Accessing Elements:**
   - Use square brackets `[]` to access array elements.
   - Arrays in JavaScript are zero-indexed, meaning the first element is at index 0.
   ```javascript
   console.log(fruits[0]);  // 'apple'
   ```

4. **Array Length:**
   - The `length` property gives you the number of elements in an array.
   ```javascript
   console.log(fruits.length);  // 3
   ```

5. **Adding and Removing Elements:**
   - Use methods like `push`, `pop`, `shift`, and `unshift` to add or remove elements from the beginning or end of an array.
   ```javascript
   fruits.push('grape');     // Add element to the end
   fruits.pop();             // Remove element from the end
   fruits.unshift('kiwi');   // Add element to the beginning
   fruits.shift();            // Remove element from the beginning

   ```

6. **Array Methods:**
   - JavaScript provides a variety of built-in array methods for common operations, such as `slice`, `splice`, `concat`, `indexOf`, `forEach`, `map`, `filter`, and more.
   ```javascript
   let numbers = [1, 2, 3, 4, 5];
   let squared = numbers.map(num => num * num);  // [1, 4, 9, 16, 25]

   fruits.splice(1,1,'Mango')  //Replace the 2nd item with Mango
   numbers = [1,3,2,5,3,5,6]
   numbers.splice(3,1)        //Remove the 4th item
   ```

7. **Array Iteration:**
   - You can iterate over the elements of an array using loops (e.g., `for` loop) or array iteration methods (e.g., `forEach`).

   ```javascript
   fruits.forEach(fruit => {
     console.log(fruit);
   });
   ```

8. **Multidimensional Arrays:**
   - JavaScript supports multidimensional arrays (arrays within arrays), allowing you to create matrices or nested data structures.

   ```javascript
   let matrix = [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]
   ];
   ```

9. **Spread Operator:**
   - The spread operator (`...`) can be used for creating a shallow copy of an array, combining arrays, or spreading elements.

   ```javascript
   let copyOfFruits = [...fruits];
   let combinedArrays = [...fruits, 'watermelon'];
   ```

Understanding these concepts will help you effectively work with arrays in JavaScript and leverage their flexibility in various programming scenarios.
