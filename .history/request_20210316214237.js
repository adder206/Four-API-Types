
// // XML Http Request()
// const request  = new XMLHttpRequest();
// request.open("GET", 'https://jsonplaceholder.com/typicode.com/users');
// request.send();
// request.onload = () => {
//     if (request.status === 200) {
//         console.log(JSON.parse(request.response));
//     } else {
//         console.log(`error ${request.stats}`)
//     }
// }

// //fetch API
// fetch('https://jsonplaceholder.com/typicode.com/users')
//     .then(response => {
//             return response.json();
//     })
//     console.log(json);

// //fetch API second approach
// async function getUsers() {
//     let response = await fetch ('https://jsonplaceholder.com/typicode.com/users');
//     let data = await response.json();
//     return data;
// }

// getUsers().then(response => {
//     console.log(response)
// })

//axios - third party javascript library
console.log(window)