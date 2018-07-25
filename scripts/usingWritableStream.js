const fs = require('fs');
const readStream = fs.createReadStream('../files/powder-day.mp4');
const writeSteam = fs.createWriteStream('../files/copy.mp4');


readStream.on('data', (chunk) => {
    writeSteam.write(chunk);
});

readStream.on('error', (error) => {
    console.log('an error has occured', error.message);
});

readStream.on('end', () => {
    writeSteam.end();
});

readStream.on('close', () => {
    process.stdout.write('file copied\n');
});