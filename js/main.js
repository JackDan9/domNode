/**
 * Created by JackDan9 on 2018/5/11.
 */
$(function () {
    let socket = io.connect("http://localhost:8080");
    console.log(1);
    socket.on('domUpdate', function (update) {
        // let obj = update.objHtmlContent;
        // console.log(obj);
        console.log(1);
    });
});
