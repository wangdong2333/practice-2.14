var http=require('http');
var url=require('url');
var fs = require('fs');
var formidable=require('formidable');

http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    switch(pathname){
        case '/':
            goIndex(res);
            break;
        case '/parse':
            goUpload(res,req);
            break;
        default:
            res.writeHead(404,{"Content-type":"text/plain"});
            res.end("the page is gone");
    }
}).listen(3000);

console.log("serve start port 3000");

function goIndex(res){
    //读取路径
    var pathname=__dirname+"/static/"+url.parse("index.html").parse;
    //读取文件（把文件加载到内存当中）
    var realf=fs.readFileSync(pathname,'utf-8');
    //把文件打包成数据回传
    res.writeHead(200,{"Content-type":"text/plain"});
    res.end(realf);
}