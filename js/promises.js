"use strict";
// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
// const getCake = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (goodKid) {
//             resolve("CAAAAAAKE!!");
//         } else {
//             reject("NO CAAAAKE!!! :((((");
//         }
//     }, 2000);
// });


const wait = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, num);
    });
};



wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 second'));





//fetch(url, {headers: {'Authorization': 'be3f33d8c72456ad6eaedf68d8fa89e70cce391d'}})



// Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.


const lastCommit = (userName) => {
    fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': 'token bc3d1c18daa4bcc0812d779bcda880296e067214   '}})
        .then(response => response.json())
        .then(data => {
            console.log(data[0].created_at); // Prints result from `response.json()` in getRequest
        })
        .catch(error => console.error(error))
};

lastCommit("jasmineannrivera");