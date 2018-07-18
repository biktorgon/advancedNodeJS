//simpe Promise
const delay = (seconds) => new Promise((resolve, reject) => {
    setTimeout(resolve, seconds * 1000)
});

delay(1)
    .then(() => console.log('the delay has ended'));

console.log('end first trick');

//Promise return value
const delayValue = (seconds) =>  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('the long delay has ended')
    }, seconds * 1000);
});

delayValue(1)
    .then((message) => console.log(message))
    .then(() => 42)
    .then((number) => console.log(`returned value is ${number}`));

console.log('end second trick');