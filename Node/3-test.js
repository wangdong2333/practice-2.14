var http=require("http");

http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/html"});
	//res.write("<h1>hello world</h1>");
	//res.end();
	res.end("<h1>hello world</h1>");
}).listen(3000);


console.log("server start port 3000");