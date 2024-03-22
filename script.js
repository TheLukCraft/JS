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