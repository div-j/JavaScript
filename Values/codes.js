//variable type also known as data type

//string type
console.log('----String variable-----')
student_name = 'Daniel'
student_course = "JavaScript"
console.log(student_name)
console.log(student_course)

//Number type
console.log('----Number variable-----')

student_age = 20
console.log(student_age)

//Array

console.log('----Array variable-----')
student = ['Daniel', 'JavaScript',20]
console.log(`student name is ${student[0]}`)
console.log('student age is '+ student[2])

//Object
console.log('----Object variable-----')
student = {name:'Daniel', age:20, course:'JavaScript'}
console.log(`student name is ${student.name}`)
console.log(`student age is ${student.age}`)

let shoppingCart = {
    items: [
      { name: 'Iphone 15', quantity: 2, price: 20 },
      { name: 'Samsung s22', quantity: 1, price: 30 },
    ],
    getTotal: function() {
      return this.items.reduce((total, item) => total + item.quantity * item.price, 0);
    },
  };

  console.log(`First product is ${shoppingCart.items[0].name}`)
  console.log(`second product is ${shoppingCart.items[1].name}`)
  console.log(`Total price is ${shoppingCart.getTotal()}$`)


