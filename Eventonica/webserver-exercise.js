let http = require("http");
let fs = require("fs");

let server = http.createServer(function(req, res){
    console.log("request was made: " + req.url);

    if(req.url === "/home" || req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream(__dirname + "/index.html").pipe(res);

    }


    // res.writeHead(200, {"Content-Type": "text/plain"});
    // res.end("Hello World! This is my first webserver");

});

server.listen(3000, "127.0.0.1");
console.log("Listening to port 3000");