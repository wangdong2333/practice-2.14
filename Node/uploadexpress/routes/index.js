var express = require('express');
var router = express.Router();
var util = require("util");
http = require("http");
var formidable = require("formidable");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/parse",function(res,req,next){
  var form = new formidable.IncomingForm();
 
  form.parse(req, function(err, fields, files) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('received upload:\n\n');
    res.end(util.inspect({fields: fields, files: files}));
  });

  return;
});
module.exports = router;
