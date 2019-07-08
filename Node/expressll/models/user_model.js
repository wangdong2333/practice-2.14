//存放数据库代码


var db=require("./db.js");

exports.insert_data=function(name,pass,callback){
	var sql="insert into user(uname,pass) values(?,?)";
	db.query(sql,[name,pass],callback);
}

/*
var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'newblog'
  });


exports.insert_data=function(name,pass,callback){
    connection.connect();
    var sql="insert into user(uid,uname,pass) values(null,'"+name+"','"+pass+"')";
    console.log(sql);
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        //console.log('The solution is: ', results[0].solution);
        // console.log(results);
        callback(error,results);
        connection.end();
    });  
}
*/

/*
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'newblog'
});

exports.insert_data=function(name,pass,callback){
	pool.getConnection(function(err, connection) {
	  if (err) throw err; 
	  var sql="insert into user(uname,pass) values(?,?)";
	  connection.query(sql,[name,pass],function (error, results, fields) {
	    connection.release();
	    if (error) throw error;
	    callback(error,results);
	  });
	});
}
*/

