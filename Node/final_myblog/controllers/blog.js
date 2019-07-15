var Blog_model=require("../models/blog_model.js");
var moment=require("moment");

// var session = require('express-session');


exports.index=function(req,res,next){

	//所有的文章都查出来
	
	var uid=req.session.USER_ID;
	Blog_model.sel_id_by_data(uid,function(err,data){
		Blog_model.sel_userSettings_by_id(uid,function(err,data1){
			console.log(data1);
			req.session=data[0];
			
			res.render("index_logined",{
				'blogs':data,
				'sess':req.session,
				'userin':data1[0],
			})
		});
	})
	

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

//跳转修改页面
exports.update=function(req,res,next){
	var bid=req.query.bid;
	Blog_model.sel_data_by_bid(bid,function(err,data){
		if(data.length>0){
			res.render("updateBlog",{
				"sess":req.session,
				"blog":data[0],
			});
		}
	})
}

//修改发表过的文章
exports.do_update=function(req,res,next){
	//获取 标题 内容  哪个文章
	var title=req.body.title;
	var content=req.body.content;
	var hid=req.body.hid;

	console.log(title);
	console.log(content);
	console.log(hid);
	Blog_model.update_data(title,content,hid,function(err,data){
		if(data.affectedRows>0){
			res.redirect("/index");
			
		}
	})
}

//删除已发表过的文章
exports.del=function(req,res,next){
	var bid=req.query.bid;
	Blog_model.del_data_by_bid(bid,function(err,data){
		if(data.affectedRows>0){
			res.redirect("/index");
		}
	})
}

//加载阅读全文页面
exports.all=function(req,res,next){
	var bid=req.query.bid;
	Blog_model.update_hits_by_bid(bid,function(err,data){
		if(data.affectedRows>0){
			Blog_model.sel_data_by_bid(bid,function(err,data){
				if(data.length>0){
					var blog_data_one=data[0];
					//console.log(blog_data_one);
					Blog_model.get_up_by_one(bid,function(err,data){
						if(data.length>0){
							var up_data=data[0];
						}else{
							var up_data="";
						}

						//console.log(up_data);
						Blog_model.get_down_by_one(bid,function(err,data){
							if(data.length>0){
								var down_data=data[0];
							}else{
								var down_data="";
							}

							//console.log(down_data);
							res.render("viewPost_logined",{
								'sess':req.session,
								'maindata':blog_data_one,
								'predata':up_data,
								'nextdata':down_data,
							});
						});
					});
				}
			})
		}
	});

}

//添加分类管理页面
exports.blogs=function(req,res,next){
	var uid=req.session.USER_ID;
	Blog_model.get_blogs_by_id(uid,function(err,data){
		if(data.length>0){
			// console.log(data[0]);
			// console.log(req.session);
			res.render("blogs",{
				"sess":req.session,
				"blogs":data,
			});
		}
	})
}
//??????博客评论管理
exports.blogComments=function(req,res,next){
	// var bid=req.query.bid;
	// Blog_model.get_blogComments_by_id(bid,function(err,data){
	// 	if(data.length>0){
	// 		console.log(data);
	// 		console.log(req.session);
	// 		res.render("blogComments",{
	// 			"sess":req.session,
	// 			"blogs":data,
	// 		});
	// 	}
	// })
	res.render("blogComments");
}

//修改个人资料
exports.profile=function(req,res,next){
	uid=req.session.USER_ID;
	Blog_model.sel_userSettings_by_id(uid,function(err,data){
		// console.log(data);
		res.render("profile",{
			"sess":req.session,
			"users":data[0],
		})
	})
}

exports.do_profile=function(req,res,next){
	var name=req.body.name;
	var uid=req.session.USER_ID;	
	Blog_model.update_profile_by_uid(name,uid,function(err,data){
		console.log(name,"1234567890");
		console.log(data,"1234567890");
		if(data.affectedRows>0){
			console.log("zhixing");
			res.redirect("/index");
		}
	})

}

//个性设置

exports.userSettings=function(req,res,next){
	uid=req.session.USER_ID;
	Blog_model.sel_userSettings_by_id(uid,function(err,data){
		// console.log(data);
		res.render("userSettings",{
			"sess":req.session,
			"users":data[0],
		})
	})
}

exports.do_userSettings=function(req,res,next){
	uid=req.session.USER_ID;
	Name=req.body.space_name;
	console.log(uid,"123");
	console.log(Name,"456");
	Blog_model.update_userSettings_by_id(uid,Name,function(err,data){
		// console.log(data);
		if(data.affectedRows>0){
			res.redirect("/index");
		}
	})
}

exports.chpwd=function(req,res,next){
	uid=req.session.USER_ID;
	Blog_model.sel_userSettings_by_id(uid,function(err,data){
		// console.log(data);
		res.render("chpwd",{
			"sess":req.session,
			"users":data[0],
		})
	})
}

exports.inbox=function(req,res,next){
	uid=req.session.USER_ID;
	Blog_model.sel_message_by_id(uid,function(err,data){
		// console.log(req.session,"000");
		// console.log(data,"000");
		res.render("inbox",{
			"sess":req.session,
			"messages":data,
		})
	})
}

exports.outbox=function(req,res,next){
	uid=req.session.USER_ID;
	Blog_model.sel_outmess_by_id(uid,function(err,data){
		console.log(req.session,"100");
		console.log(data,"100");
		res.render("outbox",{
			"sess":req.session,
			"messages":data,
		})
	})
}

//删除站内留言
exports.delmess=function(req,res,next){
	var mid=req.query.mid;
	Blog_model.del_mess_by_mid(mid,function(err,data){
		if(data.affectedRows>0){
			res.redirect("/inbox");
		}
	})
}


