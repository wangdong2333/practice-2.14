var User_model=require("../models/user_model.js");
var crypto=require("crypto");

exports.unlogin=function(req,res,next){
	req.session=null;
	res.redirect("/index");
}

exports.login=function(req,res,next){
	res.render("login");
}

exports.do_login=function(req,res,next){
	var name=req.body.email;
	var pass=req.body.pwd;

	User_model.sel_name_by_pass(name,pass,function(err,data){
		if(data.length>0){
			//设置cookie session
			req.session=data[0];
			res.redirect("/index");
		}
	})
}

exports.reg=function(req,res,next){
	res.render("reg");
}

exports.do_reg=function(req,res,next){
	var name=req.body.email;
	var pass=req.body.pwd;
	var mpass=md5(pass);

	User_model.insert_data(name,mpass,function(err,data){
		//console.log(data);
		if(data.affectedRows>0){
			res.redirect("/login");
		}
	})
}

exports.checkname=function(req,res,next){
	var name=req.body.value;
	User_model.checkname(name,function(err,data){
		if(data.length>0){
			res.send("success");
		}else{
			res.send("error");
		}
	})
}


/*
get 
(1) http://localhost:3000/user/laoshan
(2) http://localhost:3000/user?name=laoshan

    req.params    req.params.name  router.get("/user/:name",User.do_reg)
    req.query     req.query.name  router.get("/user",User.do_reg)

post  req.body req.params()*/

function md5(str){
	var hash=crypto.createHash("md5");
	hash.update(str);
	var md5str=hash.digest('hex');
	return md5str;
}