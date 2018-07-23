var fs = require('fs');
var http = require('http');
var file = '../files/powder-day.mp4';

http.createServer((req, res) => {
    fs.readFile(file, (error, data) => {

        if (error) {
            console.log('error: ', error);
        }
        res.writeHeader(200, {'Content-Type': 'video/mp4'});
        res.end(data);

    });

}).listen(3000, () => console.log('buffer is starting on http://localhost:3000'));