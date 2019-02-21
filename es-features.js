
// const declared
const AGES = [27,22,33];
console.log(AGES);

// const being changed which is possible
// as const is a reference to the array and 
// we are not changing the const which is a 
// pointer here but we are changing the array
// to which it was pointing
AGES.push(25);
console.log(AGES);

// another example of changing const after declaring
const OBJ = {
  age : 27,
  name : 'Karan'
}

OBJ.age = 30;
console.log(OBJ)


function fn() {
  console.log('Hello')
}

fn();

// fat arrow functions with one line of code
var fn2 = () => console.log('Hello 2');
fn2();

// even shorter way of fat arrow
var fn3 = () => 'Hello 3';
console.log(fn3());


/* if more argumemts are passed than
 available on the function then they are ignored */
var add = (a) => a + 5;
console.log(add(5, 8));

// fat arrow functions as callbacks
setTimeout(() => console.log('hi from callback'), 1000);

/* fat arrow functions keeps
the this context when it was defined 
In below example this was set as 
windows object in the function fat
so no matter if the functions is called on click of 
a button, instead of this pointing out to the 
button element, it still points out to the window object.

*/
var button = document.querySelector('button');

var fat = () => console.log(this);
var classic = function(){
  console.log(this);
}

//button.addEventListener('click',classic);
button.addEventListener('click',fat);


// set default values on fn argumemts
function isEqualTo (num1 = 10, num2 = 20) {
  return num1 == num2;
}


// we can skip default values on some arguments
function isEqualTo2 (num1, num2 = 20){
  return num1 == num2;
}
console.log(isEqualTo2(20));

/* the initialisation of arguments is in the order
in which the arguments were declared.
The values of the arguments in the function should 
either be given a value while calling the function
or the argument should have a default value. JS does
not assume values for any of the argument
*/

//num2 stays undefined in this code snippet 
function isEqualTo3 (num1 = 10, num2){
  console.log(num1);
  console.log(num2);
  return num1 == num2;
}
console.log(isEqualTo3(11));

// calculations possible in default values for arguments
function isEqualTo4 (num1 = 5, num2 = 10/2){
  console.log(num1);
  console.log(num2);
  return num1 == num2;
}
console.log(isEqualTo4());

// possible to assign variables inside default values

let a = 100;
var fatArrowWithDefault = (num1, num2 = a) => num1 == num2;
console.log(fatArrowWithDefault(100));


/*
	it is possible now to initialise values in the object literal
	if the variable has been defined before. In the below example 
	city is not initialise inside the object literal but still takes
	up the value of the variable city defined before which is stuttgart

	Also, we could defined the key as a variable like in the below example 
	for ageFieldIdentifier
*/
let name = 'karan';
let age = 30;
let city = 'stuttgart'

let ageFieldIdentifier = 'age';

let person = {
  name: 'tom',
  [ageFieldIdentifier]: 30,
  city,
  greet() {
    console.log(this.name + ', ' + this.age);
  }
}


console.log(person);

/*
rest operator allows us to collect the values 
and form an array out of it. We can use it for
 functions which are performing loop operations
 on the function argument and we want the 
 flexibility to pass list of numbers instead 
 of always an array. In the below example although
 the sumUp funciton expects a single argument, we
  are passing more than one argument to the funciton
  and then the ...numbers will collect all the
  passed parameter into 1 array
*/

let sumUp = (...numbers) => {
  let result = 0;
  for (let number of numbers){
    result += number;
  }
  return result;
}

console.log(sumUp(100,20))

/* here we pass 2 numbers and then one string
to the sumUp, so the array is formed and then looped over
and 100 and 20 are first added to 120 and then
120 is converted to string whilea adding to 10
*/

console.log(sumUp(100,20,'10'))


/*
  the spred operator is the exact opposite of rest operator.
  some functions take in a list of arguments and then
  perform some operations on those arguments. It might happen
  that we have an array instead of this list. In this case, we 
  pass the numbers with the spread operator which would convert
  the passed numbers array into a list of numbers
  Math.max(...numbers)
  becomes something like 
  Math.max(number1, number2, number3)
*/


let numbers = [11,32,1,56,99,46];

console.log(Math.max(...numbers));


// new for loop in ES6 - less keystrokes
let numbers = [11,32,22,55]

for (let number of numbers) {
  console.log(number);
}


/* template literals allow multi lines on the string
  and also allow us to read dynamically the values 
  that are declare outside the template literal. */
let name = 'karan';

let introduction = `
  hi there !! my name is ${name + ' and i m 30 years old'}

`;

console.log(introduction)

/*
  destructing allows to assign values to more than
  one variable in a single line of code
  the assignment is done on the order of declaration
  in the array being copied.
*/
let products = ['MX 281', '38$', true]

let [name, value, instock] = products;
console.log(name);
console.log(value)

// spread operator can be used to assign the 
// rest of the values to the variable
let [name2, ...value2] = products;
console.log(value2);

// example of having defaults in the LHS in case a 
// value is not received from the RHS
let [name3, value3, stock3, family='Chainsaws' ] = products;
console.log(family);


// destructuring used to swap values
let a = 10;
let b = 20;

[b, a] = [a,b];
console.log(b);

// we can skip unwanted values
let numbers1 = [10,20,30];
let [c,,e] = numbers1; 
console.log(c,e);
