// const name1 = 'lincolin';
// const age = 30;
// console.log('my name is ' +
//     name1 + ' Iam ' + age)

// let score;
// score = 20;
// console.log(score)

// // primitive datatypes tring, boolean, null, undefined
// // const name1 = 'lincolin angaya';
// // const age = 30;
// console.log('my name is ' + name1 + 'and my age is' + age)

// // template string


// const hello = `my name is ${name1} and iam ${age} years old`
// console.log(hello)
// const school = 'moringa';
// const course = 'SOftware Development'
// const message = `hello my name is ${name1} and Im ${age} years old and Im in ${school} doing ${course}`;
// console.log(message)
// console.log(name1.length)
// console.log(name1.toUpperCase())
// console.log(name1.substring(0, 4))
// console.log(name1.split(''))
// console.log(name1[2])
// const string = 'hello, my name, is ,lincolin ,angaya';
// console.log(string.split(','))
// console.log(string[1])

// /* multiline comments*/
// // arrays- variables that hold multiple values

// const numbers = new array[1, 2, 3, 4, 5];
// console.log(numbers)
// const fruits = ['apples', 'oranges', 'pears', 10, 2.3];
// console.log(fruits[2])
// fruits[5] = 'grapes'
//     // -
//     // how to add an element on array
// console.log(fruits)
// fruits.push('mangoes');
// console.log(fruits)
//     // -
//     // add element to the end of array
//     // fruits.unshift('crisps');
//     // console.log(fruits) - add element at the beginning  of array
//     // fruits.pop();
//     // console.log(fruits) - removes the element in the end of array
//     // fruits.shift();
//     // console.log(fruits) 
//     // -removes the element in the begining of array
//     // console.log(fruits.indexOf('oranges')) - to get the index of an element in array


// // object literals

// const person = {
//     firstName: 'lincolin',
//     lastName: 'Angaya',
//     age: 25,
//     hobbies: ['music', 'movies', 'sports', 'swimming'],
//     address: {
//         street: 'CBD',
//         city: 'Nairobi',
//         state: 'Kenya'
//     }
// }
// console.log(person.address.city)

// const { firstName, lastName, age, address } = person;
// console.log(firstName, lastName, age, )
// person.email = 'lincolinangaya5626@gmail.com';

// // -
// // how to add an element on object
// console.log(person)

// //for

// for (let i = 0; i <= 10; i++) {
//     console.log(`for loop: ${ i }`)
// }

// //while
// let i = 0;
// while (i < 10) {

//     console.log(`while loop number:${i}`)
//     i++;

// }


// //for each,map,filter- high order array methodsis suggested to used when doing iteration in array.
// // for each-which just loops through the arrays
// //map-allow us to create a new array from previous array
// //filter-allow us to create a new array based on the condition

// const todos = [{
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'meet with boss',
//         isCompleted: true
//     }, {
//         id: 3,
//         text: 'dentist appointment',
//         isCompleted: true
//     }
// ];
// // //for each
// todos.forEach(function(todo) { console.log(todo.text) })

// // //map
// const todoText = todos.map(function(todo) { return todo.text; })
// console.log(todoText)

// // //FILTER
// const todoCompleted = todos.filter(function(todo) { return todo.isCompleted === true; }).map(function(todo) { return todo.text })
// console.log(todoCompleted)

// //tenary operator
// //?-represent then
// //: -represent the else

// const x = 10;
// const color = x > 10 ? 'red' : 'blue';
// console.log(color)
//     //switch statements

// switch (color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//     default:

//         console.log('color is white');


// }

// //arrow function

// function addNum(num1, num2) { return num1 * num2; }
// console.log(addNum(3, 5));

// const addNum = (num1, num2) => num1 * num2
// console.log(addNum(3, 5));










//in constructor 
// functions we use keyword this and then we instantiate object
// CONSTRUCTOR FUNCTION ALWAYS START WITH CAPITAL LETTER
function Person(firstName, lastName, DOB, course) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.DOB = new Date(DOB);
    this.course = course;
    // this.getBirthYear = function() {
    //     return this.DOB.getFullYear();
    // }
    // this.fullName = () => `${this.firstName} ${this.lastName}`;
    this.firstcourse = () => `${this.firstName} ${this.course}`;
}
//we introduce something called prototype so that when we console we dont want to see the functions in the constructor therefore in the functi0ns with this keyword we add a prototype to hide the function i.e

// Person.prototype.fullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// Person.prototype.fullcourse = function() {
//         return `${this.firstName} ${this.course}`;
//     }
//INSTANTIATE OBJECT
const person1 = new Person('LIncolin', 'angaya', '4-09-1998', 'software developer');
const person2 = new Person('phinic', 'angaya', '14-09-1998');
const person3 = new Person('sally', 'angaya', '14-09-1998');
const person4 = new Person('Lenox', 'angaya', '14-09-1998');
console.log(person1.firstcourse())