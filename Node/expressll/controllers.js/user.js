// var User_model=require("../models/user_model.js");
var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'newblog'
  });
   
 

exports.reg=function(req,res,next){
	res.render("reg.ejs");
}

exports.do_reg=function(req,res,next){
	var name = req.body.uname;
	var pass = req.body.pass;
	// console.log(name);
	// console.log(pass);
	connection.connect();
   
	connection.query('SELECT * from user', function (error, results, fields) {
	  if (error) throw error;
	  //console.log('The solution is: ', results[0].solution);
	  console.log(results);
	  connection.end();
	});
	 
	
}



