"use strict";

const users = [
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//.filter() 3 LANGUAGES

let threeLang = users.filter((user) => user.languages.length >= 3);

// console.log(threeLang);






//.map() USER EMAIL

let userEmail = users.map((user) => user.email);

// console.log(userEmail);





//.reduce() average and total years experience

let yearsExperienceAvg = users.reduce((yearsTotal, user) => {
    yearsTotal += user.yearsOfExperience;

    return yearsTotal;

}, 0) / users.length;

// console.log(yearsExperienceAvg);






// reduce() find longest email

let longestEmail = users.reduce((email, user) => {

    if(user.email.length > email.length) {
        email = user.email;
    }

    return email;

}, "");

console.log(longestEmail);




// reduce() string of instructors


let nameString = users.reduce((stringOfInstructors, user, index) => {

    if(index === users.length - 1) {
        return `${stringOfInstructors}${user.name}.`;
    } else {
        return `${stringOfInstructors}${user.name}, `;
    }

}, "Your instructors are: ");

// console.log(nameString);






// BONUS

// .reduce get a unique list of languages.

let uniqueLang = users.reduce((langString, user) => {
    langString += user.languages;
    return langString;
});

// console.log(uniqueLang);