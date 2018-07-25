const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('../files/powder-day.mp4');
const writeStream = createWriteStream('../files/copy.mp4', {
    highWaterMark: 162891
});

readStream.on('data', (chunk) => {
    const result = writeStream.write(chunk);
    if (!result) {
        console.log('backpressure')
        readStream.pause();
    }
});

readStream.on('error', (error) => {
    console.log('an error occurred', error.message);
});

readStream.on('end', () => {
    writeStream.end();
});

writeStream.on('drain', () => {
    console.log('drained');
    readStream.resume();
})

writeStream.on('close', () => {
    process.stdout.write('file copied\n');
})
