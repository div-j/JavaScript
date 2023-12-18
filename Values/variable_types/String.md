## String Variable

Holds text values. Values are wraped in single or double quotes
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


