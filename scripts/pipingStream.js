const { createWriteStream } = require('fs');

const writeStream = createWriteStream('../files/copy.txt');

process.stdin.pipe(writeStream);

