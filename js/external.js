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


