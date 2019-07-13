var Blog_model=require("../models/blog_model.js");
var moment=require("moment");

// var session = require('express-session');


exports.index=function(req,res,next){

	//所有的文章都查出来
	
	var uid=req.session.USER_ID;
	Blog_model.sel_id_by_data(uid,function(err,data){
		console.log(data);
		res.render("index_logined",{
			'blogs':data,
			'sess':req.session,
		})
	});

}

exports.add=function(req,res,next){
	var uid=req.session.USER_ID;
	Blog_model.get_catalogs_by_id(uid,function(err,data){
		res.render("newBlog",{
			"sess":req.session,
			"catalogs":data
		});
	})	
}

exports.do_add=function(req,res,next){
	//title content date uid cid
	var title=req.body.title;
	var content=req.body.content;
	var date=moment().format();
	var uid=req.session.USER_ID;
	var cid=req.body.catalog;
	console.log(cid);

	Blog_model.ins_blog_by_data(title,content,cid,date,uid,function(err,data){
		if(data.affectedRows>0){
				res.redirect("/index");


			// Blog_model.update_catalog_by_count(cid,function(err,data){
			// 	//console.log(data);
			// 	if(data.affectedRows>0){
			// 		res.redirect("/index");
			// 	}
				
			// })
			
		}
	})

}