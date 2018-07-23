var fs = require('fs');
var { promisify } = require('util');
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var readdir = promisify(fs.readdir);
var beep = () => process.stdout.write("\x07");
var delay = (seconds) => new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000)
});

Promise.all([
    writeFile('readme.md', 'Hello World'),
    writeFile('readme.txt', 'Hello World'),
    writeFile('readme.json', '{"hello": "world"}')
])
    .then(() => readdir(__dirname))
    .then(console.log);