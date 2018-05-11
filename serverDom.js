const express = require("express");

const app = express();

const http = require('http');

const server = http.createServer(app);

// const server = require("http").createServer(app);

const io = require("socket.io").listen(server);

const cheerio = require('cheerio');

app.use(express.static(__dirname));

server.listen(8080);

let url = 'http://www.ziroom.com/';

let interval = -1;

// let objHtml = {};
// let objHtml = '';

// let objHtml = '';

// function filterSlideList(html) {
//     if (html) {
//         var slideListData = [];
//         slideListData.push(html);
//         return slideListData;
//     } else {
//         console.log('无数据传入!')
//     }
// }
//
// function printInfo() {
//
// }

// console.log(slideListData);

io.sockets.on('connection', function () {
    if (interval < 0) {
        // interval = setInterval(function () {
            http.get(url, function(res) {
                let html = '';
                res.on('data', function(data) {
                    html += data;
                })
                res.on('end', function() {
                    let $ = cheerio.load(html); // JQuery Style
                    let slideList = $('#foucsSlideList');
                    let slideListData = [];
                    slideList.find('li').each(function (item) {
                        let pic = $(this);
                        // console.log(pic)
                        let pic_href = pic.find('a').attr('href');
                        slideListData.push({
                            pic_href: pic_href
                        })
                        // let con = $(this);
                        // let conList = con.find('div');
                        // console.log(conList)
                        // slideListData.push({
                        //     pic_href: pic_href
                        // })
                    })
                    io.sockets.emit("domUpdate", {
                        objHtmlContent: slideListData
                    });
                    // console.log(cheerio.load(html));
                    // console.log(cheerio(html))
                    // objHtml += cheerio(html);
                    // return objHtml
                    // sessionStorage.setItem('obj', objHtml);
                    // var slideListData = filterSlideList(html);
                    // printInfo(slideListData);
                })
            }).on('error', function() {
                console.log('Get data wrong!');
            })
        // }, 100000);
    }
    // let objHtmlContent = sessionStorage.getItem('obj');

});

console.log("DomServer is Working!");


