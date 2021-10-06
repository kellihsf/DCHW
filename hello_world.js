// //object

const { count } = require("console");

// const friendInfo = { 
//     "name": "Kelli", // Key = name, Value = Kelli 
//     "phone": "123455",
//     "birthday": "Sept 7",

// }
// console.log(friendInfo.name);


// const superhero = {
//     fullName: "Wonder Woman",
//     alias: "Diana Prince",
//     bracelets: 2, 
//     lassos: 1,
// }
// //updating a value 
// superhero.alias = "Princess Diana of The";

// //adding a new value
// superhero.hometown = "The";

// //created a variable to call object key
// const wonderWomanLassos = superhero.lassos;

// //remove a key/value
// console.log(superhero.lassos) // 1

// delete superhero.lassos;
// console.log(wonderWomanLassos)

// array

const todos = [ "pet the dog", 
                "go to work", 
                "shop",
                "go home", 
                "feed the dog" ]

//calling an array position
const firstItem = todos[0]
console.log(firstItem);

//find out how many items are in array
const countArrayItems = todos.length;
console.log("How many items do I have? " + countArrayItems);

//add an item to my todo list
todos.push("eat apple");
console.log(todos)

//check length
//console.log(todos.length);

//delete an item from todo list
todos.pop();
console.log(todos)

//delete specific item from todo list
todos.pop(todos[0]);

//check length
console.log(todos.length)

//Join string to item list
// all items in the array, will come out of the array and be called. Each item will have a ! after it
// the \n creates a line break
// if the \n wasn't there, it would be one long line with "!" after each item
// there is no ! on the last item
const todoString = todos.join('!\n')

//call the join
console.log(todoString);

// Create a string, overwrites above todoString
const todoString1 = 'Pet the dog!, go to work!'
const todos1 = todoString1.split('!');

//calling 
console.log(todos1);



