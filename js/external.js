"use strict";

console.log("Hello from external JavaScript");


alert('Welcome to my Website!');

var userInput = prompt('What is your favorite color?');
alert('Great, ' + userInput + ' is my favorite color too!' );




<!--You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear-->
<!--(for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).-->
<!--If price for a movie per day is $3, how much will you have to pay?-->

<!--1. ask user what the rental fee is &ndash;&gt; prompt & variable-->

var rentalFee = prompt("What is the daily rental fee?");

<!--2. ask user how many days little mermaid &ndash;&gt; prompt & variable-->

var littleMermaid = prompt("How many days will you be renting The Little Mermaid?");

<!--3. ask user how many days brother bear &ndash;&gt; prompt & variable-->

var brotherBear = prompt("How many days will you be renting Brother Bear?");

<!--4. ask user how many days hercules &ndash;&gt; prompt & variable-->

var hercules = prompt("How many days will you be renting Hercules?");

<!--5. calculate the total price * number of days-->

var totalPrice = (littleMermaid * rentalFee) + (brotherBear * rentalFee) + (hercules * rentalFee);

<!--6. alert the total price-->

alert("Your total price is " + "$" +totalPrice + ".");



// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,' +
// ' they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook ' +
// '$350. How much will you receive in payment for this week? You worked 10 hours for ' +
// 'Facebook, 6 hours for Google and 4 hours for Amazon.

// ask user for Google's hourly rate

var googleRate = prompt("What is your hourly rate at Google?");

// ask user for Amazon's hourly rate

var amazonRate = prompt("What is your hourly rate at Amazon?");

// ask user for Facebook's hourly rate

var facebookRate = prompt("What is your hourly rate at Facebook?");

// ask user how many hours they worked for Google

var googleHours = prompt("How many hours did you work for Google this week?");

// ask user how many hours they worked for Amazon

var amazonHours = prompt("How many hours did you work for Amazon this week?");

// ask user how many hours they worked for Facebook

var facebookHours = prompt("How many hours did you work for Facebook this week?");

// calculate hours * rates

var totalPayment = (googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours);

// alert total payments received this week

alert("Your total payment for the week is $" + totalPayment);