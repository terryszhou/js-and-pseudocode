/*
	Part 1: Create three variables: name, age, address.
	Create a fourth variable, greeting, that combines these 3 variables
	to form a greeting.
	For example, "Hello, my name is Anthony. I'm 20 years old and live in 100 Main St."
	Log this variable to the console (console.log(yourVariableName)). 
	Check the console to make sure you're getting the desired result.

*/

let name = "Terry"
let age = 27
let address = "221B Baker Street"
let greeting = "Hello, my name is " + name + ". I'm " + age + " years old and live at " + address + "."
console.log(greeting)

/*
	Part 2: Create another variable called greeting2. This time, use the
	new ES6 Syntax, string interpolation, to create the same greeting.

	Hint: String interpolation uses backticks (`) instead of quotation marks.

	Log this variable to the console (console.log(yourVariableName)). 
	Check the console to make sure you're getting the desired result.

*/

let greeting2 = `Hello, my name is ${name}. I'm ${age} years old and live at ${address}.`
console.log(greeting2)


/* 
	Part 3: "Code Testing." Let's check and see if we did everything correctly and that `greeting` returns the same value as `greeting2`.
	Create a variable problemSolved whose value is the boolean value of if `greeting` and `greeting2` are equivalent. Log this variable to the console to check the values result.
	If the return is false, correct your bugs above until `greeting` and `greeting2` are equivalent. 
*/

let problemSolved = greeting === greeting2
console.log(problemSolved)

/*
	Part 4: (No coding is needed for this part).
	We are given a list of 20 numbers. We have to go through the list and find the
	largest number.

	What would the pseudocode for this problem look like? What variables would we need?

	Hint: How would we solve this problem if we had to do this with pencil and paper?
	What number would we write down to remember? Anything that you write down probably
	belongs in a variable.

	Bonus: What would the pseudocode look like if you also had to find the smallest number?
*/

/*
First we would put all twenty numbers into an array, and assign it to a variable. 
Then we would let a second variable represent the largest number. 
We would have to write a function that goes through the array item by item, and assigns a number from the array to the value of the second variable.
The function would compare each item to the value of the second variable; if the item is higher, it will replace the second variable's value. If it's lower or equal, nothing happens.
The function would go through the whole array and return the largest value.

For the smallest number, we'd do the same thing, except we'd have the function reassign the second variable's value if it was less than the compared items, not greater.
*/
