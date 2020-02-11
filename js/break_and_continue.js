"use strict";
(function () {
    // Prompt the user for an odd number between 1 and 50. Use a loop and a break statement     to continue prompting the user if they enter invalid input.

    do {
        var userNumber = parseInt(prompt("Pick an odd number between 1 and 50"));
        if (userNumber % 2 === 0) {
            alert(userNumber + " is not odd")
        } else if (userNumber < 1 || userNumber > 50) {
            alert(userNumber + " is not between 1 and 50");
        }else {
            break;
        }
    } while (true)


    // Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.


})();
