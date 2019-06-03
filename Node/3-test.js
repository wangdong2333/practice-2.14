var http=require("http");

http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/html"});
	//res.write("<h1>hello world</h1>");
	//res.end();
	res.end("<h2>hello world</h2>");
}).listen(3000);


console.log("server start port 3000"); 