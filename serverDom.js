const express = require("express");

const app = express();

const http = require('http');

const server = http.createServer(app);

const io = require("socket.io").listen(server);

const cheerio = require('cheerio');

app.use(express.static(__dirname));

server.listen(8080);

let url = 'http://www.ziroom.com/';

let interval = -1;

let objHtmlCon = http.get(url, function(res) {
    let html = '';
    res.on('data', function(data) {
        html += data;
    })
    res.on('end', function() {
        let objHtml = cheerio(html);
        return objHtml;
    })
}).on('error', function() {
    console.log('Get data wrong!');
})

io.sockets.on('connection', function () {
    if (interval < 0) {
        interval = setInterval(function () {
            io.sockets.emit("domUpdate", {
                objHtmlContent: objHtmlCon
            });
        }, 1000);
    }
});

console.log("DomServer is Working!");


