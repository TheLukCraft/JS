//TODO Introduction
// * Comments

// * console.log and console
console.log("test");

// * variables
const car = 'Audi';
let type = 'super car';

console.log(car);


// ? let can be updated but not re-declared within the same scope.
// ? const, on the other hand, is used to declare variables whose values 
// ? are never intended to change. A variable declared with const must 
// ? be initialized at the time of declaration. The scope of const is 
// ? also block-scoped, similar to variables declared with let. However, 
// ? the variable declared with const is read-only and cannot be updated 
// ? or re-declared.
// ! DO NOT USE VAR

// * Tample string
const name = 'Luk'
const favMeal = 'Chicken'

// ! It's OLD
console.log(' HI, Im: ' + name + 'my favourite meal is' + favMeal)
// ! Use "grawis" this instead
console.log(`Hi I'm ${name} and my favourite meal is ${favMeal}`)

//TODO Data Types
// * Strings
// ? Typeof variable - check type od this variable
// ? We can write strings as '' ""
// ? To combine text use `` 
const text = '123'
const quote = '"this is quote"'
const msg = 'This is test message'
const username = 'thelukcraft'

console.log(msg.length)
console.log(msg.toUpperCase())

const date = new Date()
console.log(date.toLocaleDateString('PL'))
console.log(username.charAt(0).toUpperCase() + username.slice(1))

//* Numbers
const num1 = 23
const num2 = '45'
const num3 = 'abcd'
const num4 = 1310.20

console.log(num1 + num2)
// ? output: 2345
console.log(num2 *1)
// ? output: 45 as a number 
console.log(num3 *1)
// ? output: NaN - not a number
console.log(0/0)
// ? output: NaN - not a number
console.log(num4.toFixed(2))
// ? rounds numbers to 2 decimal places
console.log(parseInt(num2))
// ? parse string to int

//* Boolean
let a = true
let b = false

//* Null and Undefined
// ? something that does not exist
let c = null
// ! Do not use undefined as something doesn't exists. Use null instead

//* composite types
//? Object, Array, Function, Date, RexExp, Map, Set,
const colors = ['red', 'green', 'blue']
console.log(colors)

//TODO Operators
//* Arithmetic Operators
//? Addition (+), Subtraction (-), Multiplication (*), Division (/),
//? Modulus (%), Increment (++), Decrement (--)
console.log(5 + 3); // 8
console.log(10 - 5); // 5
console.log(4 * 3); // 12
console.log(10 / 2); // 5
console.log(7 % 2); // 1

let e = 1;
a++;
console.log(e); // 2

let f = 2;
b--;
console.log(f); // 1

//* Assignment Operators
//? Assignment (=), Addition assignment (+=), Subtraction assignment (-=)
let g = 5;
console.log(g); // 5

let h = 10;
h += 5; // Equivalent to d = d + 5
console.log(h); // 15

let k = 10;
k -= 5; // Equivalent to e = e - 5
console.log(k); // 5

//* Comparison Operators
//? Equal (==), Strictly equal (===), Not equal (!=),
//? Strictly not equal (!==), Greater than (>), Less than (<),
//? Greater than or equal to (>=), Less than or equal to (<=)

//* Logical Operators
//? And ('&&'), OR ('||'), NOT ('!')

//TODO Conditional instructions
//* If, else if, else
const pass = '2u8odas3323'
const color = 'blue'

if(pass.length > 10) {
    console.log('good password')
} else {
    console.log('Too short password')
}

if(color == 'blue') {
    console.log('color is blue')
} else if (color = 'red') {
    console.log('color is red')
} else {
    console.log('other color')
}

//* Switch
const day = 'Mo'

switch(day) {
    case 'Mo':
        console.log('Monday')
        break
    case 'Fr':
        console.log('Friday')
        break
    case 'Sa':
        console.log('Saturday')
        break   
    default:
        console.log('Other day')
}

//* Conditional operator
const isLoggedIn = false

function loggedIn() {
    console.log('User is logged in')
}

function loggedOut() {
    console.log('User is logged out')
}

isLoggedIn ? loggedIn() : loggedOut()

//TODO Loops
//* For
const animals = ['dog', 'cat', 'mouse', 'pig', 'parrot']

for(let i = 0; i< animals.length; i++) {
    console.log(animals[i])
}

//* While
let m = 0

while(m < 5) {
    m++
    console.log(m)
}

//* do while
let n = 0
do {
    n++
    console.log(n)
} while(n < 2)

//* For of
const numbers = [1, 2, 3, 4, 5]

for(const number of numbers) {
    console.log(number *2)
}

//todo Arrays and Tables
//* methods of tables
const numbers2 = [1, 2, 3, 4, 5]

console.log(numbers2)

// ? Unshift adding values as first
numbers2.unshift(100, 200)
console.log(numbers2)

// ? shift deleting index 0
numbers2.shift()

// ?
const colors2 = ['red', 'blue']

console.log(colors2)

// ? push - adding item as last in table - destructive method
colors2.push('green')
console.log(colors2)

// ? pop - removing last item - destructive method
colors2.pop()
console.log(colors2)

//* Functions on tables
function multiply(x) {
    return x * 2
}
const numbers3 = [1,2,3,4,5]

// ? map - similar to foreach. We take an array of numbers3, and then perform 
// ? the multiply action on each element and assign to a new array
const newNumbers = numbers3.map(multiply)
console.log(numbers)
console.log(newNumbers)

// ? concat - non-destructive method to combine 2 arrays
const abc = ['a', 'b', 'c']
const d = 'd'
const newAbcd = abc.concat(d)

console.log(newAbcd)

// ? spread - Spread syntax can be used when all elements from an object or array
// ? need to be included in a new array or object, or should be applied one-by-one 
//? in a function call's arguments list. 
console.log(abc)
console.log(...abc)

const drinks = ['pepsi', 'coffee', 'vodka']
const meals = ['chicken', 'spaghetti', 'soup']

const menu = [...drinks, ...meals]
console.log(menu)

//* Slice, Splice
const nums = [0, 0, 1, 1, 2, 2, 2]
const colors3 = ['red', 'green', 'blue', true, 123]
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '📛', '😒']

const numbers4 = nums.slice(0,2)
console.log(numbers4)

const numbers5 =  nums.slice(-3)
console.log(numbers5)

const randomStuff = colors3.splice(-2)
console.log(colors3)
console.log(randomStuff)

const newCars = cars.splice(2, 4, 'test')
console.log(cars)
console.log(newCars)