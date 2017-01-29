var fs = require("fs");

function canHandleRequest(request){
    return request.url.startsWith("/static/")
        || request.url === "/vanaja.jpg";

}
exports.canHandleRequest = canHandleRequest;

function serverStaticContent(request, response){
    var url = request.url.substr(1);
    fs.readFile(url, function callback(error, data) {
        if(error){
            console.log("Error: file not found "+error);
            response.statusCode = 404;
            response.end();
            return;
        }
        response.end(data)
        console.log("end of file reading...")
    });
    console.log("end of serveStaticContent...")
}

exports.serverStaticContent = serverStaticContent;

