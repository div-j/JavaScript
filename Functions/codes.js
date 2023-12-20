//Functions


//creating a function without parameter
function greetOne(){
    console.log('Hello! everyone')
}

//calling function
greetOne()

//creating a function with parameter
function greetTwo(name) {
    console.log('Hello '+ name)
}

//calling
greetTwo('David')

//Anonymous Functions: functions without name
//creating funtion
add = function (a,b){
    console.log(a+b)
}

//calling
add(3,6)
add(6,13)

//Arrow function
mult = (a,b) => a*b;

//calling
result = mult(4,123)
console.log(result)

//example2
greetThree = (b) => console.log('Hello '+b)
//calling
greetThree('James')

//function with return statement
function square(z){
    return z*z
}
result = square(7)
console.log(result)

//function variable scope
//local
function local(){
     a = 3
    var b = 4
    console.log(a)
    console.log(b)

}
//calling
local()
console.log(a)
//console.log(b) //gives error

//Common js functions

//setTimeout` and `setInterval`
// syntax
// setTimeout(function, timeInSeconds)
setTimeout(function(){ 
    console.log('Javascript is fun')
},5000)

// `console.log`
console.log('Hi')

//`setInterval`
// setInterval(function() {
//    console.log('This is javaScript')
//   }, 3000); // 2000 milliseconds (2 seconds)

//Running a function repeatedly 5 times 
  let counter = 0;
  const maxRuns = 5; 
  
var interval = setInterval(function() {
    // Your code to run goes here
    console.log('This is JavaScript');
  
    // Increment the counter
    counter++;
  
    // Check if the counter has reached the desired number of runs
    if (counter === maxRuns) {
      // Stop the interval when the desired number of runs is reached
      clearInterval(interval);
    }
  }, 3000); // 3000 milliseconds (3 seconds)
  
  //`map`, 
nums = [2,3,1,4,2,6,5,9,6]
updated_nums = nums.map((a)=>  a*a)
console.log(updated_nums)

//`filter`
odd_nums = nums.filter((x)=> x % 2!== 0)
console.log(odd_nums)

// `reduce`:
nums_sum = nums.reduce((a,b)=>a+b,0)
console.log(nums_sum)
