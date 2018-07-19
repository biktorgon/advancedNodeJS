var fs = require('fs');
var {promisify} = require('util');

var delay = (seconds, callback) => {
    if (seconds > 3) {
        callback(new Error(`${seconds} seconds it too long!`));
    } else {
        setTimeout(() => {
            callback(null, `the ${seconds} second delay is over`), seconds
        });
    }
}

var promiseDelay = promisify(delay);

promiseDelay(2)
    .then(console.log)
    .catch((error) => console.log(`error: ${error.message}`));


//create file
var writeFile = promisify(fs.writeFile);

writeFile('sample.txt', 'This is a sample')
    .then(() => console.log('file successfully created'))
    .catch((error) => console.log('error creating file'));