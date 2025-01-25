//console.log('hello')
// var,let, const
// let company
// company = "Genesys" 

// console.log(company)

// const first_name = "John", last_name = "Doe"
// console.log(first_name, last_name)


// Primitive
// const name = "John" ;
// const age = 34.5 ;
// const isTall = true;
// const house = null; 
// const relationship = undefined;

// console.log(typeof relationship);

//concatenation

// console.log ("My name is " + name  + "and I'm " +  age + " years old");
// console.log (`My name is ${name} and I'm ${age} years old`);

// console.log("hello world".length)
// console.log("hello world".toUpperCase())
// console.log("hello world".substring(6))

// Non-Primitive Data Types
// Arrays
// const score = new Array (20, 34, 82);
// console.log (score)

// console.log(Array.isArray (score))

// Accessing Array Element
// console.log(score[1])


// Array Manipulation - push, unshift, pop, indexof
// score.push (90);
// score.pop();
// score.unshift(73);

// console.log (score);
// console.log(score.indexOf(34));


// Object
// const person = {
// name: "John",
// age: 34.5,
// isTall: true,
// address: {
//     street: "No 1 Genesys Street",
//     city: "Enugu"
// } 
// }


// accessing object property
// console.log(person["address"]["city"]);
// console.log(person.address.city);

//Destructuring 
// const {name,age} = person;

// const name = person.name;
// const age = person.age

// Destructuring Array

// const [name,age] = score;

// console.log(age)

// FLOW CONTROL
// if...else

// const score = 55
// if (score <= 100 && score >=80) {
//     console.log ("A")
// } else if (score < 80 && score >= 60) {
//     console.log ("B")
// }else if (score < 60 && score >= 50) {
//     console.log ("C")
// }else{
//     console.log ("F")
// }

// Tenary Operator 
// const age= 14;
// let isAdult;

// if (age >= 18) {
//     isAdult = true; 
// } else {
//     isAdult = false;
// }

// console.log(isAdult);

// SHORTEN
// const age = 14;
// const isAdult =age >= 18? true:false;
// console.log (isAdult)

// Switch statement
// const dayOfTheWeek = 4
// switch (dayOfTheWeek){
//     case 1: 
//      console.log ("It's the weekend")
//      break; //break is imporatant so it doesn't go ahead to run the next codes if that's the case 
//      case 7:
//         console.log ("It's the weekend")
//         break;
//         default:
//             console.log ("It's not weekend")
//             break;
// }

// LOOPS
// for...loop
// const countries = ["Nigeria", "Kenya", "Ghana"]
// for (let i = 0; i < countries.length; i++){
//     countries[i] = countries[i].toLocaleUpperCase()
// }

// console.log (countries)

// WHILE...loop
// let i = 0
// while (20 > i){
//     console.log(i % 2 == 0? i : "")

//     i++
// } 

// for...of (array)
// const names = ["John", "Doe", "Bob"]
// for (const name of names){
//     console.log(name.toLocaleUpperCase())
// }

// For...in
// const players = { 
//     "Harvetz" : {
//       goals: 34,
//       assist: 23
//     },
//     "Mount": {
//        goals: 23,
//        assist: 50
//     },
//     "James" : {
//        goals: 12,
//        assist: 43
//     }
// }
// let sum = 0
// for (const player in players){
//     sum = sum + players[player].goals //shorten to sum += player.goals 
// }

// console.log(sum)

// FUNCTIONS
// function add(x = 2,y=3){
//   return x + y
// }
// console.log (add(2))

//Arrow Functions
// const add = (x = 0,y = 0) => {return x + y}
// console.log(add(1)) 

