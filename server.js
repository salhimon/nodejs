const http = require("http");
http.createServer((Request, Response) =>{
    Response.end("Hello NODE !!!")
}).listen(3000);
