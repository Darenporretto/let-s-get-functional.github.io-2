// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io-2/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

/*
I: Function takes in an array. 
O: Function returns the number of male customers. 
C: Function must use filter method. 
E:
*/
var maleCount = function(array) {
    // Use the filter() method to create a new arrray with all of the elements that pass the implemented function test
    // Checks if the customers gender is strictly equal to male
    // Use .length  to give the number of elements in the filtered array with the count of male customers
    return array.filter(customer => customer.gender === 'male').length;
};

/*
I: Function takes in an array. 
O: Function return the number of female customers. 
C: Function must use the reduce method. 
E:
*/
var femaleCount = function(array) {
    // Use the reduce() method to iterate over the array
    return array.reduce((count, customer) => {
        // Start the accumulator count at zero
        // If the gender is female increment the count by one
        // Return the total number of femailes
        return customer.gender === "female" ? count + 1 : count;
    }, 0);
};

/*
I: Function takes in an array. 
O: Function should return a string. 
C:
E:
*/
var oldestCustomer = function(array) {
    // Use the reduce() method to iterate over each customer and check their age
    return array.reduce((oldest, customer) => {
        // Returns a string of the oldest customer after iterating  with reduce
        // Use ternary operator in place of an if else statement
        return (customer.age > oldest.age) ? customer : oldest;
    }).name;
};

/*
I: Function takes in an array.
O: Function should return a string. 
C:
E:
*/
var youngestCustomer = function(array) {
    // Use the reduce() method to iterate over each customer and check their age
    return array.reduce((youngest, customer) => {
        // Returns a string of the younget customer after iterating  with reduce
        // Use ternary operatorin rplace of an if else statement
        return (customer.age < youngest.age) ? customer : youngest;
    }).name;
};

/*
I: Function takes in an array. 
O: Function should return a number representing th avverage balance
E:
C:
*/

var averageBalance = function(array) {
    const totalBalance = array.reduce((sum, customer) => {
        // Remove dollar sign and commas and convert to number
        const balance = parseFloat(customer.balance.replace(/[^0-9.-]+/g, ''));
        return sum + balance;
    }, 0); // start the sum from 0
    
    // Calculate the average by dividing the total balance by the number of customers
    return totalBalance / array.length;
};


/*
I: Function takes in an array. 
O: Function should return a number representing how many customer's names begin with a given letter. 
E:
C:
*/

var firstLetterCount = function(array, letter) {
    // Use the filter() method to create a new arrray with names that begin with given letter
    // Check if customer.name is equal to provided letter
    // Change to lower case for case insenitivity comparison
    return array.filter(customer => customer.name[0].toLowerCase() === letter.toLowerCase()).length;
};


var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
