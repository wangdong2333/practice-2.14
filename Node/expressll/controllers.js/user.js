var User_model=require("../models/user_model.js");

 
exports.reg=function(req,res,next){
	res.render("reg.ejs");
}

exports.do_reg=function(req,res,next){
	var name = req.body.uname;
	var pass = req.body.pass;
	// console.log(name);
	// console.log(pass);

	/*
	User_model.insert_data(name,pass,function(err,data){
		console.log(data);
		if(data.affectedRows>0){
			res.redirect('/login');
		}
		
	});*/

	//验证用户名是否重名
	User_model.check_name(name,function(err,data){
		console.log(data);
		if(data.length>0){
			res.send("用户名重名");
		}else{
			User_model.insert_data(name,pass,function(err,data){
				console.log(data);
				if(data.affectedRows>0){
					res.redirect('/login');
				}
				
			});
		}
	})

	
}

exports.login = function(req,res,next){
	res.render("login.ejs");
}



