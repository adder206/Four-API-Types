//XML Http Request()
const request  = new XMLHttpRequest();
request.open("GET", 'https://jsonplaceholder.com/typicode.com/users');
request.send();
request.onload = () => {
    if (request.status === 200) {
        console.log(JSON.parse(request.response));
    } else {
        console.log(`error ${request.stats}`)
    }
}