"use strict";

// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.






function wait(number) {

    return new Promise((resolve, reject) => {

    setTimeout(() => {

            resolve();

        }, number); //setTimeout()

}); //new promise()



} //wait()





// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// fetch('https://swapi.co/api/people/1').then((info) => {
//     return info.json();
// }).then((data) => {
//     console.log(data);
// }).catch(() => {
//     console.log('error');
// });



// 98c32379190d69592e02263c854c6a7fb5c8b67d GitHub API Key

function lastCommit(gitHubUsername) {


        fetch(`https://api.github.com/users/${gitHubUsername}/events`, {headers: {'Authorization': '98c32379190d69592e02263c854c6a7fb5c8b67d'}}).then((data) => {

            return data.json();

        }).then((userData) => {

            userData.filter((user) => {
                return user.type === 'PushEvent'
            }); //filter()
        }).then(listEvents => console.log(listEvents[0].created_at)) //fetch()

} //lastCommit

lastCommit('ryanlsmith142');

function getCommit(user){
    fetch( `https://api.github.com/users/${user}/events`, {headers: {'Authorization': `98c32379190d69592e02263c854c6a7fb5c8b67d` }})
        .then(response => response.json())
        .then(data => data.filter(function (object) {
            return object.type === 'PushEvent'
        }))
        .then(listEvents => console.log(listEvents[0].created_at))
}
getCommit("ryanlsmith142");