// // const name1 = 'lincolin';
// // const age = 30;
// // console.log('my name is ' +
// //     name1 + ' Iam ' + age)

// // let score;
// // score = 20;
// // console.log(score)

// // // primitive datatypes tring, boolean, null, undefined
// // // const name1 = 'lincolin angaya';
// // // const age = 30;
// // console.log('my name is ' + name1 + 'and my age is' + age)

// // // template string


// // const hello = `my name is ${name1} and iam ${age} years old`
// // console.log(hello)
// // const school = 'moringa';
// // const course = 'SOftware Development'
// // const message = `hello my name is ${name1} and Im ${age} years old and Im in ${school} doing ${course}`;
// // console.log(message)
// // console.log(name1.length)
// // console.log(name1.toUpperCase())
// // console.log(name1.substring(0, 4))
// // console.log(name1.split(''))
// // console.log(name1[2])
// // const string = 'hello, my name, is ,lincolin ,angaya';
// // console.log(string.split(','))
// // console.log(string[1])

// // /* multiline comments*/
// // // arrays- variables that hold multiple values

// // const numbers = new array[1, 2, 3, 4, 5];
// // console.log(numbers)
// // const fruits = ['apples', 'oranges', 'pears', 10, 2.3];
// // console.log(fruits[2])
// // fruits[5] = 'grapes'
// //     // -
// //     // how to add an element on array
// // console.log(fruits)
// // fruits.push('mangoes');
// // console.log(fruits)
// //     // -
// //     // add element to the end of array
// //     // fruits.unshift('crisps');
// //     // console.log(fruits) - add element at the beginning  of array
// //     // fruits.pop();
// //     // console.log(fruits) - removes the element in the end of array
// //     // fruits.shift();
// //     // console.log(fruits) 
// //     // -removes the element in the begining of array
// //     // console.log(fruits.indexOf('oranges')) - to get the index of an element in array


// // // object literals

// // const person = {
// //     firstName: 'lincolin',
// //     lastName: 'Angaya',
// //     age: 25,
// //     hobbies: ['music', 'movies', 'sports', 'swimming'],
// //     address: {
// //         street: 'CBD',
// //         city: 'Nairobi',
// //         state: 'Kenya'
// //     }
// // }
// // console.log(person.address.city)

// // const { firstName, lastName, age, address } = person;
// // console.log(firstName, lastName, age, )
// // person.email = 'lincolinangaya5626@gmail.com';

// // // -
// // // how to add an element on object
// // console.log(person)

// // //for

// // for (let i = 0; i <= 10; i++) {
// //     console.log(`for loop: ${ i }`)
// // }

// // //while
// // let i = 0;
// // while (i < 10) {

// //     console.log(`while loop number:${i}`)
// //     i++;

// // }


// // //for each,map,filter- high order array methodsis suggested to used when doing iteration in array.
// // // for each-which just loops through the arrays
// // //map-allow us to create a new array from previous array
// // //filter-allow us to create a new array based on the condition

// // const todos = [{
// //         id: 1,
// //         text: 'Take out trash',
// //         isCompleted: true
// //     },
// //     {
// //         id: 2,
// //         text: 'meet with boss',
// //         isCompleted: true
// //     }, {
// //         id: 3,
// //         text: 'dentist appointment',
// //         isCompleted: true
// //     }
// // ];
// // // //for each
// // todos.forEach(function(todo) { console.log(todo.text) })

// // // //map
// // const todoText = todos.map(function(todo) { return todo.text; })
// // console.log(todoText)

// // // //FILTER
// // const todoCompleted = todos.filter(function(todo) { return todo.isCompleted === true; }).map(function(todo) { return todo.text })
// // console.log(todoCompleted)

// // //tenary operator
// // //?-represent then
// // //: -represent the else

// // const x = 10;
// // const color = x > 10 ? 'red' : 'blue';
// // console.log(color)
// //     //switch statements

// // switch (color) {
// //     case 'red':
// //         console.log('color is red');
// //         break;
// //     case 'blue':
// //         console.log('color is blue');
// //     default:

// //         console.log('color is white');


// // }

// // //arrow function

// // function addNum(num1, num2) { return num1 * num2; }
// // console.log(addNum(3, 5));

// // const addNum = (num1, num2) => num1 * num2
// // console.log(addNum(3, 5));

// //object oriented programming in javascript
// //we can construct objects using 
// //constructor function-
// //we can do this in two ways using :-
// //*prototype 
// //*ES6 classes
// //when you create a function constructor you use capital letter
// //constructor function
// // function Person(firstName, lastName, dob) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.dob = new Date(dob);

// //     this.getBirthYear = function() {
// //         return this.dob.getFullYear();
// //     }
// //     this.getFulllName = function() {
// //         return `${this.firstName} ${this.lastName}`;
// //     }
// // }
// //protoypes
// // Person.prototype.getBirthYear = function() { return this.dob.getFullYear(); }
// // Person.prototype.getFulllName = function() {
// //         return `${this.firstName} ${this.lastName}`;
// //     }
// //instantiate the object
// // const person1 = new Person('lincolin', 'Angaya', '9-9-1998')
// // const person2 = new Person('phinic', 'ogeto', '09-09-1998')
// // const person3 = new Person('sally', 'mulupi', '09-09-1998')

// // console.log(person1.getFulllName());

// //ES6 class
// // es6 work the same with using protoytpe its only doing it in different way under the same goodie
// class person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);

//     }
//     getFulllName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// //instantiate the object
// const person1 = new person('lincolin', 'Angaya', '9-9-1998')
// const person2 = new person('phinic', 'ogeto', '09-09-1998')
// const person3 = new person('sally', 'mulupi', '09-09-1998')

// console.log(person1.getFulllName())

// //higher order functions and arrays
// const company = [
//     { name: 'company one', category: 'finance', start: '1981', end: '2003' },
//     { name: 'company two', category: 'retail', start: '1982', end: '2004' },
//     { name: 'company three', category: 'auto', start: '1983', end: '2005' },
//     { name: 'company four', category: 'technology', start: '1984', end: '2006' },
//     { name: 'company five', category: 'finance', start: '1985', end: '2007' },
//     { name: 'company six', category: 'auto', start: '1986', end: '2008' },
//     { name: 'company seven', category: 'technology', start: '1981', end: '2009' },
//     { name: 'company eight', category: 'retail', start: '1987', end: '2010' },
//     { name: 'company nine', category: 'finance', start: '1988', end: '2013' }
// ]
// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32



//javascript iterator

// const users = [{
//         firstName: "Niky",
//         lastName: "Morgan",
//         favoriteColor: "Blue",
//         favoriteAnimal: "Jaguar",
//         personalQuote: "You're never too old to learn something new",
//     },
//     {
//         firstName: "Tracy",
//         lastName: "Lum",
//         favoriteColor: "Yellow",
//         favoriteAnimal: "Penguin",
//         personalQuote: "I just got lost in thought - it was unfamiliar territory",
//     },
//     {
//         firstName: "Josh",
//         lastName: "Rowley",
//         favoriteColor: "Blue",
//         favoriteAnimal: "Penguin",
//         personalQuote: "Always remember you’re unique, just like everyone else",
//     },
//     {
//         firstName: "Kate",
//         lastName: "Travers",
//         favoriteColor: "Red",
//         favoriteAnimal: "Jaguar",
//         personalQuote: "Behind every great man is a woman rolling her eyes",
//     },
//     {
//         firstName: "Avidor",
//         lastName: "Turkewitz",
//         favoriteColor: "Blue",
//         favoriteAnimal: "Penguin",
//         personalQuote: "You don’t have to see the whole staircase, just take the first step",
//     },
//     {
//         firstName: "Drew",
//         lastName: "Price",
//         favoriteColor: "Yellow",
//         favoriteAnimal: "Elephant",
//         personalQuote: "Failure is not the opposite of success: it’s part of success",
//     },
// ];

// function firstNamePrinter(collection) {
//     for (const user of collection) {
//         console.log(user.firstName);
//     }
// }

// firstNamePrinter(users);

//get favorite colors
// function addFavoriteColors(color) {
//     for (const users of color) {
//         console.log(users.favoriteColor)
//     }
// }
// addFavoriteColors(users)

//get yellow

// function yellowFilter(color) {
//     for (const user of color) {
//         if (user.favoriteColor === "Yellow") {
//             console.log(user.firstName)
//         }
//     }
// }
// yellowFilter(users);

//FILTER WITH VARIABLE NAME
// function redFilter(collection, color) {
//     for (const user of collection) {
//         if (user.favoriteColor === color) {
//             console.log(user.lastName)
//         }
//     }
// }
// redFilter(users, "Blue")
// const qwetu = ['Ruaraka', 'Parklands', 'Joggo Road', 'wilson', 'hurligham', 'abbaders'];
// console.log(qwetu.indexOf('hurligham'));
// function printName(first, last) {
//     console.log(`${first} ${last}`);
//     console.log(this);
// }
// printName.call({
//     model: 'samsung galaxy',
//     color: 'black'
// }, 'lincolin', 'angaya');
// function exerciseByronThePoodle(dogName = "lincoln", dogBreed = "borebol") {

//     console.log(`Wake ${dogName} the ${dogBreed}`);
//     console.log(`Leash ${dogName} the ${dogBreed}`);
//     console.log(`Walk to the park ${dogName} the ${dogBreed}`);
//     console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
//     console.log(`Walk home with ${dogName} the ${dogBreed}`);
//     console.log(`Unleash ${dogName} the ${dogBreed}`);
// }
// exerciseByronThePoodle("lincolin", "borebole")

// function exerciseDog(dogName, dogBreed) {
//     console.log(`Wake ${dogName} the ${dogBreed}`);
//     console.log(`Leash ${dogName} the ${dogBreed}`);
//     console.log(`Walk to the park ${dogName} the ${dogBreed}`);
//     console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
//     console.log(`Walk home with ${dogName} the ${dogBreed}`);
//     console.log(`Unleash ${dogName} the ${dogBreed}`);
// }
// exerciseDog("link", "the rot")
// exerciseDog("phinic", "the rot")
// exerciseDog("sally", "the rot")
// exerciseDog("muli", "the rot")

const weatherToday = "hot";

function exerciseDog(dogName, dogBreed) {
    if (weatherToday === "rainy") {
        return `${dogName} did not exercise due to rain`

    }
    console.log(`Wake ${dogName} the ${dogBreed}`);
    console.log(`Leash ${dogName} the ${dogBreed}`);
    console.log(`Walk to the park ${dogName} the ${dogBreed}`);
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `${dogName} is happy and tired!`;
}
const results = exerciseDog('byron', 'rot');
console.log(results)