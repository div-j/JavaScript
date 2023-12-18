## Array varibles

An array is a variable data type that allows you to store and manipulate more than one  values/items/elements. 

Arrays can hold values of different types, and they are a versatile and fundamental part of the language. 
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


