var delay = (seconds) => new Promise((resolve, reject) => {

    if (seconds > 3) {
        reject(new Error(`${seconds} is too long!`))
    }

    setTimeout(() => {
        resolve('the long delay has ended');
    }, seconds * 1000);


});

delay(3)
    .then((message) => console.log(message))
    .then(() => 42)
    .then((number) => console.log(`hello world: ${number}`))
    .then((error) => console.log(`error: ${error}`));

console.log('end first tick')