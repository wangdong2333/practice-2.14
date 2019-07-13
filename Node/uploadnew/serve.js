var http=require('http');
var url=require('url');
var fs = require('fs');
var util = require('util');
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
    var pathname=__dirname+"/static/"+url.parse("index.html").pathname;
    //读取文件（把文件加载到内存当中）
    var realf=fs.readFileSync(pathname,'utf-8');
    //把文件打包成数据回传
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(realf);
}
function  goUpload(res,req){
    var form = new formidable.IncomingForm();
    form.uploadDir="./upload";
    form.keepExtensions = true;

     form.parse(req, function(err, fields, files) {
         //用fs处理加后缀名
    //     var oldurl=files.sfile.path;
    //     var newurl=__dirname+"/upload/"+files.sfile.name;
    //     console.log(files.sfile.path);
    //     console.log(files.sfile.name);
        
    //     fs.rename(oldurl,newurl,function(err){
    //         if(err) throw err;
    //         res.writeHead(200,{"Content-type":"text/plain"});
    //         res.end("上传文件成功");
    //     })
        
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
    return;
}