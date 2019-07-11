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
/*
//async
exports.do_reg=function(req,res,next){
	var name=req.body.uname;
	var pass=req.body.pass;

	console.log(name);
	console.log(pass);

	//验证用户名是否重名

	var asyncFunc=function(name){
		return new Promise(function(resolve,reject){
			User_model.checkName(name,function(err,data){
				resolve(data);
			})
		})
	}
	

	async function asyncFuncNew(name,pass){
		var data=await asyncFunc(name);
		if(data.length>0){
			res.redirect("/reg");
		}else{		
			User_model.insert_data(name,pass,function(err,data){
	        		if(data.affectedRows>0){
					res.redirect('/login');
				}
        	});
		}
	};
	asyncFuncNew(name,pass);
	

	//async waterfall解决回调地狱问题
	
	async.waterfall([
		function(callback){
			User_model.checkName(name,function(err,data){
				callback(null,data);
			});
		},
	    function(data, callback) {
	        // arg1 now equals 'one' and arg2 now equals 'two'
	        //callback(null, 'three');
	        if(data.length>0){
	        	res.redirect("/reg");
	        }else{
	        	User_model.insert_data(name,pass,function(err,data){
					//console.log(data);
					if(data.affectedRows>0){
						res.redirect("/login");
					}
				});
	        }
	    },
	    
	], function (err, result) {
	    // result now equals 'done'
	    console.log(result);
	});


}

exports.login = function(req,res,next){
	res.render("login.ejs");
}
*/


