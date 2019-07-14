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

//增加·文章并刷新文章分类
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
				// res.redirect("/index");

			Blog_model.update_catalog_by_count(cid,function(err,data){
				//console.log(data);
				if(data.affectedRows>0){
					res.redirect("/index");
				}
				
			})
			
		}
	})

}

//通过uid查出他的分类 喷出分类管理页面
exports.Catalog=function(req,res,next){
	uid=req.session.USER_ID;
	Blog_model.checkCatalog(uid,function(err,data){
		//console.log(data);
		res.render("blogCatalogs",{
			"sess":req.session,
			"catalogs":data,
		})
	})
}

//添加博客分类
exports.addBlogCatalog=function(req,res,next){
	var cname=req.body.name;
	var uid=req.session.USER_ID;
	Blog_model.add_catalog(cname,uid,function(err,data){
		if(data.affectedRows>0){
			res.redirect("/blogCatalogs");
		}
	})
}