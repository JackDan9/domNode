const http = require('http');

const cheerio = require('cheerio');

let url = 'http://www.ziroom.com/';

http.get(url, function(res) {
	let html = '';
	let endHtml = ''
	res.on('data', function(data) {
		// console.log(data);
		html += data;
	}) 
	res.on('end', function() {
		console.log(html)
	})
});