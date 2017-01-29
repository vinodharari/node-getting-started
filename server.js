var http = require("http");
var fs = require("fs");
var static = require("./static.js");

http.createServer(function(request, response){
    debugger;
    console.log(`Incoming request : ${request.url}`);

    if(static.canHandleRequest(request)){
        static.serverStaticContent(request, response);
        return;
    }

    response.end("Hello World");

}).listen(3000, "127.0.0.1", () => {
    console.log("Server is listening on localhost port 3000");
})