"use strict";
(function () {



    //Make a function named isOdd(number)
    function isOdd(number) {
        return number % 2 !== 0;
    }


    //Make a function named isEven(number)
    function isEven(number) {
        return number % 2 === 0;
    }

    //Make a function named identity(input) that returns the input exactly as provided.
    function identity(input) {
        return input;
    }

    //Make a function named isFive(input)
    function isFive(input) {
        return input === 5;
    }

    //Make a function named addFive(input) that adds five to some input.
    function addFive(input) {
        return input + 5;
    }

    //Make a function named isMultipleOfFive(input)
    function isMultipleOfFive(input) {
        return input % 5 === 0;
    }

    //Make a function named isThree(input)
    function isThree(input) {
        return input === 3;
    }

    //Make a function named isMultipleOfThree(input)
    function isMultipleOfThree(input) {
       return input % 3 === 0;
    }

    //Make a function named isMultipleOfThreeAndFive(input)
    function isMultipleOfThreeAndFive(input) {
        return input % 3 === 0 && input % 5 === 0;
    }

    //Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
    function isMultipleOf(target, n) {
        return target % n === 0;
    }


    //Make a function named isTrue(boolean)
    function isTrue(boolean) {
        return true;
    }


    //Make a function named isFalse(boolean)
    function isFalse(boolean) {
        return false;
    }


    //Make a function named isTruthy(input), remember that values other than true will behave like true convert to boolean
    function isTruthy(input) {

    }


    //Make a function named isFalsy(input), remember that values other than false behave like false
    function isFalsy() {

    }


    //Make a function named isVowel(letter)
    function isVowel(letter) {
        return ((/[aeiouAEIOU]/).test(letter));

    }

    // console.log(isVowel("a"));


    //Make a function named isConsonant(letter)
    function isConsonant(letter) {
        return (!(/[aeiouAEIOU]/).test(letter));
    }
    // console.log(isConsonant("a"));



    //Make a function named isCapital(letter)
    function isCapital(letter){
        return letter === letter.toUpperCase();
    }




    //Make a function named isLowerCase(letter)
    function isLowerCase(letter) {
        return letter === letter.toLowerCase();
    }



    //Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
    function hasLowerCase(string) {
        return (/[a-z]/.test(string));
    }



    //Make a function named isSpace(letter) that returns if a character is a space character
    function isSpace(letter) {
        return letter === " ";
    }



    //Make a function named isZero(number)
    function isZero(number) {
        return number === 0;

    }



    //Make a function named notZero(input) that returns true if the input is not zero
    function notZero(input) {
        return input !== 0;

    }



    //Write a function named lowerCase(string)
    function lowerCase(str) {
        return str.toLowerCase();

    }



    //Write a function named double(n) that returns a number times two
    function double(n) {
        return n * 2;

    }



    //Write a function named triple(n) that returns a number times 3
    function triple(n) {
        return n * 3;

    }



    //Write a function named quadruple(n) that returns a number times 4
    function quadruple(n) {
        return n * 4;

    }




    //Write a function named half(n) that returns 1/2 of the provided input
    function half(n) {
        return n / 2;

    }




    //Write a function named subtract(a, b) that returns a minus b
    function subtract(a, b) {
        return a - b;

    }




    //Write a function named multiply(a, b) that returns the product of a times b
    function multiply(a, b) {
        return a * b;

    }




    //Write a function named divide(a, b) that returns a divided by b
    function divide(a, b) {
        return a / b;

    }





    //Write a function named remainder(a, b) that returns the remainder after dividing a by b
    function remainder(a, b) {
        return a % b;

    }



    //Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
    function modulo(a, b) {
        return a % b;

    }




    //Write a function named cube(n) that returns n * n * n
    function cube(n) {
        return Math.pow(n,3);

    }




    //Write a function named squareRoot(n) that returns the square root of the input
    function squareRoot(n) {
        return Math.sqrt(n);

    }




    //Write a function named cubeRoot(n) that returns the cube root of the input
    function cubeRoot(n) {
        return Math.cbrt(n);

    }





    //Write a function named invertSign(number) that returns a negative version of
    // a postive number, a positve version of negative, and false for all else.
    function invertSign(number) {
        return number * -1;

    }





    //Write a function named degreesToRadians(number)
    function degreesToRadians(number) {
        return number * (Math.PI/180);

    }





    //Write a function named radiansToDegrees(number)
    function radiansToDegrees(number) {
        return number * (180/Math.PI);

    }





    //Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
    function isBlank(input) {


    }




    //Make a function named trim(string) that removes empty spaces before and after the input.















































})();
