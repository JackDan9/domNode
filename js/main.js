/**
 * Created by JackDan9 on 2018/5/11.
 */
// import http from 'http'
// import cherrio from 'cherrio'

$(function () {
    let socket = io.connect("http://localhost:8080");
    socket.on('domUpdate', function (update) {
        let obj = update.objHtmlContent;
        console.log(obj)
    });
});
