// Define an empty class
// class Human {
//     numberOfEyes = 2 
//     hairColour = 'black'

//     static numberOfLegs = 2
/* Adding a method to a class
a method is a function written inside a class.
*/
// cry () {
//     console.log("I am crying")
// }
/* Accessing instance and class properties inside the class 
- the 'this' Keyword 
- accessing the properties of an object inside the class
- accessing the properties of a class inside the class
*/
// displaySelf () {
//     console.log(this)
// }

// displayHairColour() {
//     console.log (this.hairColour)
// }
// }
//Instantiate an object 
// const human = new Human()

// console.log(human, Human)

// Update instance of an object
// human.hairColour = 'red'
// console.log (human)

// Update static property
// Human.numberOfLegs = 13

// console.log(Human)

// human.displaySelf()
// human.displayHairColour()

// Constructor Method
//  class Person {
//     constructor (name, age) {
//        this.name = name
//        this.age = age
//     }
//  Getters and Setters
    // Getters
// getAge (){
//     console.log(this.age)
// }
//     // Setters
//     setAge(age){
//         this.age = age
//     }
//  }

//  const john = new Person ('John', 12)
//  console.log(john)
//  const joy = new Person ('Joy', 120)
//  console.log(joy)

// john.getAge()
// joy.getAge()

// john.setAge(150)

// console.log(john)


// Inheritance
// class Mammal {

//     eat (){
//         console.log ("I am eating")
//     }
// }

// const mammal = new Mammal ()
// mammal.eat()

// class Human extends Mammal {
//     numberOfLegs = 2
// }

// const human = new Human()
// human.eat()

// class Bird extends Mammal {
//     hasFeather = true
// }

// const dove = new Bird()

// console.log(dove.hasFeather)

// Inheritance with constructor
// class Mammal {
//     constructor (hasHair) {
//         this.hasHair = hasHair
//     }
//     eat (){
//         console.log ("I am eating")
//     }
// }

// const mammal = new Mammal ()
// mammal.eat()

// class Human extends Mammal {
//     constructor (hasHair) {
//          super(hasHair)
//     }
//     numberOfLegs = 2
// }

// const human = new Human("True")
// human.eat()
// console.log(human)

// ABSTRACTION
// BASE Class
// class Mammal {
//     constructor () {
//         if (this.constructor == Mammal) {
//             throw new Error ("Mammal cannot be called or instantiated")
//         }
//     }
// }
// Test class abstraction that can't be implemented
// const mamma = new Mammal()

// Test that abstracted classes can only be extended but not be used directly. They can be inherited but not used directly
// class Human extends Mammal {
//     run() {
//         console.log ("This can run")
//     }
// }

//  const john = new Human()
//  john.run()


// Polymorphism
// class Shape {
//     constructor () {
//         if (this.constructor == Shape) {
//             throw new Error ("Please implement this class instead")
//         }
//     }
//     area () {
//         throw new Error ("This cannot be implemented directly")
//     }
// }
// const shape = new Shape ()
// shape.area()

// class Circle extends Shape {
// Method Overide
// area (radius) {
//     const r = (Math.PI * radius ) ** 2
// }
// }

// const circle = new Circle()
// circle.area()

// ENCAPSULATION
class Customer {
    #create () {
        console.log ("I am creating my self")
    }
    createSelf () {
        this.#create()
    }
}

const ezeh = new Customer()

ezeh.createSelf()